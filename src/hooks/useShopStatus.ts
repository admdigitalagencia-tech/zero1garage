import { useMemo } from 'react';

export function useShopStatus() {
  return useMemo(() => {
    const now = new Date();
    // Convert to Pacific Time
    const pt = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
    const day = pt.getDay(); // 0=Sun
    const hour = pt.getHours();
    const min = pt.getMinutes();
    const time = hour + min / 60;

    if (day >= 1 && day <= 5 && time >= 9 && time < 18) return true;
    if (day === 6 && time >= 9 && time < 14) return true;
    return false;
  }, []);
}
