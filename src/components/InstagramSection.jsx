import { motion } from 'framer-motion'
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

const images = [
  'https://ocean-grill-gems.lovable.app/gallery/assets/grilled-fish-fries-CvzCPtk5.jpg',
  'https://ocean-grill-gems.lovable.app/gallery/assets/tandoori-platter-C8GnhncV.jpg',
  'https://ocean-grill-gems.lovable.app/gallery/assets/pina-colada-BMZEx5_9.jpg',
  'https://ocean-grill-gems.lovable.app/gallery/assets/chilli-chicken-bowl-DzVPWs51.jpg',
]

export default function InstagramSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Follow the Feast</span>
          <h2 className="section-title">@theoceangrill</h2>
          <p className="section-text max-w-md mx-auto">
            Tag us in your photos for a chance to be featured.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="aspect-square overflow-hidden relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <InstagramIcon />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
            style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
          >
            <InstagramIcon />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
