import React from 'react';
import { Sliders, ShieldCheck, Save, Edit3, Clipboard } from 'lucide-react';
import { Project, DocumentPack, QuizItem, RubricItem } from '@/types/project';
import { RenderMarkdown } from '@/lib/markdown';

interface DocumentPackTabsProps {
  project: Project;
  activeDocTab: keyof DocumentPack;
  setActiveDocTab: (tab: keyof DocumentPack) => void;
  isEditing: boolean;
  setIsEditing: (val: boolean) => void;
  editMarkdown: string;
  setEditMarkdown: (val: string) => void;
  handleSaveMarkdownEdit: () => void;
  startEditingMarkdown: () => void;
  handleCopyClipboard: (text: string) => void;
  setShowAdaptPanel: (val: boolean) => void;
  handleRunQACheck: () => void;
  setActiveStep: (step: number) => void;
  renderSafeText: (val: any) => string;
}

export function DocumentPackTabs({
  project,
  activeDocTab,
  setActiveDocTab,
  isEditing,
  setIsEditing,
  editMarkdown,
  setEditMarkdown,
  handleSaveMarkdownEdit,
  startEditingMarkdown,
  handleCopyClipboard,
  setShowAdaptPanel,
  handleRunQACheck,
  setActiveStep,
  renderSafeText
}: DocumentPackTabsProps) {
  if (!project.documentPack) return null;

  return (
    <div className="space-y-6 animate-fade-in print:bg-white print:text-black">
      {/* Document Tabs selector header */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 md:p-6 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-teal-600 font-extrabold uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded border border-teal-200">Editor Dokumen</span>
            <h2 className="text-lg font-black text-slate-900 mt-0.5">3. Dokumen Pembelajaran</h2>
          </div>
          {!project.isDemo && (
            <div className="flex gap-2 shrink-0">
              {(activeDocTab === "studentModule" || activeDocTab === "facilitatorGuide" || activeDocTab === "worksheet") && (
                <button
                  onClick={() => setShowAdaptPanel(true)}
                  className="bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 px-3.5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Sliders className="h-4 w-4" />
                  🎯 Atur Tingkat
                </button>
              )}
              <button
                onClick={handleRunQACheck}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2.5 rounded-xl font-extrabold text-sm flex items-center gap-1.5 shadow-lg shadow-teal-600/10 transition-all cursor-pointer"
              >
                <ShieldCheck className="h-4 w-4" />
                ✅ Cek Kualitas
              </button>
            </div>
          )}
        </div>

        {/* Sub Tab Headers */}
        <div className="flex border-b border-slate-100 mt-6 overflow-x-auto gap-2">
          {[
            { key: "studentModule", label: "📘 Modul Siswa" },
            { key: "facilitatorGuide", label: "👨‍🏫 Panduan Guru" },
            { key: "worksheet", label: "📝 Lembar Kerja (LKPD)" },
            { key: "quiz", label: "❓ Soal Kuis" },
            { key: "rubric", label: "📊 Tabel Rubrik" }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveDocTab(tab.key as keyof DocumentPack);
                setIsEditing(false);
              }}
              className={`text-sm font-bold px-4 py-3 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                activeDocTab === tab.key 
                  ? "border-teal-600 text-teal-600 font-extrabold" 
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* View/Edit Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 relative min-h-[400px]">
        
        {/* Document Toolbar controls */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-6 no-print">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-wide">
            Pratinjau Dokumen
          </span>
          
          <div className="flex items-center gap-2">
            {/* Only show MD editing tools for markdown documents (not Quiz/Rubric arrays) */}
            {!project.isDemo && (activeDocTab === "studentModule" || activeDocTab === "facilitatorGuide" || activeDocTab === "worksheet") && (
              <>
                {isEditing ? (
                  <button
                    onClick={handleSaveMarkdownEdit}
                    className="bg-teal-600 text-white hover:bg-teal-700 px-3 py-2.5 rounded-lg font-bold text-sm flex items-center gap-1 shadow-sm cursor-pointer"
                  >
                    <Save className="h-3.5 w-3.5" />
                    Simpan Perubahan
                  </button>
                ) : (
                  <button
                    onClick={startEditingMarkdown}
                    className="text-slate-600 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 px-3 py-2.5 rounded-lg font-bold text-sm flex items-center gap-1 cursor-pointer"
                  >
                    <Edit3 className="h-3.5 w-3.5" />
                    Edit Dokumen
                  </button>
                )}
              </>
            )}
            
            <button
              onClick={() => {
                const content = activeDocTab === "quiz" 
                  ? JSON.stringify(project.documentPack?.quiz, null, 2)
                  : activeDocTab === "rubric"
                  ? JSON.stringify(project.documentPack?.rubric, null, 2)
                  : project.documentPack?.[activeDocTab] as string;
                handleCopyClipboard(content || "");
              }}
              className="text-slate-500 hover:text-slate-800 p-2.5 rounded-lg hover:bg-slate-100 transition-colors"
              title="Salin Konten"
            >
              <Clipboard className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Document Content Renderers */}
        <div id="document-content-area" className="print:block">
          
          {/* EDIT MODE TEXTAREA FOR MARKDOWN */}
          {isEditing ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
              <textarea
                value={editMarkdown}
                onChange={(e) => setEditMarkdown(e.target.value)}
                className="w-full h-full text-sm font-mono border border-slate-200 rounded-xl p-4 focus:ring-1 focus:ring-teal-500 focus:outline-none bg-slate-50 resize-none no-print"
              />
              <div className="w-full h-full overflow-y-auto border border-slate-200 rounded-xl p-4 bg-white prose max-w-none no-print hidden md:block">
                <RenderMarkdown content={editMarkdown} />
              </div>
            </div>
          ) : (
            <>
              {/* MARKDOWN RENDERER */}
              {(activeDocTab === "studentModule" || activeDocTab === "facilitatorGuide" || activeDocTab === "worksheet") && (
                <div className="prose max-w-none">
                  <RenderMarkdown content={(project.documentPack[activeDocTab] as string) || ""} />
                </div>
              )}

              {/* QUIZ CARD GRID RENDERER */}
              {activeDocTab === "quiz" && (
                <div className="space-y-6">
                  {((project.documentPack.quiz as QuizItem[]) || []).map((q, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                      <div className="flex justify-between items-start gap-3 mb-3">
                        <span className="text-sm font-black text-teal-600 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                          Soal {idx + 1}
                        </span>
                        <span className="text-xs font-bold text-slate-400 capitalize px-2 py-0.5 rounded bg-white border border-slate-100">
                          {renderSafeText(q.difficulty)}
                        </span>
                      </div>
                      <p className="font-bold text-base text-slate-800 mb-4">{renderSafeText(q.question)}</p>
                      
                      {q.options && q.options.length > 0 && (
                        <div className="grid sm:grid-cols-2 gap-3 mb-4">
                          {q.options.map((opt, oIdx) => {
                            const isAnswer = renderSafeText(opt) === renderSafeText(q.answer);
                            return (
                              <div 
                                key={oIdx} 
                                className={`p-3 rounded-lg border text-sm flex gap-2 ${
                                  isAnswer 
                                    ? "bg-teal-50/50 border-teal-400 text-teal-800 font-semibold" 
                                    : "bg-white border-slate-200 text-slate-600"
                                }`}
                              >
                                <span className="font-bold">{String.fromCharCode(65 + oIdx)}.</span>
                                <span>{renderSafeText(opt)}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      <div className="mt-4 pt-3 border-t border-slate-200/60 text-sm bg-slate-100/50 -mx-5 -mb-5 p-4 rounded-b-xl">
                        <p className="text-slate-600"><span className="font-bold text-teal-700">Kunci Jawaban:</span> {renderSafeText(q.answer)}</p>
                        <p className="text-slate-500 mt-1 leading-relaxed"><span className="font-bold">Penjelasan:</span> {renderSafeText(q.explanation)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* RUBRIC TABLE RENDERER */}
              {activeDocTab === "rubric" && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200 text-sm border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-50 font-bold text-slate-700">
                      <tr>
                        <th className="px-4 py-3 text-left w-32">Kriteria Penilaian</th>
                        <th className="px-4 py-3 text-left w-20">Bobot</th>
                        <th className="px-4 py-3 text-left">Luar Biasa (Excellent)</th>
                        <th className="px-4 py-3 text-left">Baik (Good)</th>
                        <th className="px-4 py-3 text-left">Perlu Perbaikan</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200 text-slate-600 leading-relaxed">
                      {((project.documentPack.rubric as RubricItem[]) || []).map((r, idx) => (
                        <tr key={idx} className="align-top hover:bg-slate-50/50">
                          <td className="px-4 py-3 font-bold text-slate-800">{renderSafeText(r.criterion)}</td>
                          <td className="px-4 py-3 font-bold text-teal-600">{renderSafeText(r.weight)}%</td>
                          <td className="px-4 py-3 bg-emerald-50/20">{renderSafeText(r.excellent)}</td>
                          <td className="px-4 py-3">{renderSafeText(r.good)}</td>
                          <td className="px-4 py-3 bg-rose-50/10">{renderSafeText(r.needsImprovement)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Bottom Nav indicators */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex justify-between items-center no-print">
        <button
          onClick={() => setActiveStep(1)}
          className="text-sm font-bold text-slate-500 hover:text-slate-800"
        >
          ← Kembali ke Rancangan
        </button>
        <button
          onClick={project.isDemo ? () => setActiveStep(3) : handleRunQACheck}
          className="bg-teal-600 text-white hover:bg-teal-700 px-6 py-2.5 rounded-xl font-extrabold text-sm shadow-lg shadow-teal-600/10 cursor-pointer"
        >
          Lanjut ke Cek Kualitas →
        </button>
      </div>
    </div>
  );
}
