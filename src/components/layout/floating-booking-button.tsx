"use client";

import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

import { openOnlineBooking } from "@/lib/yclients";

export function FloatingBookingButton() {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={openOnlineBooking}
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 border-2 border-foreground bg-foreground px-4 py-3 font-mono text-xs uppercase tracking-widest text-background shadow-[4px_4px_0_0_var(--foreground)] transition-colors hover:bg-background hover:text-foreground md:right-6 md:bottom-6 md:px-5 md:py-4 md:text-sm"
      aria-label="Онлайн-запись"
    >
      <Calendar className="size-4 md:size-5" />
      <span className="hidden sm:inline">Онлайн-запись</span>
      <span className="sm:hidden">Запись</span>
    </motion.button>
  );
}
