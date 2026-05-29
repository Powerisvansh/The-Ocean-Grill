import { Link, useLocation } from 'react-router-dom'
import { X, Home, UtensilsCrossed, Image, BookOpen, Star, Calendar, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const icons = {
  Home: <Home size={20} />,
  Menu: <UtensilsCrossed size={20} />,
  Gallery: <Image size={20} />,
  Story: <BookOpen size={20} />,
  Reviews: <Star size={20} />,
}

export default function MobileNav({ open, onClose, links }) {
  const { pathname } = useLocation()

  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 bg-[rgba(5,5,5,0.97)] backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-6 p-1 text-[#f5f0e8]"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {links.map((l, i) => (
            <motion.div
              key={l.to}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={l.to}
                onClick={onClose}
                className={`font-display text-[26px] flex items-center gap-3.5 px-6 py-2.5 rounded-xl border transition-all duration-300 ${
                  pathname === l.to
                    ? 'text-[#f5f0e8] bg-[rgba(197,165,114,0.08)] border-[rgba(197,165,114,0.2)]'
                    : 'text-[rgba(245,240,232,0.6)] border-[rgba(197,165,114,0.06)] bg-[rgba(245,240,232,0.02)] hover:text-[#f5f0e8] hover:bg-[rgba(197,165,114,0.08)] hover:border-[rgba(197,165,114,0.2)]'
                }`}
              >
                <span className="opacity-50">{icons[l.label]}</span>
                {l.label}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/contact"
              onClick={onClose}
              className="flex items-center gap-3.5 px-9 py-3.5 rounded-xl bg-[#e8d5b7] text-[#0f0f0f] text-[13px] uppercase tracking-[0.15em] font-semibold"
            >
              <Calendar size={18} />
              Reserve
            </Link>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
