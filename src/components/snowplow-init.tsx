'use client';

import { useEffect } from 'react';
import { newTracker } from '@snowplow/browser-tracker';
import { PerformanceTimingPlugin } from '@snowplow/browser-plugin-performance-timing';

let initialized = false;

const COLLECTOR = import.meta.env.WAKU_PUBLIC_SNOWPLOW_COLLECTOR ?? 'localhost:9090';

export function SnowplowInit() {
  useEffect(() => {
    if (initialized) return;
    initialized = true;
    newTracker('sp', COLLECTOR, {
      appId: 'leos-newsroom',
      plugins: [PerformanceTimingPlugin()],
      cookieSameSite: 'Lax',
      discoverRootDomain: true,
    });
  }, []);

  return null;
}
