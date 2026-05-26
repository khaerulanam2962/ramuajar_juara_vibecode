// src/app/project/[id]/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, GraduationCap, Key, CheckCircle2, ChevronRight,
  RefreshCw, AlertTriangle, AlertCircle, Sparkles, BookOpen,
  FileText, Sliders, ShieldCheck, CheckCircle, Clipboard, X, Info
} from "lucide-react";
import { RenderMarkdown } from "@/lib/markdown";
import { getProjectById, saveProject } from "@/lib/storage/projectStore";
import { Project, TeachingBrief, LearningBlueprint, DocumentPack, QAReport } from "@/types/project";
import { useToast } from "@/app/components/Toast";
import { BriefWizard } from "./components/BriefWizard";
import { BlueprintPreview } from "./components/BlueprintPreview";
import { DocumentPackTabs } from "./components/DocumentPackTabs";
import { QAReport as QAReportUI } from "./components/QAReport";
import { ExportPanel } from "./components/ExportPanel";

export default function ProjectWorkspace() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  const { showToast } = useToast();

  const [project, setProject] = useState<Project | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [customApiKey, setCustomApiKey] = useState("");
  
  // Loading states
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // Edit mode states
  const [isEditing, setIsEditing] = useState(false);
  const [editMarkdown, setEditMarkdown] = useState("");
  
  // Sidebar/tab selections
  const [activeDocTab, setActiveDocTab] = useState<keyof DocumentPack>("studentModule");
  
  // UI drawer toggle
  const [showAdaptPanel, setShowAdaptPanel] = useState(false);
  
  // Free text idea input for Auto-fill with AI
  const [rawInputIdea, setRawInputIdea] = useState("");

  // Jury Welcome Modal state
  const [showJuryModal, setShowJuryModal] = useState(false);

  // Friendly loading message labels for document types
  const docTypeLabels: Record<string, string> = {
    studentModule: "📘 Menyiapkan Modul Siswa",
    facilitatorGuide: "👨‍🏫 Menyiapkan Panduan Guru",
    worksheet: "📝 Menyiapkan Lembar Kerja",
    quiz: "❓ Menyiapkan Soal Kuis",
    rubric: "📊 Menyiapkan Rubrik Penilaian",
    slideOutline: "🎬 Menyiapkan Outline Presentasi",
    remedialMaterial: "📖 Menyiapkan Materi Remedial",
    advancedChallenge: "🌟 Menyiapkan Tantangan Lanjutan",
  };

  // Load project on mount
  useEffect(() => {
    const proj = getProjectById(projectId);
    if (!proj) {
      router.push("/");
      return;
    }
    setProject(proj);
    
    // Set step based on project status
    if (proj.isDemo) {
      setActiveStep(0); // Force demo projects to start at the first step
      setShowJuryModal(true);
    } else {
      if (proj.status === "draft") setActiveStep(0);
      else if (proj.status === "blueprint_ready") setActiveStep(1);
      else if (proj.status === "documents_ready") setActiveStep(2);
      else if (proj.status === "qa_ready") setActiveStep(3);
      else if (proj.status === "exported") setActiveStep(4);
    }

    const savedKey = localStorage.getItem("gemini_custom_api_key");
    if (savedKey) {
      setCustomApiKey(savedKey);
    }
  }, [projectId, router]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-2">
          <RefreshCw className="h-8 w-8 text-teal-600 animate-spin" />
          <p className="text-base text-slate-500 font-medium">Memuat proyek...</p>
        </div>
      </div>
    );
  }

  const updateProjectState = (updated: Partial<Project>) => {
    const newProj = { ...project, ...updated, updatedAt: new Date().toISOString() } as Project;
    setProject(newProj);
    saveProject(newProj);
  };

  const handleDuplicateProject = () => {
    const newId = `project-${Date.now()}`;
    const duplicated = {
      ...project,
      id: newId,
      title: `[Salinan] ${renderSafeText(project.title)}`,
      isDemo: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    saveProject(duplicated);
    showToast("success", "Proyek Diduplikasi!", `Berhasil membuat salinan proyek "${duplicated.title}".`);
    router.push(`/project/${newId}`);
  };


  // ----------------------------------------------------
  // API Flow Call Actions
  // ----------------------------------------------------

  // Step 0: Free text idea -> Auto fill structured brief form
  const handleGenerateBrief = async () => {
    if (!rawInputIdea.trim()) return;
    if (project?.isDemo) {
      showToast("info", "Proyek Demo", "Fungsi auto-fill AI dilewati karena ini adalah contoh proyek siap pakai.");
      return;
    }
    setLoading(true);
    setLoadingMessage("Menganalisis ide dan merancang Teaching Brief...");
    try {
      const res = await fetch("/api/generate-brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rawInput: rawInputIdea, customApiKey })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal merancang Teaching Brief.");

      updateProjectState({
        brief: data.brief
      });
    } catch (e: any) {
      showToast("error", "Terjadi Kesalahan", e.message);
    } finally {
      setLoading(false);
    }
  };

  // Step 1: Brief -> Generate Blueprint
  const handleGenerateBlueprint = async () => {
    if (project?.isDemo) {
      showToast("success", "Demo Bypass", "Proses AI dilewati untuk contoh proyek. Menampilkan silabus yang sudah ada.");
      setActiveStep(1);
      return;
    }
    setLoading(true);
    setLoadingMessage("Meramu Silabus Pembelajaran (Blueprint)...");
    try {
      const res = await fetch("/api/generate-blueprint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brief: project!.brief, customApiKey })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal membuat silabus.");

      updateProjectState({
        blueprint: data.blueprint,
        status: "blueprint_ready"
      });
      setActiveStep(1);
    } catch (e: any) {
      showToast("error", "Terjadi Kesalahan", e.message);
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Blueprint Approved -> Generate Document Pack
  const handleGenerateDocumentPack = async () => {
    if (project?.isDemo) {
      showToast("success", "Demo Bypass", "Proses AI dilewati untuk contoh proyek. Dokumen ajar sudah tersedia.");
      setActiveStep(2);
      setActiveDocTab("studentModule");
      return;
    }
    setLoading(true);
    setLoadingMessage("Menyusun Paket Dokumen Ajar...");
    setLoadingProgress(0);
    
    try {
      const documentTypes = [
        "studentModule", "facilitatorGuide", "worksheet", 
        "quiz", "rubric", "slideOutline", "remedialMaterial", "advancedChallenge"
      ] as const;
      
      const newPack: Partial<DocumentPack> = {};
      
      for (let idx = 0; idx < documentTypes.length; idx++) {
        const docType = documentTypes[idx];
        setLoadingMessage(docTypeLabels[docType] || "Menyiapkan dokumen...");
        setLoadingProgress(Math.round(((idx + 1) / documentTypes.length) * 100));
        const res = await fetch("/api/generate-document-chunk", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            documentType: docType,
            brief: project.brief, 
            blueprint: project.blueprint,
            customApiKey 
          })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || `Gagal menyusun ${docType}.`);
        newPack[docType] = data.chunk;
      }

      updateProjectState({
        documentPack: newPack as DocumentPack,
        status: "documents_ready"
      });
      setActiveStep(2);
      setActiveDocTab("studentModule");
    } catch (e: any) {
      showToast("error", "Terjadi Kesalahan", e.message);
    } finally {
      setLoading(false);
      setLoadingProgress(0);
    }
  };

  // Step 3: Documents Approved -> Quality Check
  const handleRunQACheck = async () => {
    if (project?.isDemo) {
      showToast("success", "Demo Bypass", "Proses QA dilewati. Menampilkan laporan yang sudah ada.");
      setActiveStep(3);
      return;
    }
    setLoading(true);
    setLoadingMessage("Melakukan Validasi Pedagogis (Pedagogical QA)...");
    try {
      const res = await fetch("/api/quality-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brief: project.brief,
          blueprint: project.blueprint,
          documentPack: project.documentPack,
          customApiKey
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal melakukan QA.");

      updateProjectState({
        qaReport: data.qaReport,
        status: "qa_ready"
      });
      setActiveStep(3);
    } catch (e: any) {
      showToast("error", "Terjadi Kesalahan", e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleApplyQAFixes = async () => {
    if (!project.qaReport || !project.documentPack) return;
    
    setLoading(true);
    setLoadingMessage("Menerapkan saran perbaikan (Auto-Fix)...");
    try {
      const res = await fetch("/api/apply-qa-fixes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brief: project.brief,
          blueprint: project.blueprint,
          documentPack: project.documentPack,
          qaReport: project.qaReport,
          customApiKey
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal menerapkan perbaikan QA.");

      updateProjectState({
        blueprint: data.blueprint,
        documentPack: data.documentPack,
      });
      
      showToast("success", "Perbaikan Berhasil!", "Saran AI telah diterapkan ke dokumen Anda.");
    } catch (e: any) {
      showToast("error", "Terjadi Kesalahan", e.message);
    } finally {
      setLoading(false);
    }
  };

  // Step 4: Adapt Active Document
  const handleAdaptDocument = async (level: "basic" | "advanced") => {
    if (!project.documentPack) return;
    
    setLoading(true);
    setLoadingMessage(`Mengadaptasikan modul siswa ke level ${level === 'basic' ? 'Mudah' : 'Lanjut'}...`);
    try {
      const rawContent = project.documentPack[activeDocTab] as string;
      const res = await fetch("/api/adapt-document", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          documentContent: rawContent,
          documentName: activeDocTab,
          mode: level,
          customApiKey
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal mengadaptasikan dokumen.");

      // Update specific document inside documentPack
      const updatedPack = {
        ...project.documentPack,
        [activeDocTab]: data.adaptedDocument
      };
      
      // Auto-sync quiz and rubric when studentModule is adapted (better UX)
      let newQuiz = updatedPack.quiz;
      let newRubric = updatedPack.rubric;
      if (activeDocTab === "studentModule") {
        setLoadingMessage(`Menyelaraskan kuis ke level ${level === 'basic' ? 'Mudah' : 'Lanjut'}...`);
        const qRes = await fetch("/api/generate-document-chunk", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ documentType: "quiz", brief: { ...project.brief, level }, blueprint: project.blueprint, customApiKey })
        });
        const qData = await qRes.json();
        if (qRes.ok) newQuiz = qData.chunk;

        setLoadingMessage(`Menyelaraskan rubrik ke level ${level === 'basic' ? 'Mudah' : 'Lanjut'}...`);
        const rRes = await fetch("/api/generate-document-chunk", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ documentType: "rubric", brief: { ...project.brief, level }, blueprint: project.blueprint, customApiKey })
        });
        const rData = await rRes.json();
        if (rRes.ok) newRubric = rData.chunk;
      }

      updateProjectState({
        documentPack: { ...updatedPack, quiz: newQuiz, rubric: newRubric } as DocumentPack
      });
      
      // Update local edit text state if open
      if (isEditing) {
        setEditMarkdown(data.adaptedDocument);
      }
      
      setShowAdaptPanel(false);
    } catch (e: any) {
      showToast("error", "Terjadi Kesalahan", e.message);
    } finally {
      setLoading(false);
    }
  };

  // Helper to copy content to clipboard
  const handleCopyClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    showToast("success", "Berhasil Disalin!", "Konten telah disalin ke clipboard.");
  };

  // Save inline modifications of markdown
  const handleSaveMarkdownEdit = () => {
    if (!project.documentPack) return;
    const updatedPack = {
      ...project.documentPack,
      [activeDocTab]: editMarkdown
    };
    updateProjectState({ documentPack: updatedPack });
    setIsEditing(false);
  };

  // Start Editing markdown text
  const startEditingMarkdown = () => {
    if (!project.documentPack) return;
    setEditMarkdown((project.documentPack[activeDocTab] as string) || "");
    setIsEditing(true);
  };

  // Download markdown text file
  const handleDownloadMarkdown = (filename: string, content: string) => {
    const element = document.createElement("a");
    const file = new Blob([content], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${filename}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Trigger print view using html2pdf
  const handlePrintPdf = async () => {
    try {
      setLoading(true);
      setLoadingMessage("Mempersiapkan dokumen PDF (html2pdf)...");
      const html2pdf = (await import("html2pdf.js")).default;
      const element = document.getElementById("document-content-area");
      
      if (!element) {
        window.print();
        return;
      }
      
      const opt = {
        margin:       10,
        filename:     `${renderSafeText(project.title) || 'Modul'}_${activeDocTab}.pdf`,
        image:        { type: 'jpeg' as const, quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const }
      };
      
      await html2pdf().from(element).set(opt).save();
    } catch (e) {
      console.error("PDF Export failed:", e);
      window.print(); // Fallback
    } finally {
      setLoading(false);
    }
  };

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

  // Helper to safely update a text field in a potentially structured object or string
  const updateSafeText = (originalVal: any, newText: string): any => {
    if (originalVal && typeof originalVal === "object" && !Array.isArray(originalVal)) {
      if ("description" in originalVal) {
        return { ...originalVal, description: newText };
      }
      if ("message" in originalVal) {
        return { ...originalVal, message: newText };
      }
      if ("text" in originalVal) {
        return { ...originalVal, text: newText };
      }
      if ("title" in originalVal) {
        return { ...originalVal, title: newText };
      }
      if ("type" in originalVal) {
        return { ...originalVal, type: newText };
      }
      return { ...originalVal, description: newText }; // fallback
    }
    return newText;
  };

  // ----------------------------------------------------
  // Forms & Inputs Sync Helpers
  // ----------------------------------------------------
  const handleBriefChange = (field: keyof TeachingBrief, value: any) => {
    const updatedBrief = {
      ...project.brief,
      [field]: value
    };
    updateProjectState({ brief: updatedBrief });
  };

  const handleAddLocalContext = (tag: string) => {
    if (!tag.trim()) return;
    const current = project.brief.localContext || [];
    if (!current.includes(tag.trim())) {
      handleBriefChange("localContext", [...current, tag.trim()]);
    }
  };

  const handleRemoveLocalContext = (tag: string) => {
    const current = project.brief.localContext || [];
    handleBriefChange("localContext", current.filter(t => t !== tag));
  };

  const handleFinish = () => {
    if (!project.isDemo) {
      updateProjectState({ status: "exported" });
    }
    router.push("/");
  };

  // Stepper list
  const steps = [
    { title: "Tulis Rencana", icon: BookOpen },
    { title: "Rancangan Silabus", icon: FileText },
    { title: "Dokumen Ajar", icon: Sliders },
    { title: "Cek Kualitas", icon: ShieldCheck },
    { title: "Unduh Hasil", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col print:bg-white print:text-black">
      {/* Jury Welcome Modal */}
      {showJuryModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in no-print">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowJuryModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 animate-scale-in border border-indigo-100">
            <button
              onClick={() => setShowJuryModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="bg-indigo-50 text-indigo-600 p-3 rounded-xl w-fit mb-4">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="font-extrabold text-xl text-slate-900 mb-2">👋 Halo, Dewan Juri!</h3>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed mb-6">
              <p>
                Selamat datang di halaman <strong>Ruang Kerja RamuAjar AI</strong>. Ini adalah proyek demonstrasi yang telah di-<em>generate</em> secara otomatis.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-800 flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4 text-teal-600" />
                  ✨ Fitur Unggulan (Vibe Coding Impact):
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Tulis Rencana (Langkah 1):</strong> Lihat bagaimana brief pengajaran awal disusun oleh instruktur.</li>
                  <li><strong>Rancangan Silabus (Langkah 2):</strong> Lihat bagaimana Gemini Agent merancang alur belajar terstruktur.</li>
                  <li><strong>Dokumen Ajar (Langkah 3):</strong> Cobalah fitur <strong>✨ Gemini Auto-Adapt</strong> untuk melihat Gemini mengadaptasi teks untuk beragam level siswa (Sulit/Mudah) dengan satu klik.</li>
                  <li><strong>Pedagogical QA (Langkah 4):</strong> Lihat bagaimana Gemini mengaudit dokumen ajar (Kesesuaian durasi, Rubrik) dan memberi skor serta saran adaptif secara otonom.</li>
                  <li><strong>Unduh Hasil (Langkah 5):</strong> Eksplorasi mode cetak PDF untuk melihat kualitas luaran berstandar penerbit (Publisher-Grade).</li>
                </ul>
              </div>
            </div>
            <button
              onClick={() => setShowJuryModal(false)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-600/20 transition-all"
            >
              Mulai Jelajahi Demo
            </button>
          </div>
        </div>
      )}

      {/* Top workspace bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 px-6 py-4 flex items-center justify-between no-print shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.push("/")}
            className="p-2.5 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div>
            <h2 className="font-bold text-sm text-slate-400">Ruang Kerja</h2>
            <h1 className="font-extrabold text-base text-slate-800 tracking-tight leading-none mt-0.5">{renderSafeText(project.title)}</h1>
          </div>
        </div>

        {/* Status Stepper in header for larger view */}
        <div className="hidden lg:flex items-center gap-1.5">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStep === idx;
            const isCompleted = idx < activeStep;
            return (
              <React.Fragment key={idx}>
                <button
                  onClick={() => {
                    // Only navigate to steps already unlocked or completed
                    if (
                      (idx === 0) ||
                      (idx === 1 && project.blueprint) ||
                      (idx === 2 && project.documentPack) ||
                      (idx === 3 && project.qaReport) ||
                      (idx === 4 && project.documentPack)
                    ) {
                      setActiveStep(idx);
                    }
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm font-semibold transition-all cursor-pointer ${
                    isActive 
                      ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                      : isCompleted
                      ? "bg-teal-50 text-teal-700 border-teal-200"
                      : "bg-slate-50 text-slate-400 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {s.title}
                </button>
                {idx < steps.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-slate-300" />}
              </React.Fragment>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          {project.isDemo && (
            <button
              onClick={handleDuplicateProject}
              className="bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1 transition-all cursor-pointer mr-1 no-print"
            >
              <Clipboard className="h-3.5 w-3.5" />
              Duplikat Proyek
            </button>
          )}
          {/* Key status indicators */}
          {customApiKey ? (
            <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-2 py-1 rounded-md">
              <CheckCircle2 className="h-3 w-3" />
              AI Aktif ✓
            </div>
          ) : (
            <div className="flex items-center gap-1 bg-slate-100 border border-slate-200 text-slate-500 text-xs font-bold px-2 py-1 rounded-md">
              <Key className="h-3 w-3" />
              Mode Contoh
            </div>
          )}
        </div>
      </header>

      {/* Stepper on top for Mobile and Tablet */}
      <div className="lg:hidden w-full bg-white border-b border-slate-200 p-4 flex gap-2 overflow-x-auto no-print">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isActive = activeStep === idx;
          return (
            <button
              key={idx}
              onClick={() => {
                if (
                  (idx === 0) ||
                  (idx === 1 && project.blueprint) ||
                  (idx === 2 && project.documentPack) ||
                  (idx === 3 && project.qaReport) ||
                  (idx === 4 && project.documentPack)
                ) {
                  setActiveStep(idx);
                }
              }}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg border text-sm font-semibold shrink-0 cursor-pointer ${
                isActive
                  ? "bg-teal-600 text-white border-teal-600"
                  : "bg-slate-50 text-slate-500 border-slate-200"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {s.title}
            </button>
          );
        })}
      </div>

      {/* Main content body */}
      <div className="flex-1 flex flex-col md:flex-row relative">
        {/* Main Work Area */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto max-w-5xl mx-auto w-full print:p-0 print:m-0 print:max-w-full">
          
          {/* Read-Only Warning Banner */}
          {project.isDemo && (
            <div className="bg-indigo-50 border border-indigo-200/80 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm no-print">
              <div className="flex gap-3">
                <div className="bg-indigo-100 text-indigo-700 p-2.5 rounded-xl shrink-0 h-fit">
                  <Sparkles className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-indigo-950">✨ Proyek Contoh Bawaan (Read-Only)</h4>
                  <p className="text-xs text-indigo-800/90 leading-relaxed mt-0.5">
                    Proyek ini dilindungi agar contohnya tetap rapi dan tidak rusak. Anda bisa menduplikat proyek ini untuk membuat salinan yang dapat dimodifikasi bebas menggunakan AI.
                  </p>
                </div>
              </div>
              <button
                onClick={handleDuplicateProject}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shrink-0 shadow-md shadow-indigo-600/10 transition-all flex items-center gap-1.5 self-end sm:self-center cursor-pointer"
              >
                <Clipboard className="h-3.5 w-3.5" />
                Duplikat Proyek
              </button>
            </div>
          )}

          {/* SKELETON AI LOADING OVERLAY */}
          {loading && (
            <div className="absolute inset-0 bg-slate-50/70 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-4 animate-fade-in no-print">
              <div className="relative flex items-center justify-center">
                <div className="h-16 w-16 rounded-full border-4 border-slate-200 border-t-teal-600 animate-spin"></div>
                <Sparkles className="h-6 w-6 text-teal-500 absolute animate-pulse" />
              </div>
              <div className="text-center">
                <p className="font-extrabold text-slate-800 text-base">{loadingMessage}</p>
                <p className="text-sm text-slate-400 mt-1">Harap bersabar, AI sedang meracik materi pembelajaran...</p>
              </div>
              {loadingProgress > 0 && (
                <div className="w-64 mt-4">
                  <div className="progress-bar-track">
                    <div className="progress-bar-fill" style={{ width: `${loadingProgress}%` }} />
                  </div>
                  <p className="text-xs text-slate-400 mt-2 text-center">{loadingProgress}% selesai</p>
                </div>
              )}
            </div>
          )}

          {/* STEP 0: TEACHING BRIEF FORM WIZARD */}
          {activeStep === 0 && (
            <BriefWizard
              project={project}
              rawInputIdea={rawInputIdea}
              setRawInputIdea={setRawInputIdea}
              handleGenerateBrief={handleGenerateBrief}
              handleBriefChange={handleBriefChange}
              handleAddLocalContext={handleAddLocalContext}
              handleRemoveLocalContext={handleRemoveLocalContext}
              renderSafeText={renderSafeText}
              handleGenerateBlueprint={handleGenerateBlueprint}
            />
          )}

          {/* STEP 1: LEARNING BLUEPRINT PREVIEW & EDIT */}
          {activeStep === 1 && (
            <BlueprintPreview
              project={project}
              setActiveStep={setActiveStep}
              updateProjectState={updateProjectState}
              handleGenerateDocumentPack={handleGenerateDocumentPack}
              renderSafeText={renderSafeText}
              updateSafeText={updateSafeText}
            />
          )}

          {/* STEP 2: DOCUMENT PACK WORKSPACE */}
          {activeStep === 2 && (
            <DocumentPackTabs
              project={project}
              activeDocTab={activeDocTab}
              setActiveDocTab={setActiveDocTab}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              editMarkdown={editMarkdown}
              setEditMarkdown={setEditMarkdown}
              handleSaveMarkdownEdit={handleSaveMarkdownEdit}
              startEditingMarkdown={startEditingMarkdown}
              handleCopyClipboard={handleCopyClipboard}
              setShowAdaptPanel={setShowAdaptPanel}
              handleRunQACheck={handleRunQACheck}
              setActiveStep={setActiveStep}
              renderSafeText={renderSafeText}
            />
          )}

          {/* STEP 3: PEDAGOGICAL QA REPORTS */}
          {activeStep === 3 && (
            <QAReportUI
              project={project}
              setActiveStep={setActiveStep}
              handleApplyQAFixes={handleApplyQAFixes}
              renderSafeText={renderSafeText}
            />
          )}

          {/* STEP 4: EXPORT CENTER */}
          {activeStep === 4 && (
            <ExportPanel
              project={project}
              setActiveStep={setActiveStep}
              handleDownloadMarkdown={handleDownloadMarkdown}
              setActiveDocTab={setActiveDocTab}
              handleFinish={handleFinish}
            />
          )}

          {/* PRINT-ONLY MARKDOWN INJECTED AT BOTTOM OF WORKSPACE FOR PERFECT BROWSER PRINTING */}
          {project.documentPack && (activeDocTab === "studentModule" || activeDocTab === "facilitatorGuide" || activeDocTab === "worksheet") && (
            <div className="hidden print-only print:block leading-relaxed">
              <div className="border-b-2 border-slate-800 pb-4 mb-8">
                <h1 className="text-3xl font-black">{renderSafeText(project.title)}</h1>
                <p className="text-sm text-slate-500 mt-2 font-medium">
                  RamuAjar AI Workspace &bull; Dibuat secara pedagogis &bull; Dokumen: {activeDocTab === "studentModule" ? "Modul Siswa" : activeDocTab === "facilitatorGuide" ? "Panduan Guru" : "Lembar Kerja Siswa (LKPD)"}
                </p>
              </div>
              <RenderMarkdown content={(project.documentPack[activeDocTab] as string) || ""} />
            </div>
          )}
        </main>

        {/* RIGHT SIDE DRAWER: KEY SETTING + DIFFERENTIATION PANEL */}
        {showAdaptPanel && (
          <div className="fixed inset-0 z-50 flex justify-end no-print bg-slate-900/40 backdrop-blur-xs animate-fade-in">
            <div className="w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-slide-in">
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <h3 className="font-extrabold text-base text-slate-800 flex items-center gap-2">
                    <Sliders className="h-4 w-4 text-indigo-600" />
                    Atur Tingkat Kesulitan
                  </h3>
                  <button 
                    onClick={() => setShowAdaptPanel(false)}
                    className="text-slate-400 hover:text-slate-600 text-xl font-bold p-2.5 cursor-pointer"
                  >
                    &times;
                  </button>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Sesuaikan tingkat kesulitan materi yang sedang ditampilkan. Tujuan pembelajaran tetap sama, hanya cara penyampaiannya yang berubah.
                  </p>

                  <div className="space-y-3">
                    <button
                      onClick={() => handleAdaptDocument("basic")}
                      className="w-full bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 text-left p-4 rounded-xl flex items-start gap-3 transition-all cursor-pointer"
                    >
                      <div className="bg-indigo-100 text-indigo-700 p-2.5 rounded-lg shrink-0">
                        <GraduationCap className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-800">Tingkat Mudah</h4>
                        <p className="text-xs text-slate-400 leading-relaxed mt-0.5">Bahasa lebih sederhana, banyak contoh dan panduan langkah demi langkah.</p>
                      </div>
                    </button>

                    <button
                      onClick={() => handleAdaptDocument("advanced")}
                      className="w-full bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 text-left p-4 rounded-xl flex items-start gap-3 transition-all cursor-pointer"
                    >
                      <div className="bg-indigo-100 text-indigo-700 p-2.5 rounded-lg shrink-0">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-800">Tingkat Lanjut</h4>
                        <p className="text-xs text-slate-400 leading-relaxed mt-0.5">Penjelasan lebih mendalam dengan istilah teknis dan tugas yang lebih menantang.</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50">
                <button
                  onClick={() => setShowAdaptPanel(false)}
                  className="w-full border border-slate-200 hover:bg-slate-100 text-slate-700 py-2.5 rounded-lg font-bold text-sm transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
