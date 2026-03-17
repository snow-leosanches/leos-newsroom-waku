import { Link } from 'waku';

const navLinks = [
  { to: '/feed', label: 'Feed' },
  { to: '/monitoring', label: 'Monitoring' },
  { to: '/directory', label: 'Directory' },
];

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold text-blue-800 tracking-tight">
            Leo's Newsroom
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <Link
          to="/sign-in"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};
