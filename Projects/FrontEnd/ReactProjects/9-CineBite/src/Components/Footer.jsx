import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { to: "/", name: "Now Playing" },
    { to: "/movie/popular", name: "Popular" },
    { to: "/movie/top", name: "Top Rated" },
    { to: "/movie/upcoming", name: "Upcoming" },
  ];

  return (
    <footer className="mt-12 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
        <div className="space-y-4">
          <Link to="/" className="inline-flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500 text-lg font-bold text-white shadow-lg shadow-red-500/20">
              C
            </div>
            <div>
              <p className="text-xl font-semibold tracking-tight text-white">
                CineBite
              </p>
              <p className="text-sm text-slate-400">
                Discover trending movies with a clean browsing experience.
              </p>
            </div>
          </Link>

          <p className="max-w-xl text-sm leading-6 text-slate-400">
            Browse now playing, popular, top-rated, and upcoming titles in one
            place. Built for a simple and smooth movie discovery experience
            across desktop and mobile.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Explore
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>Copyright 2026 CineBite. All rights reserved.</p>
          <p>Powered by TMDB movie data.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
