import { monitoredTopics, mentions } from '../data/monitoring';
import { MonitoringDashboard } from '../components/monitoring-dashboard';
import { TrackPageView } from '../components/track-page-view';

export default async function MonitoringPage() {
  return (
    <div>
      <title>Monitoring — Leo's Newsroom</title>
      <TrackPageView title="Monitoring — Leo's Newsroom" />
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Media Monitoring</h1>
        <p className="text-sm text-gray-500 mt-1">
          Track coverage and sentiment across your topics
        </p>
      </div>
      <MonitoringDashboard topics={monitoredTopics} mentions={mentions} />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
