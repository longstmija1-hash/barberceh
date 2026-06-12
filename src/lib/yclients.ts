import { yclientsConfig } from "@/config/yclients";

type YWidget = {
  show: (url?: string) => boolean;
  href: string;
  initialized: boolean;
};

declare global {
  interface Window {
    yaCounter39973275?: {
      reachGoal: (goal: string) => void;
    };
    yWidget?: YWidget;
  }
}

function trackBookingGoal(): void {
  window.yaCounter39973275?.reachGoal("ONLINE");
}

export function openOnlineBooking(): void {
  trackBookingGoal();

  const url = yclientsConfig.bookingUrl;

  if (window.yWidget?.show) {
    window.yWidget.show(url);
    return;
  }

  const yButton = document.querySelector<HTMLElement>(".yButton");
  if (yButton) {
    yButton.click();
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
}

export function isYclientsReady(): boolean {
  return Boolean(window.yWidget?.initialized || window.yWidget?.show);
}
