'use client';

import { trackSelfDescribingEvent } from '@snowplow/browser-tracker';
import type { PressRelease } from '../data/press-releases';

const wireStyles: Record<string, { badge: string; border: string }> = {
  'PR Newswire': {
    badge: 'bg-orange-50 text-orange-700 ring-1 ring-orange-200',
    border: 'border-l-orange-400',
  },
  'Business Wire': {
    badge: 'bg-blue-50 text-blue-700 ring-1 ring-blue-200',
    border: 'border-l-blue-500',
  },
  GlobeNewswire: {
    badge: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200',
    border: 'border-l-emerald-500',
  },
};

const fallbackWire = {
  badge: 'bg-gray-100 text-gray-600 ring-1 ring-gray-200',
  border: 'border-l-gray-400',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

type Props = { pressRelease: PressRelease };

export function PressReleaseCard({ pressRelease: pr }: Props) {
  const wire = wireStyles[pr.wire] ?? fallbackWire;

  const handleOpen = () => {
    trackSelfDescribingEvent({
      event: {
        schema: 'iglu:com.leos-newsroom/press_release_open/jsonschema/1-0-0',
        data: {
          press_release_id: pr.id,
          title: pr.title,
          company: pr.company,
          category: pr.category,
          wire: pr.wire,
        },
      },
    });
  };

  return (
    <article
      className={`bg-white rounded-lg border border-gray-200 border-l-4 ${wire.border} p-5 hover:shadow-md transition-shadow`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${wire.badge}`}>
            {pr.wire}
          </span>
          <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200">
            {pr.category}
          </span>
        </div>
        <time className="text-sm text-gray-400 whitespace-nowrap shrink-0">
          {formatDate(pr.date)}
        </time>
      </div>

      <h2
        className="text-base font-semibold text-gray-900 leading-snug mb-1.5 hover:text-blue-700 cursor-pointer"
        onClick={handleOpen}
      >
        {pr.title}
      </h2>

      <p className="text-sm text-gray-500 mb-3">
        {pr.company}
        {pr.ticker ? ` (${pr.ticker})` : ''}
      </p>

      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">{pr.excerpt}</p>

      <button
        onClick={handleOpen}
        className="text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline transition-colors"
      >
        Read Full Release →
      </button>
    </article>
  );
}
