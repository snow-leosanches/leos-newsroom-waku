'use client';

import { trackSelfDescribingEvent } from '@snowplow/browser-tracker';
import type { MediaContact } from '../data/directory';

const outletTypeStyles: Record<string, string> = {
  Newspaper: 'bg-slate-100 text-slate-700',
  Magazine: 'bg-purple-50 text-purple-700',
  Online: 'bg-blue-50 text-blue-700',
  'Wire Service': 'bg-orange-50 text-orange-700',
  Blog: 'bg-pink-50 text-pink-700',
  Podcast: 'bg-violet-50 text-violet-700',
  'TV/Broadcast': 'bg-red-50 text-red-700',
  Newsletter: 'bg-teal-50 text-teal-700',
};

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');
}

type Props = { contact: MediaContact };

export function ContactCard({ contact: c }: Props) {
  const handleViewProfile = () => {
    trackSelfDescribingEvent({
      event: {
        schema: 'iglu:com.leos-newsroom/contact_viewed/jsonschema/1-0-0',
        data: {
          contact_id: c.id,
          name: c.name,
          outlet: c.outlet,
          outlet_type: c.outletType,
          beats: c.beats,
        },
      },
    });
  };

  const handleGetContactInfo = () => {
    trackSelfDescribingEvent({
      event: {
        schema: 'iglu:com.leos-newsroom/contact_info_requested/jsonschema/1-0-0',
        data: {
          contact_id: c.id,
          name: c.name,
          outlet: c.outlet,
        },
      },
    });
  };

  const outletStyle = outletTypeStyles[c.outletType] ?? 'bg-gray-100 text-gray-600';

  return (
    <article className="bg-white rounded-lg border border-gray-200 p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-700 text-white text-sm font-bold flex items-center justify-center shrink-0">
          {initials(c.name)}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-gray-900 truncate">{c.name}</h3>
          <p className="text-xs text-gray-500 truncate">{c.title}</p>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs font-semibold text-blue-700">{c.outlet}</span>
            <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${outletStyle}`}>
              {c.outletType}
            </span>
          </div>
        </div>
        <span className="ml-auto text-xs text-gray-400 whitespace-nowrap shrink-0">
          {c.region}
        </span>
      </div>

      {/* Beats */}
      <div className="flex flex-wrap gap-1.5">
        {c.beats.map((beat) => (
          <span
            key={beat}
            className="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-full ring-1 ring-indigo-200"
          >
            {beat}
          </span>
        ))}
      </div>

      {/* Most recent article */}
      <div className="text-xs text-gray-500 leading-snug border-l-2 border-gray-200 pl-3 italic line-clamp-2">
        "{c.recentArticles[0]}"
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-auto pt-1">
        <button
          onClick={handleViewProfile}
          className="flex-1 text-xs font-semibold text-blue-700 border border-blue-200 hover:bg-blue-50 rounded-md py-1.5 transition-colors cursor-pointer"
        >
          View Profile
        </button>
        <button
          onClick={handleGetContactInfo}
          className="flex-1 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-md py-1.5 transition-colors cursor-pointer"
        >
          Get Contact Info
        </button>
      </div>
    </article>
  );
}
