// src/app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  BookOpen, Plus, FileText, Key, ArrowRight, GraduationCap, 
  CheckCircle, Sliders, ShieldCheck, Trash2, Sparkles, BookOpenCheck,
  Settings, X, Clock, Files
} from "lucide-react";
import { getProjects, createNewProject, deleteProject, saveProject } from "@/lib/storage/projectStore";
import { seedSampleProject } from "@/lib/storage/mockData";
import { seedSMPProject } from "@/lib/storage/mockDataSMP";
import { seedSMAProject } from "@/lib/storage/mockDataSMA";
import { Project } from "@/types/project";
import { ConfirmModal } from "@/app/components/ConfirmModal";
import { useToast } from "@/app/components/Toast";

export default function HomePage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [customKey, setCustomKey] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  // Helper to safely render text even if the value is an object (caused by LLM schemas)
  const renderSafeText = (val: any): string => {
    if (val === null || val === undefined) return "";
    if (typeof val === "string") return val;
    if (typeof val === "object") {
      if (Array.isArray(val)) {
        return val.map(item => renderSafeText(item)).join(", ");
      }
      if (val.type && val.description) {
        return `${val.type}: ${val.description}`;
      }
      return val.description || val.message || val.text || val.title || val.type || JSON.stringify(val);
    }
    return String(val);
  };

  // Load projects and custom key from localStorage on mount
  useEffect(() => {
    setProjects(getProjects());
    const savedKey = localStorage.getItem("gemini_custom_api_key");
    if (savedKey) {
      setCustomKey(savedKey);
    }
  }, []);

  const handleSaveApiKey = (key: string) => {
    setCustomKey(key);
    if (key.trim()) {
      localStorage.setItem("gemini_custom_api_key", key.trim());
    } else {
      localStorage.removeItem("gemini_custom_api_key");
    }
  };

  const handleSaveAndCloseSettings = () => {
    handleSaveApiKey(customKey);
    setShowSettings(false);
    showToast("success", "Pengaturan Disimpan", "Kunci API berhasil disimpan.");
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newProj = createNewProject(newTitle.trim());
    router.push(`/project/${newProj.id}`);
  };

  const handleDeleteProject = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setDeleteTarget(id);
  };

  const confirmDeleteProject = () => {
    if (deleteTarget) {
      deleteProject(deleteTarget);
      setProjects(getProjects());
      showToast("success", "Proyek Dihapus", "Proyek berhasil dihapus dari daftar.");
      setDeleteTarget(null);
    }
  };

  const handleSeedDemo = () => {
    const demoProj = seedSampleProject();
    saveProject(demoProj);
    router.push(`/project/${demoProj.id}`);
  };

  const handleSeedDemoSMP = () => {
    const demoProj = seedSMPProject();
    saveProject(demoProj);
    router.push(`/project/${demoProj.id}`);
  };

  const handleSeedDemoSMA = () => {
    const demoProj = seedSMAProject();
    saveProject(demoProj);
    router.push(`/project/${demoProj.id}`);
  };

  const getStatusBadgeColor = (status: Project["status"]) => {
    switch (status) {
      case "draft":
        return "bg-slate-100 text-slate-700 border-slate-200";
      case "blueprint_ready":
        return "bg-sky-50 text-sky-700 border-sky-200";
      case "documents_ready":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "qa_ready":
        return "bg-teal-50 text-teal-700 border-teal-200";
      case "exported":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getStatusText = (status: Project["status"]) => {
    switch (status) {
      case "draft": return "Rencana Ajar";
      case "blueprint_ready": return "Silabus Siap";
      case "documents_ready": return "Modul Siap";
      case "qa_ready": return "Sudah Dicek";
      case "exported": return "Selesai";
      default: return "Draft";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16 relative overflow-hidden">
      {/* Dynamic Agentic Background */}
      <div className="absolute inset-0 pointer-events-none z-0 no-print">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[120px] mix-blend-multiply"></div>
      </div>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-teal-600 text-white p-2 rounded-xl shadow-md">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-extrabold text-xl tracking-tight text-slate-800">
              Ramu<span className="text-teal-600">Ajar</span> AI
            </h1>
            <p className="text-xs text-slate-500 font-medium tracking-wider uppercase">Platform Rancang Bahan Ajar</p>
          </div>
        </div>

        {/* Settings Button */}
        <div className="flex items-center gap-2">
          {customKey && (
            <span className="text-xs text-emerald-600 font-semibold hidden sm:inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              API Aktif
            </span>
          )}
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="text-slate-500 hover:text-teal-600 p-2.5 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Pengaturan"
          >
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 no-print animate-fade-in">
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setShowSettings(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-5 animate-scale-in">
            <button
              onClick={() => setShowSettings(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="font-bold text-lg text-slate-900">⚙️ Pengaturan</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Secara bawaan (*default*), aplikasi memproses API dari backend melalui konfigurasi <code className="bg-slate-100 px-1 py-0.5 rounded">.env.local</code>. 
              Gunakan kolom di bawah ini <strong className="text-slate-700">hanya jika</strong> Anda ingin menjalankan purwarupa (*demo*) lokal menggunakan kunci khusus untuk *browser* ini.
            </p>

            <div>
              <label className="text-sm font-semibold text-slate-700 mb-1.5 flex items-center justify-between">
                Kunci API Gemini
                <span className="text-[10px] font-bold tracking-wider uppercase bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded border border-amber-200">
                  Demo / Local Only
                </span>
              </label>
              <div className="relative flex items-center bg-slate-50 rounded-lg px-3 py-2.5 border border-slate-200 focus-within:ring-1 focus-within:ring-teal-500 focus-within:border-teal-500">
                <Key className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
                <input
                  type="password"
                  placeholder="Tempelkan kunci API Gemini di sini..."
                  value={customKey}
                  onChange={(e) => setCustomKey(e.target.value)}
                  className="bg-transparent border-none text-sm text-slate-800 placeholder-slate-400 focus:outline-none w-full"
                />
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Dapatkan kunci API gratis di{" "}
                <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline font-semibold hover:text-teal-700">
                  Google AI Studio
                </a>
                . Atau masukkan sebagai variabel lingkungan <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">GEMINI_API_KEY</code> di berkas <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">.env.local</code>.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
              >
                Tutup
              </button>
              <button
                onClick={handleSaveAndCloseSettings}
                className="flex-1 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm shadow-teal-600/20"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12 text-center md:text-left md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full text-teal-800 text-sm font-semibold">
              <Sparkles className="h-3 w-3 text-teal-600" />
              🎓 Asisten Guru Cerdas Bertenaga AI
            </div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full text-indigo-800 text-sm font-semibold">
              ✨ Dibangun dengan Vibe Coding & Gemini
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Ramu paket ajar lengkap dalam <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">hitungan menit</span>, bukan hari.
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-xl text-base md:text-lg">
            Tinggalkan cara manual. RamuAjar AI membantu guru, trainer, dan mentor meramu instruksi singkat menjadi paket <strong>Modul, LKPD, Panduan, Kuis, dan Rubrik</strong> yang siap pakai, adaptif, dan tervalidasi secara pedagogis.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-100 p-2 rounded-lg"><Clock className="h-4 w-4 text-emerald-700" /></div>
              <div className="text-left"><p className="text-xs text-slate-500 font-medium">Hemat Waktu</p><p className="font-bold text-sm text-slate-800">15+ Jam/Minggu</p></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-sky-100 p-2 rounded-lg"><Files className="h-4 w-4 text-sky-700" /></div>
              <div className="text-left"><p className="text-xs text-slate-500 font-medium">Otomasi Lengkap</p><p className="font-bold text-sm text-slate-800">8 Jenis Dokumen</p></div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button 
              onClick={handleSeedDemo}
              className="w-full sm:w-auto bg-teal-600 text-white hover:bg-teal-700 px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-teal-600/20 transition-all hover:-translate-y-0.5 cursor-pointer min-h-[48px]"
            >
              <BookOpenCheck className="h-5 w-5" />
              🚀 Coba Langsung (Contoh Jadi)
              <ArrowRight className="h-4 w-4" />
            </button>
            <a 
              href="#workspace-section"
              className="w-full sm:w-auto text-slate-700 hover:text-teal-600 bg-white border border-slate-200 px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all min-h-[48px]"
            >
              Lihat Proyek Saya
            </a>
          </div>
        </div>

        {/* Feature Grid Visual */}
        <div className="flex-1 grid grid-cols-2 gap-4 max-w-md w-full relative z-10">
          <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white shadow-sm flex flex-col gap-3 min-h-[48px] hover:shadow-md transition-shadow">
            <div className="bg-teal-50 text-teal-600 p-2.5 rounded-xl w-fit">
              <Plus className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-800">1. Tulis Ide Ajar</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Ceritakan ide secara bebas, AI Agent susun rencana otomatis.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white shadow-sm flex flex-col gap-3 mt-4 min-h-[48px] hover:shadow-md transition-shadow">
            <div className="bg-indigo-50 text-indigo-600 p-2.5 rounded-xl w-fit">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-800">2. Auto-Adaptasi</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Sesuaikan materi untuk beragam level (pemula/mahir) dengan satu klik.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white shadow-sm flex flex-col gap-3 min-h-[48px] hover:shadow-md transition-shadow">
            <div className="bg-orange-50 text-orange-600 p-2.5 rounded-xl w-fit">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-800">3. Audit AI (QA)</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Agent mengecek tujuan, kesesuaian durasi, dan rubrik secara otomatis.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white shadow-sm flex flex-col gap-3 mt-4 min-h-[48px] hover:shadow-md transition-shadow">
            <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl w-fit">
              <CheckCircle className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-800">4. Ebook Ekspor</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Unduh PDF standar penerbit (Publisher-Grade) siap cetak.</p>
          </div>
        </div>
      </section>

      {/* Main Workspace Section */}
      <section id="workspace-section" className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-200">
        <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-teal-600" />
          Ruang Kerja Saya
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* New Project Creator Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="bg-teal-50 text-teal-600 p-3 rounded-xl w-fit mb-4">
                <Plus className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-slate-800 mb-1">Buat Proyek Baru</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Mulai buat paket modul pembelajaran baru dengan memberikan judul di bawah ini.</p>
            </div>

            <form onSubmit={handleCreateProject} className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Judul topik (contoh: Dasar Python)..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="flex-1 text-sm border border-slate-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 bg-slate-50"
              />
              <button 
                type="submit"
                disabled={!newTitle.trim()}
                className="bg-teal-600 text-white hover:bg-teal-700 px-4 py-2.5 rounded-lg font-bold text-sm disabled:opacity-50 transition-colors cursor-pointer"
              >
                Buat
              </button>
            </form>
          </div>

          {/* Seed Demo Instant Project Card */}
          <div className="bg-gradient-to-br from-teal-900 to-slate-900 p-6 rounded-2xl text-white shadow-md flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="bg-white/10 text-teal-300 p-3 rounded-xl w-fit mb-4 border border-white/10">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-teal-300 mb-1">Contoh Proyek Lengkap</h3>
              <p className="text-sm text-teal-100/70 leading-relaxed">
                Pilih salah satu proyek terisi lengkap di bawah ini untuk menguji workflow penuh, penyesuaian level basic/advanced, cetak PDF, dan visualisasi skor QA.
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <button
                onClick={handleSeedDemo}
                className="w-full bg-white text-teal-900 hover:bg-teal-50 px-3 py-2.5 rounded-lg font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer min-h-[48px]"
              >
                <BookOpenCheck className="h-4 w-4 shrink-0" />
                <span className="truncate">Demo Cybersecurity (SMK/IT)</span>
              </button>
              <button
                onClick={handleSeedDemoSMA}
                className="w-full bg-white text-teal-900 hover:bg-teal-50 px-3 py-2.5 rounded-lg font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer min-h-[48px]"
              >
                <BookOpenCheck className="h-4 w-4 shrink-0" />
                <span className="truncate">Demo Literasi Keuangan (SMA)</span>
              </button>
              <button
                onClick={handleSeedDemoSMP}
                className="w-full bg-white text-teal-900 hover:bg-teal-50 px-3 py-2.5 rounded-lg font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer min-h-[48px]"
              >
                <BookOpenCheck className="h-4 w-4 shrink-0" />
                <span className="truncate">Demo Sistem Pencernaan (SMP)</span>
              </button>
            </div>
          </div>

          {/* List of active projects */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-sm text-slate-500 uppercase tracking-wider mb-4">Proyek Aktif ({projects.length})</h3>
            
            {projects.length === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center text-slate-500 text-base">
                Tidak ada proyek aktif. Silakan buat proyek baru atau gunakan proyek demo di atas.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => router.push(`/project/${proj.id}`)}
                    className="bg-white p-5 rounded-xl border border-slate-200 hover:border-teal-500/50 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group min-h-[48px]"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <span className={`px-2 py-0.5 text-xs font-bold rounded-full border ${getStatusBadgeColor(proj.status)}`}>
                            {getStatusText(proj.status)}
                          </span>
                          {proj.isDemo && (
                            <span className="px-2 py-0.5 text-xs font-bold rounded-full border bg-violet-50 text-violet-700 border-violet-200 shadow-sm">
                              ✨ Demo Bawaan
                            </span>
                          )}
                        </div>
                        {!proj.isDemo && (
                          <button
                            onClick={(e) => handleDeleteProject(proj.id, e)}
                            className="text-slate-400 hover:text-rose-600 p-2 rounded hover:bg-rose-50 transition-colors md:opacity-0 group-hover:opacity-100"
                            aria-label="Hapus proyek"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                      <h4 className="font-bold text-base text-slate-800 group-hover:text-teal-600 transition-colors line-clamp-2">
                        {renderSafeText(proj.title)}
                      </h4>
                      <p className="text-sm text-slate-500 mt-2 font-medium">
                        Topik: <span className="text-slate-700 font-semibold">{renderSafeText(proj.brief.topic) || "Belum ditentukan"}</span>
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span>Diperbarui {new Date(proj.updatedAt).toLocaleDateString("id-ID")}</span>
                      <span className="font-semibold text-teal-600 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                        Buka <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Confirm Delete Modal */}
      <ConfirmModal
        isOpen={deleteTarget !== null}
        title="Hapus Proyek?"
        message="Apakah Anda yakin ingin menghapus proyek ini? Data yang sudah dihapus tidak dapat dikembalikan."
        confirmText="Ya, Hapus"
        cancelText="Batal"
        danger={true}
        onConfirm={confirmDeleteProject}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}

// Simple ChevronRight icon fallback if missing
function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
