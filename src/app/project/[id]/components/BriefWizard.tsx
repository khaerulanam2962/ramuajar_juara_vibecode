import React from 'react';
import { BookOpen, Sparkles, Play } from 'lucide-react';
import { Project, TeachingBrief } from '@/types/project';

interface BriefWizardProps {
  project: Project;
  rawInputIdea: string;
  setRawInputIdea: (val: string) => void;
  handleGenerateBrief: () => void;
  handleBriefChange: (field: keyof TeachingBrief, value: any) => void;
  handleAddLocalContext: (tag: string) => void;
  handleRemoveLocalContext: (tag: string) => void;
  renderSafeText: (val: any) => string;
  handleGenerateBlueprint: () => void;
}

export function BriefWizard({
  project,
  rawInputIdea,
  setRawInputIdea,
  handleGenerateBrief,
  handleBriefChange,
  handleAddLocalContext,
  handleRemoveLocalContext,
  renderSafeText,
  handleGenerateBlueprint
}: BriefWizardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-teal-600" />
          1. Rencana Pengajaran Anda
        </h2>
        <p className="text-sm text-slate-500 mt-1 leading-relaxed">
          Isi informasi tentang materi yang ingin Anda ajarkan. Semakin lengkap, semakin baik hasilnya.
        </p>
      </div>

      {/* AI Auto-fill Box */}
      {!project.isDemo && (
        <>
          <div className="bg-teal-50/50 border border-teal-100 rounded-xl p-4 md:p-5 space-y-3">
            <label className="text-sm font-black text-teal-900 flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-teal-600 animate-pulse" />
              ✨ Isi Otomatis dengan AI
            </label>
            <p className="text-xs text-teal-800/80 leading-relaxed">
              Ceritakan ide pengajaran Anda secara bebas. AI akan menganalisis dan mengisi semua kolom di bawah secara otomatis.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <textarea
                placeholder="Contoh: Saya ingin mengajar dasar cybersecurity tentang phishing untuk anak SMK kelas 11 selama 2 jam, hasil akhirnya poster, pakai analogi maling rumah, konteks WhatsApp."
                value={rawInputIdea}
                onChange={(e) => setRawInputIdea(e.target.value)}
                rows={2}
                className="flex-1 text-sm border border-teal-200/60 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white placeholder-slate-400 resize-none focus:bg-white"
              />
              <button
                onClick={handleGenerateBrief}
                disabled={!rawInputIdea.trim()}
                className="bg-teal-600 hover:bg-teal-700 text-white disabled:opacity-50 px-4 py-2.5 rounded-lg font-extrabold text-sm flex items-center justify-center gap-1.5 shadow-sm shadow-teal-600/10 cursor-pointer h-fit sm:self-end shrink-0"
              >
                <Sparkles className="h-3.5 w-3.5" />
                ✨ Isi Otomatis
              </button>
            </div>
          </div>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-xs text-slate-400 font-bold uppercase tracking-wider">Atau Isi Sendiri</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>
        </>
      )}

      <fieldset disabled={project.isDemo} className="contents">
        <div className="grid md:grid-cols-2 gap-6">
        {/* Topic */}
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-700">Topik Utama</label>
          <input
            type="text"
            placeholder="Contoh: Dasar Cybersecurity, Desain Web Responsif..."
            value={renderSafeText(project.brief.topic)}
            onChange={(e) => handleBriefChange("topic", e.target.value)}
            className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-slate-50"
          />
        </div>

        {/* Target Audience */}
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-700">Untuk Siapa Materi Ini?</label>
          <input
            type="text"
            placeholder="Contoh: Siswa SMK Kelas 11, Pemula Korporat..."
            value={renderSafeText(project.brief.audience)}
            onChange={(e) => handleBriefChange("audience", e.target.value)}
            className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-slate-50"
          />
        </div>

        {/* Document Type */}
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-700">Jenis Dokumen Ajar</label>
          <select
            value={renderSafeText(project.brief.documentType)}
            onChange={(e) => handleBriefChange("documentType", e.target.value)}
            className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-slate-50 font-medium"
          >
            <option value="school_module">Modul Ajar Sekolah (Kurikulum)</option>
            <option value="bootcamp_module">Materi Singkat / Bootcamp</option>
            <option value="corporate_training">Pelatihan Korporat / Karyawan</option>
            <option value="workshop">Modul Workshop Praktis</option>
            <option value="coursebook">Buku Panduan / Handout Kuliah</option>
          </select>
        </div>

        {/* Duration */}
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-700">Durasi Pembelajaran</label>
          <input
            type="text"
            placeholder="Contoh: 2 Hari (4 Jam per hari), 90 Menit..."
            value={renderSafeText(project.brief.duration)}
            onChange={(e) => handleBriefChange("duration", e.target.value)}
            className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-slate-50"
          />
        </div>

        {/* Level */}
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-700">Tingkat Kesulitan</label>
          <div className="flex gap-4">
            {["beginner", "intermediate", "advanced"].map((lvl) => (
              <label key={lvl} className="flex items-center gap-1.5 cursor-pointer text-sm font-semibold">
                <input
                  type="radio"
                  name="brief-level"
                  checked={project.brief.level === lvl}
                  onChange={() => handleBriefChange("level", lvl)}
                  className="text-teal-600 focus:ring-teal-500 h-4 w-4"
                />
                <span className="capitalize">{lvl === "beginner" ? "Pemula" : lvl === "intermediate" ? "Menengah" : "Lanjut"}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Final Outcome */}
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-700">Hasil Akhir yang Diharapkan</label>
          <input
            type="text"
            placeholder="Contoh: Poster kampanye anti-phishing, Kalkulator Python..."
            value={renderSafeText(project.brief.finalOutcome)}
            onChange={(e) => handleBriefChange("finalOutcome", e.target.value)}
            className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-slate-50"
          />
        </div>

        {/* Style of language */}
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-700">Gaya Bahasa</label>
          <input
            type="text"
            placeholder="Contoh: Bahasa Indonesia santai, praktis, banyak analogi..."
            value={renderSafeText(project.brief.languageStyle)}
            onChange={(e) => handleBriefChange("languageStyle", e.target.value)}
            className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-slate-50"
          />
        </div>

        {/* Local Context tags */}
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-sm font-bold text-slate-700 flex items-center gap-1">
            Konteks Lokal
            <span className="text-xs text-slate-400 font-normal">(Ketik lalu tekan Enter)</span>
          </label>
          <div className="border border-slate-200 rounded-lg p-2.5 bg-slate-50 flex flex-wrap gap-2 items-center">
            {(project.brief.localContext || []).map((tag, i) => (
              <span key={i} className="bg-teal-50 text-teal-800 px-2.5 py-1 rounded-md text-sm font-bold border border-teal-200 flex items-center gap-1">
                {renderSafeText(tag)}
                {!project.isDemo && (
                  <button 
                    type="button" 
                    onClick={() => handleRemoveLocalContext(tag)}
                    className="hover:text-rose-600 font-bold ml-1"
                  >
                    &times;
                  </button>
                )}
              </span>
            ))}
            <input
              type="text"
              disabled={project.isDemo}
              placeholder={project.isDemo ? "Konteks lokal terkunci" : "Tambah konteks lokal (e.g. WhatsApp, Shopee)..."}
              onKeyDown={(e) => {
                if (project.isDemo) return;
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddLocalContext((e.target as HTMLInputElement).value);
                  (e.target as HTMLInputElement).value = "";
                }
              }}
              className="border-none bg-transparent focus:outline-none text-sm flex-1 min-w-[200px] disabled:placeholder-slate-400"
            />
          </div>
        </div>

        {/* Constraints */}
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-sm font-bold text-slate-700">Catatan Tambahan</label>
          <textarea
            placeholder="Contoh: Tidak terlalu teknis koding, penjelasan berfokus pada analogi keamanan rumah..."
            value={(project.brief.constraints || []).map(c => renderSafeText(c)).join(", ")}
            onChange={(e) => handleBriefChange("constraints", [e.target.value])}
            rows={2}
            className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-slate-50 resize-y"
          />
        </div>
      </div>
      </fieldset>

      {/* Action buttons */}
      <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
        <button
          onClick={handleGenerateBlueprint}
          disabled={!project.brief.topic || !project.brief.audience}
          className="bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-50 px-6 py-3 rounded-xl font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-teal-600/10 cursor-pointer"
        >
          <Play className="h-4 w-4" />
          🚀 Buat Rancangan Silabus
        </button>
      </div>
    </div>
  );
}
