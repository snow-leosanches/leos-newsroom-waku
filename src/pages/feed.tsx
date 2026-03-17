import { pressReleases } from '../data/press-releases';
import { PressReleaseFeed } from '../components/press-release-feed';
import { TrackPageView } from '../components/track-page-view';

export default async function FeedPage() {
  const categories = [...new Set(pressReleases.map((pr) => pr.category))];

  return (
    <div>
      <title>Feed — Leo's Newsroom</title>
      <TrackPageView title="Feed — Leo's Newsroom" />
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Latest Press Releases</h1>
        <p className="text-sm text-gray-500 mt-1">{pressReleases.length} releases today</p>
      </div>
      <PressReleaseFeed pressReleases={pressReleases} categories={categories} />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
