/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

export default function CalElementClick({
  namespace = "",
  calLink = "yourusername/30min",
  config = { layout: "month_view" },
}: {
  namespace?: string;
  calLink?: string;
  config?: Record<string, any>;
}) {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
     (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = [];
            const s = d.createElement("script");
            s.src = A;
            d.head.appendChild(s);
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            (api as unknown as { q: unknown[] }).q = [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window as any, "https://app.cal.com/embed/embed.js", "init");
 
    // @ts-expect-error
    if (window.Cal) {
      try {
         // @ts-ignore
        window.Cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
      } catch (error) {
        console.error(error);
      }
    }
 
    if (btnRef.current) {
      btnRef.current.setAttribute("data-cal-link", calLink);
 
      if (namespace)
        btnRef.current.setAttribute("data-cal-namespace", namespace);
       btnRef.current.setAttribute("data-cal-config", JSON.stringify(config));
    }
  }, [calLink, config, namespace]);

 
  return (
        <Button  ref={btnRef} variant="hero" className="w-full">
            Book Consultation
        </Button>
  );
}
