import React from 'react';
import { ShieldCheck, CheckCircle, Sparkles } from 'lucide-react';
import { Project } from '@/types/project';
import { RenderMarkdown } from '@/lib/markdown';

interface QAReportProps {
  project: Project;
  setActiveStep: (step: number) => void;
  handleApplyQAFixes: () => void;
  renderSafeText: (val: any) => string;
}

export function QAReport({
  project,
  setActiveStep,
  handleApplyQAFixes,
  renderSafeText
}: QAReportProps) {
  if (!project.qaReport) return null;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-slate-100 pb-6 mb-6">
          <div>
            <span className="text-xs text-teal-600 font-extrabold uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded border border-teal-200">Laporan Kualitas</span>
            <h2 className="text-xl font-black text-slate-900 mt-1 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-teal-600" />
              4. Hasil Pengecekan Kualitas
            </h2>
            <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">
              AI telah memeriksa kesesuaian materi dengan tujuan belajar, alokasi waktu, dan memberikan saran perbaikan.
            </p>
          </div>

          {/* QA SCORE CIRCLE */}
          <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 shrink-0">
            <div className="relative h-16 w-16 flex items-center justify-center">
              {/* Outer Ring Circle */}
              <svg className="absolute w-full h-full transform -rotate-90">
                <circle cx="32" cy="32" r="28" className="stroke-slate-200 fill-none" strokeWidth="4" />
                <circle 
                  cx="32" 
                  cy="32" 
                  r="28" 
                  className={`${
                    project.qaReport.score >= 80 
                      ? "stroke-teal-500" 
                      : project.qaReport.score >= 50 
                      ? "stroke-amber-500" 
                      : "stroke-rose-500"
                  } fill-none transition-all`} 
                  strokeWidth="4" 
                  strokeDasharray={2 * Math.PI * 28}
                  strokeDashoffset={2 * Math.PI * 28 * (1 - project.qaReport.score / 100)}
                />
              </svg>
              <span className="text-lg font-black text-slate-800">{project.qaReport.score}</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-400 uppercase tracking-wider">Skor Kualitas</h3>
              <p className="text-sm font-bold text-slate-700 mt-0.5">
                {project.qaReport.score >= 80 ? "Sangat Baik" : project.qaReport.score >= 50 ? "Perlu Revisi" : "Kurang"}
              </p>
            </div>
          </div>
        </div>

        {/* QA Summary */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 leading-relaxed mb-6 font-medium prose max-w-none">
          <span className="font-bold text-slate-800 block mb-1">🔍 Ringkasan Hasil Cek Kualitas:</span>
          <RenderMarkdown content={project.qaReport.summary} />
        </div>

        {/* Strengths */}
        <div className="mb-6 space-y-2">
          <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider">✅ Kelebihan Materi</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {project.qaReport.strengths.map((str, idx) => (
              <div key={idx} className="bg-emerald-50/40 border border-emerald-100 rounded-xl p-3.5 flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{renderSafeText(str)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Issues & Suggestions */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-1">⚠️ Catatan Perbaikan</h3>
          
          {project.qaReport.issues.length === 0 ? (
            <div className="bg-emerald-50 text-emerald-800 text-sm p-4 rounded-xl border border-emerald-200">
              Luar biasa! Tidak ada masalah pedagogi yang ditemukan pada paket dokumen Anda.
            </div>
          ) : (
            <div className="space-y-4">
              {project.qaReport.issues.map((iss, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-xl p-4 text-sm ${
                    renderSafeText(iss.severity) === "high" 
                      ? "bg-rose-50/50 border-rose-200" 
                      : renderSafeText(iss.severity) === "medium" 
                      ? "bg-amber-50/40 border-amber-200" 
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider border ${
                      renderSafeText(iss.severity) === "high" 
                        ? "bg-rose-100 text-rose-700 border-rose-300" 
                        : renderSafeText(iss.severity) === "medium" 
                        ? "bg-amber-100 text-amber-700 border-amber-300" 
                        : "bg-slate-200 text-slate-700 border-slate-300"
                    }`}>
                      {renderSafeText(iss.severity) === "high" ? "Prioritas Tinggi" : renderSafeText(iss.severity) === "medium" ? "Prioritas Sedang" : "Prioritas Rendah"}
                    </span>
                    <span className="text-xs font-bold text-slate-400 capitalize bg-white px-2 py-0.5 rounded border border-slate-100">
                      {renderSafeText(iss.category).replace('_', ' ')}
                    </span>
                  </div>

                  <p className="font-bold text-slate-800 text-base mb-1">{renderSafeText(iss.message)}</p>
                  <p className="text-slate-600 mt-2 bg-white/55 p-3 rounded-lg border border-slate-200/50 leading-relaxed">
                    <span className="font-extrabold text-teal-700">Saran AI:</span> {renderSafeText(iss.suggestion)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom control */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <button
          onClick={() => setActiveStep(2)}
          className="text-sm font-bold text-slate-500 hover:text-slate-800"
        >
          ← Kembali ke Dokumen
        </button>
        
        <div className="flex items-center gap-2">
          {!project.isDemo && project.qaReport.issues.length > 0 && (
            <button
              onClick={handleApplyQAFixes}
              className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2.5 rounded-xl font-extrabold text-sm shadow-lg shadow-indigo-600/10 cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="h-4 w-4" />
              ✨ Perbaiki Otomatis
            </button>
          )}
          <button
            onClick={() => setActiveStep(4)}
            className="bg-teal-600 text-white hover:bg-teal-700 px-6 py-2.5 rounded-xl font-extrabold text-sm shadow-lg shadow-teal-600/10 cursor-pointer"
          >
            Lanjut ke Unduh Hasil →
          </button>
        </div>
      </div>
    </div>
  );
}
