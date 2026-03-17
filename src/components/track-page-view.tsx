'use client';

import { useEffect } from 'react';
import { trackPageView } from '@snowplow/browser-tracker';

type Props = { title: string };

export function TrackPageView({ title }: Props) {
  useEffect(() => {
    trackPageView({ title });
  }, [title]);

  return null;
}
