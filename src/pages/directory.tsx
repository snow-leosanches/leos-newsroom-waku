import { mediaContacts } from '../data/directory';
import type { OutletType } from '../data/directory';
import { DirectoryBrowser } from '../components/directory-browser';
import { TrackPageView } from '../components/track-page-view';

export default async function DirectoryPage() {
  const allBeats = [...new Set(mediaContacts.flatMap((c) => c.beats))].sort();
  const allOutletTypes = [...new Set(mediaContacts.map((c) => c.outletType))].sort() as OutletType[];

  return (
    <div>
      <title>Directory — Leo's Newsroom</title>
      <TrackPageView title="Directory — Leo's Newsroom" />
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Media Directory</h1>
        <p className="text-sm text-gray-500 mt-1">
          {mediaContacts.length} journalists and editors across{' '}
          {allOutletTypes.length} outlet types
        </p>
      </div>
      <DirectoryBrowser
        contacts={mediaContacts}
        allBeats={allBeats}
        allOutletTypes={allOutletTypes}
      />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
