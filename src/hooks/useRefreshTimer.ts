// hooks/useRefreshTimer.ts
// ─────────────────────────────────────────────────────────────────────────────
// A generic polling hook.
//   - Calls `callback` immediately on mount, then every `intervalMs` milliseconds.
//   - Pauses polling when the browser tab is hidden (Page Visibility API).
//   - `enabled` flag lets you gate the poll (e.g. only when logged-in).
//   - Returns `{ refresh }` so callers can trigger an immediate manual refresh.
//
// Usage examples
// ──────────────
// // Notifications — every 30 s
// const { refresh } = useRefreshTimer(fetchNotifications, 30_000);
//
// // Live toll counts — every 10 s, only when the user is on the dashboard
// const { refresh } = useRefreshTimer(fetchTollCounts, 10_000, { enabled: isOnDashboard });
//
// // Pause completely
// const { refresh } = useRefreshTimer(fetchData, 60_000, { enabled: false });
// ─────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useRef } from 'react';

interface RefreshTimerOptions {
  /** Set to false to completely disable polling (default: true). */
  enabled?: boolean;
  /** If true, pauses when the browser tab is hidden (default: true). */
  pauseOnHidden?: boolean;
}

interface RefreshTimerReturn {
  /** Immediately invoke the callback outside the normal schedule. */
  refresh: () => void;
}

export function useRefreshTimer(
  callback: () => void | Promise<void>,
  intervalMs: number,
  { enabled = true, pauseOnHidden = true }: RefreshTimerOptions = {},
): RefreshTimerReturn {
  // Keep a stable ref so we never need to re-register the interval when the
  // caller re-renders with a new arrow function reference.
  const callbackRef = useRef(callback);
  useEffect(() => { callbackRef.current = callback; }, [callback]);

  const timerRef   = useRef<ReturnType<typeof setInterval> | null>(null);
  const hiddenRef  = useRef(false);

  const stop  = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    stop();
    timerRef.current = setInterval(() => {
      if (pauseOnHidden && hiddenRef.current) return;
      callbackRef.current();
    }, intervalMs);
  }, [intervalMs, pauseOnHidden, stop]);

  // Manual / immediate refresh — also resets the interval cadence so the next
  // automatic tick happens `intervalMs` ms *after* the manual call.
  const refresh = useCallback(() => {
    callbackRef.current();
    if (enabled) start();          // reset the timer so it doesn't double-fire
  }, [enabled, start]);

  // ── Start / stop based on `enabled` ──────────────────────────────────────
  useEffect(() => {
    if (!enabled) { stop(); return; }
    callbackRef.current();          // fire immediately
    start();
    return stop;
  }, [enabled, start, stop]);

  // ── Pause on hidden tab ───────────────────────────────────────────────────
  useEffect(() => {
    if (!pauseOnHidden) return;
    const onVisibility = () => {
      hiddenRef.current = document.hidden;
      if (!document.hidden && enabled) {
        // Resume: fire once right away then restart the clock
        callbackRef.current();
        start();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [enabled, pauseOnHidden, start]);

  return { refresh };
}