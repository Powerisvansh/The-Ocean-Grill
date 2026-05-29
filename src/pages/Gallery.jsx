import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'

const images = [
  'https://ocean-grill-gems.lovable.app/gallery/assets/grilled-fish-fries-CvzCPtk5.jpg',
  'https://ocean-grill-gems.lovable.app/gallery/assets/tandoori-platter-C8GnhncV.jpg',
  'https://ocean-grill-gems.lovable.app/gallery/assets/tandoori-chicken-platter-BPW_5Fni.jpg',
  'https://ocean-grill-gems.lovable.app/gallery/assets/chilli-chicken-bowl-DzVPWs51.jpg',
  'https://ocean-grill-gems.lovable.app/gallery/assets/fish-fry-rava-N74orFjT.jpg',
  'https://ocean-grill-gems.lovable.app/gallery/assets/paneer-butter-masala-CsC-6Pl2.jpg',
  'https://ocean-grill-gems.lovable.app/gallery/assets/naan-chutney-CAW4BKOM.jpg',
  'https://ocean-grill-gems.lovable.app/gallery/assets/veg-fried-rice-BAShfVO7.jpg',
  'https://ocean-grill-gems.lovable.app/gallery/assets/pina-colada-BMZEx5_9.jpg',
]

const stagger = (i) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.06 },
})

export default function Gallery() {
  return (
    <>
      <PageHeader title="Gallery" subtitle="A glimpse into the flavours, faces, and sunsets that make The Ocean Grill." />

      <section className="pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, i) => (
              <motion.div
                key={i}
                className="aspect-square overflow-hidden relative group"
                {...stagger(i)}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
