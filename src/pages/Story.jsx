import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function Story() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <img
          src="https://ocean-grill-gems.lovable.app/assets/ambience-Dx0Sc9UL.jpg"
          alt="Interior of The Ocean Grill at dusk"
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[rgba(15,15,15,0.2)] to-transparent" />
        <div className="container-custom relative z-[2] pb-12">
          <motion.span className="text-[11px] uppercase tracking-[0.25em] text-on-surface-variant mb-3 block" {...fadeIn}>
            Our Story
          </motion.span>
          <motion.h1 className="font-display text-4xl md:text-5xl text-[#f5f0e8]" {...fadeIn}>
            Roots in Naika Wado
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <motion.p className="text-lg text-on-surface leading-relaxed mb-6" {...fadeIn}>
            The Ocean Grill began as a small family operation tucked inside Falcon Resort on Naika Wado — the kind of place locals quietly told their friends about and tourists stumbled into once and came back to every year.
          </motion.p>

          <motion.p className="text-base text-on-surface-variant leading-relaxed mb-6" {...fadeIn}>
            What started with a single charcoal grill and a handful of wooden tables soon became a Calangute institution. The secret? Everything is made from scratch. The masala is ground by hand each morning. The fish comes straight from the morning auction at the local market. And the fire — that charcoal fire — is never rushed.
          </motion.p>

          <motion.p className="text-base text-on-surface-variant leading-relaxed mb-6" {...fadeIn}>
            We're known for our Goan Fish Thali, our butter garlic prawns, and a King's Peg of whisky as the sun goes down. But what people remember most is the feeling — the warmth of the Edison bulbs, the salt air drifting in from the coast, and the sound of laughter mixing with sizzling grills.
          </motion.p>

          <motion.figure className="my-10" {...fadeIn}>
            <img
              src="https://ocean-grill-gems.lovable.app/assets/kingfish-D4Oe-Iqy.jpg"
              alt="Recheado-stuffed kingfish"
              className="w-full h-[400px] object-cover grayscale-[20%]"
            />
            <p className="text-xs text-on-surface-muted mt-2 text-center">Photo by guests · Falcon Resort, Naika Wado</p>
          </motion.figure>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10 p-8 bg-surface" {...fadeIn}>
            <li className="text-sm text-on-surface-variant list-none py-2"><span className="text-secondary mr-3">✓</span>Family-run since 2018</li>
            <li className="text-sm text-on-surface-variant list-none py-2"><span className="text-secondary mr-3">✓</span>Fresh catch from local markets</li>
            <li className="text-sm text-on-surface-variant list-none py-2"><span className="text-secondary mr-3">✓</span>Hand-ground masala daily</li>
            <li className="text-sm text-on-surface-variant list-none py-2"><span className="text-secondary mr-3">✓</span>Charcoal-fired cooking</li>
            <li className="text-sm text-on-surface-variant list-none py-2"><span className="text-secondary mr-3">✓</span>Open until 1 AM every day</li>
            <li className="text-sm text-on-surface-variant list-none py-2"><span className="text-secondary mr-3">✓</span>4.7 ★ from 1,185+ reviews</li>
          </motion.div>

          <motion.figure className="my-10" {...fadeIn}>
            <img
              src="https://ocean-grill-gems.lovable.app/assets/interior-rice-OmCC_Ehf.jpg"
              alt="Inside The Ocean Grill, Calangute"
              className="w-full h-[400px] object-cover grayscale-[20%]"
            />
            <p className="text-xs text-on-surface-muted mt-2 text-center">The dining room at dusk</p>
          </motion.figure>

          <motion.p className="text-base text-on-surface-variant leading-relaxed" {...fadeIn}>
            Today, The Ocean Grill welcomes everyone — from backpackers discovering Goan seafood for the first time to families who've been visiting for years. Pull up a chair, order a pint, and stay a while. The fire will be on until you leave.
          </motion.p>
        </div>
      </section>
    </>
  )
}
