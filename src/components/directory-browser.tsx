'use client';

import { useState, useEffect, useRef } from 'react';
import { trackSelfDescribingEvent } from '@snowplow/browser-tracker';
import type { MediaContact, OutletType } from '../data/directory';
import { ContactCard } from './contact-card';

type Props = {
  contacts: MediaContact[];
  allBeats: string[];
  allOutletTypes: OutletType[];
};

export function DirectoryBrowser({ contacts, allBeats, allOutletTypes }: Props) {
  const [query, setQuery] = useState('');
  const [activeBeat, setActiveBeat] = useState<string | null>(null);
  const [activeOutletType, setActiveOutletType] = useState<OutletType | null>(null);
  const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filtered = contacts.filter((c) => {
    const q = query.toLowerCase();
    const matchesQuery =
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.outlet.toLowerCase().includes(q) ||
      c.beats.some((b) => b.toLowerCase().includes(q));
    const matchesBeat = !activeBeat || c.beats.includes(activeBeat);
    const matchesOutletType = !activeOutletType || c.outletType === activeOutletType;
    return matchesQuery && matchesBeat && matchesOutletType;
  });

  // Debounced Snowplow search event
  useEffect(() => {
    if (!query) return;
    if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
    searchTimerRef.current = setTimeout(() => {
      trackSelfDescribingEvent({
        event: {
          schema: 'iglu:com.leos-newsroom/directory_searched/jsonschema/1-0-0',
          data: { query, results_count: filtered.length },
        },
      });
    }, 600);
    return () => {
      if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
    };
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {/* Search */}
      <div className="relative mb-5">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search by name, outlet, or beat…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Beat filter */}
      <div className="mb-3">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Beat</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveBeat(null)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
              activeBeat === null
                ? 'bg-blue-700 text-white'
                : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-400 hover:text-blue-700'
            }`}
          >
            All
          </button>
          {allBeats.map((beat) => (
            <button
              key={beat}
              onClick={() => setActiveBeat(activeBeat === beat ? null : beat)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeBeat === beat
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-400 hover:text-blue-700'
              }`}
            >
              {beat}
            </button>
          ))}
        </div>
      </div>

      {/* Outlet type filter */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Outlet Type
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveOutletType(null)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
              activeOutletType === null
                ? 'bg-blue-700 text-white'
                : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-400 hover:text-blue-700'
            }`}
          >
            All
          </button>
          {allOutletTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveOutletType(activeOutletType === type ? null : type)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeOutletType === type
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-400 hover:text-blue-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">
        {filtered.length} contact{filtered.length !== 1 ? 's' : ''}
        {activeBeat ? ` · ${activeBeat}` : ''}
        {activeOutletType ? ` · ${activeOutletType}` : ''}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((c) => (
            <ContactCard key={c.id} contact={c} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400 text-sm">
          No contacts match your search.
        </div>
      )}
    </div>
  );
}
