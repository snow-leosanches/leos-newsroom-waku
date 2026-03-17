'use client';

import { trackSelfDescribingEvent } from '@snowplow/browser-tracker';

const roles = [
  {
    id: 'pr-manager',
    title: 'PR Manager',
    description:
      'Distribute press releases, manage media lists, and coordinate outreach campaigns across wires and outlets.',
    destination: '/feed',
    color: {
      card: 'hover:border-blue-400 hover:shadow-blue-100',
      iconBg: 'bg-blue-100',
      iconText: 'text-blue-700',
      badge: 'bg-blue-50 text-blue-700',
      cta: 'text-blue-700',
    },
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    defaultPage: 'Press Release Feed',
  },
  {
    id: 'brand-analyst',
    title: 'Brand Analyst',
    description:
      'Monitor brand and topic coverage, track sentiment over time, and report on share of voice across media.',
    destination: '/monitoring',
    color: {
      card: 'hover:border-indigo-400 hover:shadow-indigo-100',
      iconBg: 'bg-indigo-100',
      iconText: 'text-indigo-700',
      badge: 'bg-indigo-50 text-indigo-700',
      cta: 'text-indigo-700',
    },
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    defaultPage: 'Media Monitoring',
  },
  {
    id: 'journalist',
    title: 'Journalist',
    description:
      'Browse the media contact directory, access the press release feed, and discover sources for your next story.',
    destination: '/directory',
    color: {
      card: 'hover:border-emerald-400 hover:shadow-emerald-100',
      iconBg: 'bg-emerald-100',
      iconText: 'text-emerald-700',
      badge: 'bg-emerald-50 text-emerald-700',
      cta: 'text-emerald-700',
    },
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 2v6h6M9 13h6M9 17h4"
        />
      </svg>
    ),
    defaultPage: 'Media Directory',
  },
];

export function RoleSelector() {
  const handleSelect = (roleId: string, destination: string) => {
    trackSelfDescribingEvent({
      event: {
        schema: 'iglu:com.leos-newsroom/user_signed_in/jsonschema/1-0-0',
        data: { role: roleId, destination },
      },
    });
    window.location.href = destination;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
      {roles.map((role) => (
        <button
          key={role.id}
          onClick={() => handleSelect(role.id, role.destination)}
          className={`text-left bg-white rounded-xl border-2 border-gray-200 p-6 flex flex-col gap-4 transition-all hover:shadow-lg cursor-pointer ${role.color.card}`}
        >
          {/* Icon */}
          <div
            className={`w-13 h-13 rounded-xl flex items-center justify-center p-3 ${role.color.iconBg} ${role.color.iconText}`}
          >
            {role.icon}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-bold text-gray-900 text-lg">{role.title}</h3>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${role.color.badge}`}>
                {role.defaultPage}
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{role.description}</p>
          </div>

          {/* CTA */}
          <div className={`flex items-center gap-1 text-sm font-semibold ${role.color.cta}`}>
            Continue as {role.title}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      ))}
    </div>
  );
}
