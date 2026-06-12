"use client";

import { Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { openOnlineBooking } from "@/lib/yclients";
import { cn } from "@/lib/utils";

type BookingButtonProps = {
  className?: string;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "secondary";
  label?: string;
};

export function BookingButton({
  className,
  size = "default",
  variant = "default",
  label = "Онлайн-запись",
}: BookingButtonProps) {
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn(
        "rounded-none border-2 border-foreground bg-foreground font-mono uppercase tracking-widest text-background hover:bg-background hover:text-foreground",
        className,
      )}
      onClick={openOnlineBooking}
    >
      <Calendar className="size-4" />
      {label}
    </Button>
  );
}
