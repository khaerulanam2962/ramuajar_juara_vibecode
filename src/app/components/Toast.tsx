// src/app/components/Toast.tsx
"use client";

import React, { useState, useEffect, useCallback, createContext, useContext } from "react";
import { CheckCircle, AlertTriangle, Info, XCircle, X } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "warning";

interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContextType {
  showToast: (type: ToastType, title: string, message?: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

function ToastItem({ toast, onDismiss }: { toast: ToastMessage; onDismiss: (id: string) => void }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => onDismiss(toast.id), 300);
    }, toast.duration || 4000);
    return () => clearTimeout(timer);
  }, [toast, onDismiss]);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => onDismiss(toast.id), 300);
  };

  const iconMap = {
    success: <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />,
    error: <XCircle className="h-5 w-5 text-rose-500 shrink-0" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />,
    info: <Info className="h-5 w-5 text-sky-500 shrink-0" />,
  };

  const borderMap = {
    success: "border-l-emerald-500 bg-emerald-50",
    error: "border-l-rose-500 bg-rose-50",
    warning: "border-l-amber-500 bg-amber-50",
    info: "border-l-sky-500 bg-sky-50",
  };

  return (
    <div
      className={`flex items-start gap-3 px-4 py-3.5 rounded-xl border border-l-4 shadow-lg backdrop-blur-sm min-w-[320px] max-w-md transition-all duration-300 ${borderMap[toast.type]} ${
        isExiting ? "opacity-0 translate-x-8" : "opacity-100 translate-x-0 animate-slide-in-right"
      }`}
    >
      {iconMap[toast.type]}
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm text-slate-800">{toast.title}</p>
        {toast.message && (
          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{toast.message}</p>
        )}
      </div>
      <button
        onClick={handleDismiss}
        className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-white/50 transition-colors cursor-pointer shrink-0"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((type: ToastType, title: string, message?: string, duration?: number) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setToasts((prev) => [...prev, { id, type, title, message, duration }]);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast Container - Fixed top right */}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-3 no-print">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onDismiss={dismissToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
