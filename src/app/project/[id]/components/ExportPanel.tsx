import React from 'react';
import { CheckCircle, Download, Printer } from 'lucide-react';
import { Project, DocumentPack } from '@/types/project';

interface ExportPanelProps {
  project: Project;
  setActiveStep: (step: number) => void;
  handleDownloadMarkdown: (filename: string, content: string) => void;
  setActiveDocTab: (tab: keyof DocumentPack) => void;
  handleFinish: () => void;
}

export function ExportPanel({
  project,
  setActiveStep,
  handleDownloadMarkdown,
  setActiveDocTab,
  handleFinish
}: ExportPanelProps) {
  if (!project.documentPack) return null;

  return (
    <div className="space-y-6 animate-fade-in no-print">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
        <div>
          <span className="text-xs text-teal-600 font-extrabold uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded border border-teal-200">Unduh Hasil</span>
          <h2 className="text-xl font-black text-slate-900 mt-1 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-teal-600" />
            5. Unduh Dokumen Anda
          </h2>
          <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">
            Unduh atau cetak semua dokumen pembelajaran yang telah dibuat.
          </p>
        </div>

        {/* Export Files list grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Student Module Card */}
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-base text-slate-800 flex items-center gap-2 mb-2">
                📘 Modul Peserta
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Materi bacaan siswa lengkap dengan deskripsi konsep, perumpamaan, studi kasus, dan refleksi mandiri.
              </p>
            </div>
            <div className="flex gap-2 mt-4 pt-3 border-t border-slate-200/50">
              <button
                onClick={() => handleDownloadMarkdown("Modul_Siswa_RamuAjar", project.documentPack?.studentModule || "")}
                className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 px-3 py-2.5 rounded-lg font-bold text-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                Download .md
              </button>
              <button
                onClick={() => {
                  setActiveDocTab("studentModule");
                  setActiveStep(2);
                  setTimeout(() => window.print(), 300);
                }}
                className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-2.5 rounded-lg font-bold text-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="h-3.5 w-3.5" />
                Cetak PDF
              </button>
            </div>
          </div>

          {/* Facilitator Guide Card */}
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-base text-slate-800 flex items-center gap-2 mb-2">
                👨‍🏫 Panduan Fasilitator / Guru
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Bahan ajar instruktur berisi rincian persiapan, alokasi waktu per sesi, tips mengajar, dan pertanyaan pemantik diskusi.
              </p>
            </div>
            <div className="flex gap-2 mt-4 pt-3 border-t border-slate-200/50">
              <button
                onClick={() => handleDownloadMarkdown("Panduan_Guru_RamuAjar", project.documentPack?.facilitatorGuide || "")}
                className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 px-3 py-2.5 rounded-lg font-bold text-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                Download .md
              </button>
              <button
                onClick={() => {
                  setActiveDocTab("facilitatorGuide");
                  setActiveStep(2);
                  setTimeout(() => window.print(), 300);
                }}
                className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-2.5 rounded-lg font-bold text-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="h-3.5 w-3.5" />
                Cetak PDF
              </button>
            </div>
          </div>

          {/* Worksheet (LKPD) */}
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-base text-slate-800 flex items-center gap-2 mb-2">
                📝 Lembar Kerja Siswa (Worksheet)
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Dokumen tugas kelompok atau mandiri bagi siswa untuk menganalisis skenario kasus siber secara konkret.
              </p>
            </div>
            <div className="flex gap-2 mt-4 pt-3 border-t border-slate-200/50">
              <button
                onClick={() => handleDownloadMarkdown("Worksheet_Siswa_RamuAjar", project.documentPack?.worksheet || "")}
                className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 px-3 py-2.5 rounded-lg font-bold text-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                Download .md
              </button>
              <button
                onClick={() => {
                  setActiveDocTab("worksheet");
                  setActiveStep(2);
                  setTimeout(() => window.print(), 300);
                }}
                className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-2.5 rounded-lg font-bold text-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="h-3.5 w-3.5" />
                Cetak PDF
              </button>
            </div>
          </div>

          {/* Advanced Slides & Remedial exports */}
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-base text-slate-800 flex items-center gap-2 mb-2">
                🌟 Slide Outline & Remedial
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Materi pelengkap opsional berupa outline presentasi kelas, soal tantangan lanjutan, dan bahan remedial siswa.
              </p>
            </div>
            <div className="flex gap-2 mt-4 pt-3 border-t border-slate-200/50">
              <button
                onClick={() => {
                  const outlineText = project.documentPack?.slideOutline || "Belum dibuat.";
                  const remedialText = project.documentPack?.remedialMaterial || "Belum dibuat.";
                  const advancedText = project.documentPack?.advancedChallenge || "Belum dibuat.";
                  const combined = `# 📊 Slide Outline\n\n${outlineText}\n\n# 🛡️ Materi Remedial\n\n${remedialText}\n\n# 🚀 Tantangan Lanjutan\n\n${advancedText}`;
                  handleDownloadMarkdown("Materi_Pelengkap_RamuAjar", combined);
                }}
                className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 px-3 py-2.5 rounded-lg font-bold text-sm flex items-center gap-1.5 w-full justify-center cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                Download Pelengkap (.md)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom actions */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex justify-between items-center">
        <button
          onClick={() => setActiveStep(3)}
          className="text-sm font-bold text-slate-500 hover:text-slate-800"
        >
          ← Kembali ke Cek Kualitas
        </button>
        <button
          onClick={handleFinish}
          className="bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-2.5 rounded-xl font-extrabold text-sm shadow-lg shadow-emerald-600/10 cursor-pointer"
        >
          ✅ Selesai
        </button>
      </div>
    </div>
  );
}
