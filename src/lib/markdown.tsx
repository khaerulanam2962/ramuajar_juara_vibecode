"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import mermaid from "mermaid";

// A Mermaid component that securely renders charts
function MermaidChart({ chart }: { chart: string }) {
  const [svgCode, setSvgCode] = useState<string>("");

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: "default" });
    const id = `mermaid-chart-${Math.random().toString(36).substring(2, 9)}`;
    mermaid.render(id, chart).then((result) => {
      setSvgCode(result.svg);
    }).catch((e) => {
      console.error("Mermaid error:", e);
      setSvgCode(`<pre class="text-red-500 text-sm">Error rendering chart: ${e.message}</pre>`);
    });
  }, [chart]);

  if (!svgCode) {
    return (
      <div className="flex justify-center items-center h-32 my-6 bg-slate-50 border border-slate-200 rounded-xl">
        <div className="text-slate-400 text-sm animate-pulse">Menghasilkan diagram...</div>
      </div>
    );
  }

  return (
    <div 
      className="my-6 flex justify-center w-full overflow-x-auto bg-slate-50 p-4 rounded-xl border border-slate-200" 
      dangerouslySetInnerHTML={{ __html: svgCode }} 
    />
  );
}

export function RenderMarkdown({ content }: { content: string }) {
  if (!content) return null;

  return (
    <div className="markdown-body text-base text-slate-700">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({node, ...props}: any) => <h1 className="text-2xl font-bold text-slate-900 mt-6 mb-4 pb-2 border-b border-slate-200" {...props} />,
          h2: ({node, ...props}: any) => <h2 className="text-xl font-bold text-slate-800 mt-5 mb-3" {...props} />,
          h3: ({node, ...props}: any) => <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2" {...props} />,
          p: ({node, ...props}: any) => <p className="mb-4 text-slate-700 leading-relaxed" {...props} />,
          ul: ({node, ...props}: any) => <ul className="list-disc pl-6 mb-4 space-y-1.5 text-slate-700" {...props} />,
          ol: ({node, ...props}: any) => <ol className="list-decimal pl-6 mb-4 space-y-1.5 text-slate-700" {...props} />,
          li: ({node, ...props}: any) => <li className="leading-relaxed" {...props} />,
          blockquote: ({node, ...props}: any) => <blockquote className="border-l-4 border-teal-500 bg-teal-50/50 px-4 py-3 my-4 rounded-r-lg text-slate-700 italic" {...props} />,
          table: ({node, ...props}: any) => (
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full divide-y divide-slate-300 border border-slate-200 rounded-lg overflow-hidden" {...props} />
            </div>
          ),
          th: ({node, ...props}: any) => <th className="bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-900 border-b border-slate-200" {...props} />,
          td: ({node, ...props}: any) => <td className="px-4 py-3 text-sm text-slate-700 border-b border-slate-200 whitespace-nowrap" {...props} />,
          code(props: any) {
            const {children, className, node, ...rest} = props;
            const match = /language-(\w+)/.exec(className || "");
            
            if (match && match[1] === "mermaid") {
              return <MermaidChart chart={String(children).replace(/\n$/, "")} />;
            }
            
            return match ? (
              <pre className="bg-slate-800 text-slate-50 p-4 rounded-lg overflow-x-auto mb-4">
                <code className={className} {...rest}>
                  {children}
                </code>
              </pre>
            ) : (
              <code className="bg-slate-100 text-teal-600 px-1.5 py-0.5 rounded font-mono text-sm border border-slate-200" {...rest}>
                {children}
              </code>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
