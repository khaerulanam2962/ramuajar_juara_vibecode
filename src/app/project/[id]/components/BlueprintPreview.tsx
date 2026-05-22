import React from 'react';
import { FileText, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { Project } from '@/types/project';

interface BlueprintPreviewProps {
  project: Project;
  setActiveStep: (step: number) => void;
  updateProjectState: (updates: Partial<Project>) => void;
  handleGenerateDocumentPack: () => void;
  renderSafeText: (val: any) => string;
  updateSafeText: (originalVal: any, newText: string) => any;
}

export function BlueprintPreview({
  project,
  setActiveStep,
  updateProjectState,
  handleGenerateDocumentPack,
  renderSafeText,
  updateSafeText
}: BlueprintPreviewProps) {
  if (!project.blueprint) return null;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-8 animate-fade-in">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xs text-teal-600 font-extrabold uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded border border-teal-200">Rancangan Silabus</span>
          <h2 className="text-xl font-black text-slate-900 mt-1 flex items-center gap-2">
            <FileText className="h-5 w-5 text-teal-600" />
            2. Tinjau Rancangan Silabus
          </h2>
          <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">
            Rancangan silabus ini dibuat berdasarkan rencana Anda. Periksa dan sesuaikan jika perlu, lalu lanjutkan ke pembuatan dokumen.
          </p>
        </div>
        <button
          onClick={() => setActiveStep(0)}
          className="text-sm font-bold text-slate-500 hover:text-slate-700 border border-slate-200 px-3 py-1.5 rounded-lg bg-slate-50"
        >
          Ubah Rencana
        </button>
      </div>

      {/* Blueprint Contents Grid */}
      <div className="space-y-6">
        {/* Summary */}
        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/60">
          <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-2">Ringkasan Silabus</h3>
          <textarea
            value={project.blueprint.summary}
            readOnly={project.isDemo}
            onChange={(e) => {
              if (project.isDemo) return;
              const updatedBp = { ...project.blueprint!, summary: e.target.value };
              updateProjectState({ blueprint: updatedBp });
            }}
            rows={3}
            className="w-full text-sm bg-transparent border-none focus:ring-1 focus:ring-teal-500 rounded p-1 resize-y font-medium text-slate-700 leading-relaxed focus:bg-white read-only:resize-none"
          />
        </div>

        {/* Objectives & Prerequisites */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Objectives */}
          <div className="p-5 bg-white rounded-xl border border-slate-200/80">
            <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-3">Tujuan Pembelajaran</h3>
            <ul className="space-y-2">
              {(project.blueprint?.learningObjectives || []).map((obj, i) => (
                <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                  <input
                    type="text"
                    value={renderSafeText(obj)}
                    readOnly={project.isDemo}
                    onChange={(e) => {
                      if (project.isDemo) return;
                      const newList = [...(project.blueprint?.learningObjectives || [])];
                      newList[i] = updateSafeText(newList[i], e.target.value);
                      const updatedBp = { ...project.blueprint!, learningObjectives: newList };
                      updateProjectState({ blueprint: updatedBp });
                    }}
                    className="bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-teal-500 rounded w-full py-0.5 text-slate-700"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Prerequisites */}
          <div className="p-5 bg-white rounded-xl border border-slate-200/80">
            <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-3">Prasyarat Belajar</h3>
            <ul className="space-y-2">
              {(project.blueprint?.prerequisites || []).map((req, i) => (
                <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                  <input
                    type="text"
                    value={renderSafeText(req)}
                    readOnly={project.isDemo}
                    onChange={(e) => {
                      if (project.isDemo) return;
                      const newList = [...(project.blueprint?.prerequisites || [])];
                      newList[i] = updateSafeText(newList[i], e.target.value);
                      const updatedBp = { ...project.blueprint!, prerequisites: newList };
                      updateProjectState({ blueprint: updatedBp });
                    }}
                    className="bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-teal-500 rounded w-full py-0.5 text-slate-700"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Session Plan timeline cards */}
        <div>
          <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-3">Rencana Sesi Detail</h3>
          <div className="space-y-4">
            {(project.blueprint?.sessionPlan || []).map((session, sIdx) => (
              <div key={sIdx} className="bg-slate-50 border border-slate-200 rounded-xl p-5 relative">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <h4 className="font-bold text-base text-slate-800">{renderSafeText(session?.sessionTitle) || `Sesi ${sIdx + 1}`}</h4>
                  <span className="text-xs font-bold text-slate-500 bg-slate-200/70 px-2 py-0.5 rounded-full">{renderSafeText(session?.duration)}</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm mt-3">
                  <div>
                    <span className="font-bold text-slate-600 block mb-1">Aktivitas Mengajar:</span>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      {(session?.activities || []).map((act, aIdx) => (
                        <li key={aIdx}>{renderSafeText(act)}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold text-slate-600 block mb-1">Hasil Sesi:</span>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      {(session?.outputs || []).map((out, oIdx) => (
                        <li key={oIdx}>{renderSafeText(out)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Project and Assessment */}
        <div className="p-5 bg-teal-50/50 rounded-xl border border-teal-100 flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h3 className="text-sm font-extrabold uppercase text-teal-800 tracking-wider mb-2">Tugas Akhir</h3>
            <h4 className="font-bold text-base text-slate-800">{renderSafeText(project.blueprint?.finalProject?.title) || "Proyek Mandiri"}</h4>
            <p className="text-sm text-slate-600 leading-relaxed mt-1">{renderSafeText(project.blueprint?.finalProject?.description) || "Selesaikan tugas akhir secara mandiri."}</p>
          </div>
          <div className="w-full md:w-64">
            <h3 className="text-sm font-extrabold uppercase text-teal-800 tracking-wider mb-2">Kriteria Kelulusan</h3>
            <ul className="list-disc pl-4 text-sm text-slate-600 space-y-1">
              {(project.blueprint?.finalProject?.criteria || []).map((crit, idx) => (
                <li key={idx}>{renderSafeText(crit)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
        <button
          onClick={() => {
            if (project.isDemo) {
              setActiveStep(0);
            } else {
              updateProjectState({ status: "draft" });
              setActiveStep(0);
            }
          }}
          className="text-sm font-bold text-slate-500 hover:text-slate-800"
        >
          ← Kembali ke Rencana
        </button>
        {!project.isDemo ? (
          <button
            onClick={handleGenerateDocumentPack}
            className="bg-teal-600 text-white hover:bg-teal-700 px-6 py-3 rounded-xl font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-teal-600/10 cursor-pointer"
          >
            <Sparkles className="h-4 w-4 animate-pulse" />
            ✨ Buat Semua Dokumen Ajar
          </button>
        ) : (
          <button
            onClick={() => setActiveStep(2)}
            className="bg-teal-600 text-white hover:bg-teal-700 px-6 py-3 rounded-xl font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-teal-600/10 cursor-pointer"
          >
            Lanjut ke Dokumen Ajar →
          </button>
        )}
      </div>
    </div>
  );
}
