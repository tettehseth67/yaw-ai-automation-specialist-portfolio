/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export type ToastType = "success" | "info" | "error";

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
}

interface ToastContextType {
  showToast: (title: string, type?: ToastType, description?: string, duration?: number) => void;
  toasts: ToastMessage[];
  dismissToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (title: string, type: ToastType = "success", description?: string, duration = 4000) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, type, title, description, duration }]);
      
      setTimeout(() => {
        dismissToast(id);
      }, duration);
    },
    [dismissToast]
  );

  return (
    <ToastContext.Provider value={{ showToast, toasts, dismissToast }}>
      {children}
      
      {/* Toast Portal Container */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col space-y-3 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToastItem key={toast.id} toast={toast} onDismiss={dismissToast} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

interface ToastItemProps {
  key?: string;
  toast: ToastMessage;
  onDismiss: (id: string) => void;
}

function ToastItem({ toast, onDismiss }: ToastItemProps) {
  const iconMap = {
    success: <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0" />,
    info: <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />,
    error: <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0" />,
  };

  const bgBorderMap = {
    success: "border-green-100 dark:border-green-900 bg-white dark:bg-zinc-900/95 shadow-green-500/[0.03]",
    info: "border-blue-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/95 shadow-blue-500/[0.03]",
    error: "border-red-100 dark:border-red-900 bg-white dark:bg-zinc-900/95 shadow-red-500/[0.03]",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } }}
      className={`pointer-events-auto flex items-start space-x-3.5 rounded-2xl border p-4 shadow-xl ${bgBorderMap[toast.type]} w-full`}
    >
      {/* Icon */}
      <div className="mt-0.5">{iconMap[toast.type]}</div>

      {/* Content */}
      <div className="flex-1 space-y-1">
        <h4 className="text-xs font-bold text-gray-950 dark:text-white leading-tight">
          {toast.title}
        </h4>
        {toast.description && (
          <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
            {toast.description}
          </p>
        )}
      </div>

      {/* Manual Dismiss Button */}
      <button
        onClick={() => onDismiss(toast.id)}
        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-lg p-1 transition-colors cursor-pointer"
        aria-label="Dismiss notification"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </motion.div>
  );
}
