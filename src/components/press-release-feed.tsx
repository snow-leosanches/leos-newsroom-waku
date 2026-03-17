'use client';

import { useState } from 'react';
import { trackSelfDescribingEvent } from '@snowplow/browser-tracker';
import type { PressRelease } from '../data/press-releases';
import { PressReleaseCard } from './press-release-card';

type Props = {
  pressReleases: PressRelease[];
  categories: string[];
};

export function PressReleaseFeed({ pressReleases, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category !== 'All') {
      trackSelfDescribingEvent({
        event: {
          schema: 'iglu:com.leos-newsroom/filter_applied/jsonschema/1-0-0',
          data: { filter_type: 'category', value: category },
        },
      });
    }
  };

  const filtered =
    activeCategory === 'All'
      ? pressReleases
      : pressReleases.filter((pr) => pr.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === cat
                ? 'bg-blue-700 text-white'
                : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-400 hover:text-blue-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map((pr) => (
          <PressReleaseCard key={pr.id} pressRelease={pr} />
        ))}
      </div>
    </div>
  );
}
