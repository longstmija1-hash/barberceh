"use client";

import Script from "next/script";

import { yclientsConfig } from "@/config/yclients";

export function YclientsScript() {
  return (
    <Script
      id="yclients-widget"
      src={yclientsConfig.widgetScriptUrl}
      strategy="afterInteractive"
      charSet="UTF-8"
    />
  );
}
