import { RoleSelector } from '../components/role-selector';
import { TrackPageView } from '../components/track-page-view';

export default async function SignInPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <title>Sign In — Leo's Newsroom</title>
      <TrackPageView title="Sign In — Leo's Newsroom" />

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to Leo's Newsroom</h1>
        <p className="text-gray-500 mt-2">
          This is a demo app. Select a role to explore the platform.
        </p>
      </div>

      <RoleSelector />

      <p className="text-center text-xs text-gray-400 mt-8">
        No account required — role selection is for demo purposes only.
        <br />
        All clicks are tracked via Snowplow for instrumentation demonstration.
      </p>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
