import { Link } from 'react-router-dom'
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-surface-low border-t border-border py-16 mt-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link to="/" className="font-display text-[22px] text-primary mb-5 block">
              The Ocean Grill
            </Link>
            <p className="text-sm text-on-surface-variant max-w-[320px] leading-relaxed">
              Falcon Resort, Naika Wado, Calangute, Goa 403516
            </p>
            <a href="tel:09356013294" className="text-sm text-primary mt-3 block">
              093560 13294
            </a>
            <p className="text-xs text-on-surface-muted mt-1">Daily: 11:30 AM — 01:00 AM</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-4">Navigate</h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/menu', label: 'Menu' },
                  { to: '/gallery', label: 'Gallery' },
                  { to: '/our-story', label: 'Our Story' },
                  { to: '/reviews', label: 'Reviews' },
                  { to: '/contact', label: 'Reservations' },
                ].map(l => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-4">Price Range</h4>
              <p className="font-display text-xl text-primary mb-2">₹200 — ₹600</p>
              <p className="text-xs text-on-surface-variant">per person</p>
              <h4 className="text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mt-5 mb-4">Follow Us</h4>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                <InstagramIcon />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(232,213,183,0.05)] pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p className="text-[11px] text-on-surface-variant uppercase tracking-[0.1em]">
            &copy; 2026 The Ocean Grill &middot; Calangute
          </p>
          <p className="text-[11px] text-on-surface-variant uppercase tracking-[0.1em]">
            Dine-in &middot; Drive-through &middot; No-contact delivery
          </p>
        </div>
      </div>
    </footer>
  )
}
