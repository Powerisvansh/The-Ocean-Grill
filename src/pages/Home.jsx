import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import InstagramSection from '../components/InstagramSection'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const staggered = (i) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.1 },
})

const menuItems = [
  {
    img: 'https://ocean-grill-gems.lovable.app/assets/thali-Bc8xdblF.jpg',
    title: 'Goan Fish Thali',
    price: '₹450',
    desc: 'The local standard. Kingfish, prawn curry, kismur, sol kadhi and red rice.',
  },
  {
    img: 'https://ocean-grill-gems.lovable.app/assets/prawns-dish-o_wbNJUi.jpg',
    title: 'Butter Garlic Prawns',
    price: '₹480',
    desc: 'Tiger prawns tossed in garlic, butter and a hit of fresh coriander.',
  },
  {
    img: 'https://ocean-grill-gems.lovable.app/assets/drink-BWLaLNTX.jpg',
    title: 'Beachside Cooler',
    price: '₹220',
    desc: 'House cold coffee shake — or swap for a coconut Pina Colada from the bar.',
  },
]

const reviews = [
  {
    stars: '★★★★★',
    text: 'Delicious Goan food, great seafood, very welcoming staff and such a relaxing atmosphere.',
    author: 'Akilan Sundaram',
    tag: 'Local Guide',
  },
  {
    stars: '★★★★★',
    text: 'One of the best sea food restaurants in Calangute. The kingfish recheado and prawn curry are a must try.',
    author: 'Jayesh S Vyas',
    tag: 'Local Guide',
  },
  {
    stars: '★★★★★',
    text: 'Lovely place right on the main road. Great ambience and service. Try their butter garlic prawns!',
    author: 'Rahul Mehta',
    tag: 'Verified Diner',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-68px)] flex flex-col justify-end overflow-hidden bg-bg">
        <div className="absolute inset-0 z-0">
          <img
            src="https://ocean-grill-gems.lovable.app/assets/ambience-Dx0Sc9UL.jpg"
            alt="The Ocean Grill interior at dusk"
            className="w-full h-full object-cover grayscale-[10%] contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,transparent_40%,rgba(15,15,15,0.5)_100%)] z-[1]" />
        </div>

        <div className="container-custom relative z-[2] pb-[120px] pt-16">
          <motion.p
            className="text-xs uppercase tracking-[0.25em] text-on-surface-variant mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Falcon Resort — Naika Wado, Calangute
          </motion.p>
          <motion.h1
            className="font-display text-5xl md:text-7xl leading-[1.1] text-[#f5f0e8] mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Fresh catch,<br />charcoal smoke &amp; cold beer.
          </motion.h1>
          <motion.div
            className="w-16 h-px bg-[rgba(245,240,232,0.2)] mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.p
            className="text-base leading-relaxed text-[rgba(245,240,232,0.7)] max-w-[440px] mb-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A sun-drenched sanctuary in Calangute. We serve the soul of Goan coastal cooking with the salt of the Arabian Sea.
          </motion.p>

          <motion.div
            className="flex gap-8 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="font-display text-[28px] text-primary">1:00</div>
              <div className="text-[11px] uppercase tracking-[0.1em] text-on-surface-variant mt-1">Open Until (AM)</div>
            </div>
            <div className="text-center">
              <div className="font-display text-[28px] text-primary">4.7★</div>
              <div className="text-[11px] uppercase tracking-[0.1em] text-on-surface-variant mt-1">Rating (1,185)</div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact" className="btn-primary">Reserve a Table</Link>
            <Link to="/menu" className="btn-outline">View Menu</Link>
            <a
              href="https://wa.me/919356013294?text=Hi%2C%20I%27d%20like%20to%20order%20online"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ borderColor: 'rgba(37,211,102,0.4)', color: '#25D366' }}
            >
              Order Online
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-15 left-1/2 -translate-x-1/2 z-[2] hidden md:flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[rgba(245,240,232,0.3)] animate-bounce-custom">
          EXPLORE OUR LEGACY
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-custom grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-10 md:gap-16">
          <motion.div className="order-2 md:order-1 md:sticky md:top-[120px] md:h-fit" {...fadeIn}>
            <span className="section-label">Our Origins</span>
            <h2 className="section-title">Roots in Naika Wado</h2>
            <p className="section-text mb-5">
              The Ocean Grill is a Calangute neighbourhood institution. Spices ground by hand, morning's catch from the local market, and a fire that stays hot until the last guest leaves at 1 AM.
            </p>
            <div className="border-l-2 border-[rgba(201,151,94,0.3)] pl-5 italic text-on-surface-variant text-sm my-6">
              "Delicious Goan food, great seafood, very welcoming staff and such a relaxing atmosphere."
              <span className="block not-italic text-xs text-on-surface-muted mt-2">— Akilan S. · Local Guide</span>
            </div>
            <div className="flex flex-col gap-2 mt-6 text-sm text-on-surface-variant">
              <span>✓ Table Reservations</span>
              <span>✓ No-Contact Delivery</span>
              <span>✓ Dine-in &amp; Drive-through</span>
            </div>
            <Link to="/our-story" className="btn-outline inline-block mt-6" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
              Learn Our Story
            </Link>
          </motion.div>
          <motion.div className="order-1 md:order-2" {...fadeIn}>
            <div className="aspect-[4/5] overflow-hidden bg-surface-container">
              <img
                src="https://ocean-grill-gems.lovable.app/assets/ambience-Dx0Sc9UL.jpg"
                alt="Interior of The Ocean Grill"
                className="w-full h-full object-cover grayscale-[30%] transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="flex items-center justify-center gap-4 py-6 opacity-30">
        <div className="h-px w-20 bg-primary" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        <div className="h-px w-20 bg-primary" />
      </div>

      {/* Featured Menu */}
      <section className="section bg-surface-low">
        <div className="container-custom">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <h2 className="section-title">From the Grill</h2>
            <p className="section-text max-w-[500px] mx-auto">Selected highlights from our celebrated menu.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {menuItems.map((item, i) => (
              <motion.div
                key={i}
                className="bg-surface p-5 flex flex-col"
                {...staggered(i)}
                style={i === 1 ? { marginTop: 0 } : {}}
              >
                <div className="aspect-square bg-surface-container overflow-hidden mb-6">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="px-2 pb-4 flex-1 flex flex-col">
                  <h3 className="font-display text-[22px] mb-2">{item.title}</h3>
                  <p className="font-display text-lg text-secondary mb-2">{item.price}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed flex-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-12" {...fadeIn}>
            <Link to="/menu" className="btn-primary" style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)' }}>
              View Full Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container-custom">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <span className="section-label">Guest Reviews</span>
            <h2 className="section-title">What They Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                className="bg-surface p-8 border border-border"
                {...staggered(i)}
              >
                <p className="text-secondary text-sm mb-3">{r.stars}</p>
                <blockquote className="text-sm leading-relaxed text-on-surface-variant italic mb-4">
                  "{r.text}"
                </blockquote>
                <p className="text-xs text-on-surface-muted">
                  <strong className="text-on-surface font-medium">{r.author}</strong> · {r.tag}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center py-10" {...fadeIn}>
            <div className="font-display text-[56px] text-primary">4.7★</div>
            <p className="text-secondary text-lg mt-2">★★★★★</p>
            <p className="text-xs text-on-surface-variant mt-2">Based on 1,185+ Google reviews</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-8 text-center relative bg-[#1a1a1a] text-white">
        <motion.div {...fadeIn}>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[rgba(201,151,94,0.7)] mb-4 block">Make It Unforgettable</span>
          <h2 className="font-display text-[32px] md:text-5xl leading-[1.2] mb-8">
            Ready for the best<br />meal in Calangute?
          </h2>
          <Link to="/contact" className="btn-primary">Reserve Your Table</Link>
          <p className="text-xs text-[rgba(255,255,255,0.4)] mt-6">For parties larger than 8, please call ahead.</p>
        </motion.div>
      </section>

      {/* Instagram */}
      <InstagramSection />
    </>
  )
}
