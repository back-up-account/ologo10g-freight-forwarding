"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const storageKey = "ologo10g-privacy-notice-dismissed";
let dismissedForThisView = false;

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

function getSnapshot() {
  if (dismissedForThisView) return false;
  try {
    return window.localStorage.getItem(storageKey) !== "yes";
  } catch {
    return true;
  }
}

function getServerSnapshot() {
  return true;
}

export function CookieNotice() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!visible) return null;

  function dismiss() {
    dismissedForThisView = true;
    try {
      window.localStorage.setItem(storageKey, "yes");
    } catch {
      dismissedForThisView = true;
    }
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <aside aria-label="Privacy notice" className="privacy-notice">
      <p>
        This site uses essential browser storage to remember this notice. We do not
        use advertising cookies. <Link href="/privacy">Read our privacy notice</Link>.
      </p>
      <button className="notice-dismiss" onClick={dismiss} type="button">Understood</button>
    </aside>
  );
}
