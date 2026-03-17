'use client';

import { trackSelfDescribingEvent } from '@snowplow/browser-tracker';
import type { Mention } from '../data/monitoring';

const sentimentStyles: Record<
  string,
  { badge: string; dot: string; label: string }
> = {
  positive: {
    badge: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200',
    dot: 'bg-emerald-500',
    label: 'Positive',
  },
  neutral: {
    badge: 'bg-gray-100 text-gray-600 ring-1 ring-gray-200',
    dot: 'bg-gray-400',
    label: 'Neutral',
  },
  negative: {
    badge: 'bg-red-50 text-red-600 ring-1 ring-red-200',
    dot: 'bg-red-500',
    label: 'Negative',
  },
};

const sourceTypeStyles: Record<string, string> = {
  News: 'bg-blue-50 text-blue-700 ring-1 ring-blue-200',
  Blog: 'bg-purple-50 text-purple-700 ring-1 ring-purple-200',
  Social: 'bg-sky-50 text-sky-700 ring-1 ring-sky-200',
  'Press Release': 'bg-orange-50 text-orange-700 ring-1 ring-orange-200',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

type Props = { mention: Mention };

export function MentionCard({ mention: m }: Props) {
  const sentiment = sentimentStyles[m.sentiment] ?? sentimentStyles.neutral;
  const sourceType = sourceTypeStyles[m.sourceType] ?? 'bg-gray-100 text-gray-600';

  const handleClick = () => {
    trackSelfDescribingEvent({
      event: {
        schema: 'iglu:com.leos-newsroom/mention_clicked/jsonschema/1-0-0',
        data: {
          mention_id: m.id,
          topic_id: m.topicId,
          headline: m.headline,
          source: m.source,
          sentiment: m.sentiment,
        },
      },
    });
  };

  return (
    <article className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded ${sentiment.badge}`}>
            <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1 ${sentiment.dot}`} />
            {sentiment.label}
          </span>
          <span className={`text-xs font-medium px-2 py-0.5 rounded ${sourceType}`}>
            {m.sourceType}
          </span>
        </div>
        <time className="text-xs text-gray-400 whitespace-nowrap shrink-0">
          {formatDate(m.date)}
        </time>
      </div>

      <h3
        className="text-sm font-semibold text-gray-900 leading-snug mb-1 hover:text-blue-700 cursor-pointer"
        onClick={handleClick}
      >
        {m.headline}
      </h3>

      <p className="text-xs text-gray-500 mb-2">{m.source}</p>

      <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{m.excerpt}</p>
    </article>
  );
}
