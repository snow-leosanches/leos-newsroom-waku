import { Link } from 'waku';
import { TrackPageView } from '../components/track-page-view';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 2v6h6M9 13h6M9 17h4" />
      </svg>
    ),
    color: 'text-blue-600 bg-blue-50',
    title: 'Press Release Feed',
    description:
      'Real-time access to business wire news across industries. Filter by category and never miss a story that matters.',
    href: '/feed',
    label: 'View Feed',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    color: 'text-indigo-600 bg-indigo-50',
    title: 'Media Monitoring',
    description:
      'Track brand and topic mentions with sentiment analysis and daily volume trends across hundreds of top outlets.',
    href: '/monitoring',
    label: 'Open Monitoring',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    color: 'text-emerald-600 bg-emerald-50',
    title: 'Media Directory',
    description:
      'Discover journalists and editors by beat, outlet type, and region. Find the right contact for every story.',
    href: '/directory',
    label: 'Browse Directory',
  },
];

const stats = [
  { value: '50K+', label: 'Media contacts' },
  { value: '2M+', label: 'Daily mentions tracked' },
  { value: '500+', label: 'News sources indexed' },
  { value: '38', label: 'Industries covered' },
];

export default async function LandingPage() {
  return (
    <div className="-mt-8">
      <title>Leo's Newsroom — PR & Media Intelligence</title>
      <TrackPageView title="Home — Leo's Newsroom" />

      {/* Hero */}
      <section className="text-center py-24 px-4">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-6">
          Demo App · Powered by Snowplow
        </span>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight max-w-2xl mx-auto">
          PR & media intelligence built for modern teams
        </h1>
        <p className="mt-5 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
          Monitor brand coverage, distribute press releases, and discover media contacts — all
          from one unified platform.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/sign-in"
            className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors"
          >
            Get started →
          </Link>
          <Link
            to="/feed"
            className="px-6 py-3 text-blue-700 font-semibold hover:underline transition-colors"
          >
            Explore the demo
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-gray-200 bg-white py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-6 py-2">
              <p className="text-3xl font-bold text-gray-900">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Everything you need, in one place</h2>
          <p className="text-sm text-gray-500 mt-2">
            Three core modules, each packed with demo Snowplow instrumentation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${f.color}`}>
                {f.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{f.description}</p>
              </div>
              <Link
                to={f.href}
                className="mt-auto text-sm font-semibold text-blue-700 hover:underline"
              >
                {f.label} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-700 rounded-2xl p-12 text-center mb-8">
        <h2 className="text-2xl font-bold text-white">Ready to explore the demo?</h2>
        <p className="text-blue-200 mt-2 text-sm">Sign in as a role and see Snowplow events fire in real time.</p>
        <Link
          to="/sign-in"
          className="mt-6 inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
        >
          Choose your role →
        </Link>
      </section>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
