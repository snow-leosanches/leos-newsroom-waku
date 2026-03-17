'use client';

import { useState } from 'react';
import { trackSelfDescribingEvent } from '@snowplow/browser-tracker';
import type { MonitoredTopic, Mention } from '../data/monitoring';
import { MentionCard } from './mention-card';

type Props = {
  topics: MonitoredTopic[];
  mentions: Mention[];
};

function SentimentBar({
  sentiment,
}: {
  sentiment: { positive: number; neutral: number; negative: number };
}) {
  const total = sentiment.positive + sentiment.neutral + sentiment.negative;
  const pct = (n: number) => `${Math.round((n / total) * 100)}%`;

  return (
    <div>
      <div className="flex h-2 rounded-full overflow-hidden gap-px">
        <div
          className="bg-emerald-500 rounded-l-full"
          style={{ width: pct(sentiment.positive) }}
        />
        <div className="bg-gray-300" style={{ width: pct(sentiment.neutral) }} />
        <div
          className="bg-red-400 rounded-r-full"
          style={{ width: pct(sentiment.negative) }}
        />
      </div>
      <div className="flex gap-4 mt-1.5">
        <span className="text-xs text-emerald-600">
          ● {sentiment.positive} positive
        </span>
        <span className="text-xs text-gray-500">● {sentiment.neutral} neutral</span>
        <span className="text-xs text-red-500">● {sentiment.negative} negative</span>
      </div>
    </div>
  );
}

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function VolumeChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1 h-14">
      {data.map((val, i) => (
        <div key={i} className="flex flex-col items-center gap-1 flex-1">
          <div
            className="w-full bg-blue-200 hover:bg-blue-400 rounded-t-sm transition-colors"
            style={{ height: `${Math.round((val / max) * 40) + 4}px` }}
            title={`${val} mentions`}
          />
          <span className="text-xs text-gray-400">{DAYS[i]}</span>
        </div>
      ))}
    </div>
  );
}

function aggregate(topics: MonitoredTopic[]) {
  return topics.reduce(
    (acc, t) => ({
      mentionCount: acc.mentionCount + t.mentionCount,
      sentiment: {
        positive: acc.sentiment.positive + t.sentiment.positive,
        neutral: acc.sentiment.neutral + t.sentiment.neutral,
        negative: acc.sentiment.negative + t.sentiment.negative,
      },
      weeklyVolume: acc.weeklyVolume.map((v, i) => v + t.weeklyVolume[i]) as [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
      ],
      topSources: [...new Set([...acc.topSources, ...t.topSources])].slice(0, 6),
    }),
    {
      mentionCount: 0,
      sentiment: { positive: 0, neutral: 0, negative: 0 },
      weeklyVolume: [0, 0, 0, 0, 0, 0, 0] as [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
      ],
      topSources: [] as string[],
    },
  );
}

export function MonitoringDashboard({ topics, mentions }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleTopicSelect = (id: string | null) => {
    setSelectedId(id);
    if (id !== null) {
      const topic = topics.find((t) => t.id === id);
      trackSelfDescribingEvent({
        event: {
          schema: 'iglu:com.leos-newsroom/topic_selected/jsonschema/1-0-0',
          data: { topic_id: id, topic_name: topic?.name ?? id },
        },
      });
    }
  };

  const activeTopic = selectedId ? topics.find((t) => t.id === selectedId) ?? null : null;
  const stats = activeTopic ?? aggregate(topics);
  const filteredMentions = selectedId
    ? mentions.filter((m) => m.topicId === selectedId)
    : mentions;

  const positivePct = Math.round(
    (stats.sentiment.positive /
      (stats.sentiment.positive + stats.sentiment.neutral + stats.sentiment.negative)) *
      100,
  );

  return (
    <div>
      {/* Topic tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => handleTopicSelect(null)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            selectedId === null
              ? 'bg-blue-700 text-white'
              : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-400 hover:text-blue-700'
          }`}
        >
          All Topics
        </button>
        {topics.map((t) => (
          <button
            key={t.id}
            onClick={() => handleTopicSelect(t.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              selectedId === t.id
                ? 'bg-blue-700 text-white'
                : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-400 hover:text-blue-700'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Stats panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Mention count */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
            Total Mentions
          </p>
          <p className="text-3xl font-bold text-gray-900">{stats.mentionCount.toLocaleString()}</p>
          <p className="text-xs text-gray-400 mt-1">last 7 days</p>
        </div>

        {/* Positive sentiment */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
            Positive Sentiment
          </p>
          <p className="text-3xl font-bold text-emerald-600">{positivePct}%</p>
          <div className="mt-2">
            <SentimentBar sentiment={stats.sentiment} />
          </div>
        </div>

        {/* Volume chart */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
            Daily Volume
          </p>
          <VolumeChart data={stats.weeklyVolume} />
        </div>
      </div>

      {/* Top sources + description */}
      {activeTopic && (
        <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
            Top Sources
          </p>
          <div className="flex flex-wrap gap-2">
            {activeTopic.topSources.map((s) => (
              <span
                key={s}
                className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Mentions feed */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          {filteredMentions.length} mention{filteredMentions.length !== 1 ? 's' : ''}
          {activeTopic ? ` · ${activeTopic.name}` : ' across all topics'}
        </h2>
        <div className="space-y-3">
          {filteredMentions.map((m) => (
            <MentionCard key={m.id} mention={m} />
          ))}
        </div>
      </div>
    </div>
  );
}
