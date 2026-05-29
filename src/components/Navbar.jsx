import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import MobileNav from './MobileNav'

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/our-story', label: 'Story' },
  { to: '/reviews', label: 'Reviews' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { dark, toggle } = useTheme()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0c0b09]/95 backdrop-blur-md shadow-lg'
            : 'bg-[#0c0b09]'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-[68px]">
          <Link to="/" className="font-display text-2xl text-[#f5f0e8] leading-tight tracking-tight">
            The Ocean Grill
            <span className="block text-[10px] font-body text-[rgba(245,240,232,0.55)] tracking-[0.18em] uppercase mt-0.5">
              Calangute, Goa
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-[11px] uppercase tracking-[0.08em] px-3.5 py-[7px] rounded-lg border transition-all duration-300 flex items-center gap-[7px] whitespace-nowrap ${
                  pathname === l.to
                    ? 'text-[#f5f0e8] bg-[rgba(197,165,114,0.08)] border-[rgba(197,165,114,0.25)]'
                    : 'text-[rgba(245,240,232,0.6)] border-[rgba(197,165,114,0.08)] bg-[rgba(245,240,232,0.03)] hover:text-[#f5f0e8] hover:bg-[rgba(197,165,114,0.08)] hover:border-[rgba(197,165,114,0.25)]'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-[11px] uppercase tracking-[0.08em] px-3.5 py-[7px] rounded-lg border transition-all duration-300 flex items-center gap-[7px] whitespace-nowrap ml-2 bg-[#e8d5b7] text-[#0f0f0f] border-[#e8d5b7] hover:bg-[#d4bf9a] hover:border-[#d4bf9a] hover:-translate-y-px hover:shadow-lg"
            >
              Reserve
            </Link>
            <button
              onClick={toggle}
              className="ml-3 p-2 text-[rgba(245,240,232,0.5)] hover:text-[#f5f0e8] transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-1 text-[#f5f0e8]"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9975e] to-transparent" />
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} links={links} />
    </>
  )
}
