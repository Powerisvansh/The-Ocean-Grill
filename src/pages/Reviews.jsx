import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'

const reviews = [
  { stars: '★★★★★', rating: 5, text: 'Delicious Goan food, great seafood, very welcoming staff, and such a relaxing atmosphere. The kingfish recheado is a must-try!', author: 'Akilan Sundaram', tag: 'Local Guide · 37 reviews' },
  { stars: '★★★★★', rating: 5, text: 'Best seafood in Calangute! The prawn curry and rice is exactly what Goan food should taste like. Reasonable prices, great ambience.', author: 'Priya Sharma', tag: 'Verified Diner' },
  { stars: '★★★★★', rating: 5, text: 'One of the best sea food restaurants in Calangute. The fish thali is amazing and the butter garlic prawns are to die for. Highly recommended!', author: 'Jayesh S Vyas', tag: 'Local Guide · 19 reviews' },
  { stars: '★★★★★', rating: 5, text: 'Amazing food, great music, and wonderful hospitality. The tandoori platter is a feast for two. Will visit again!', author: 'Rohan Desai', tag: 'Verified Diner' },
  { stars: '★★★★★', rating: 5, text: 'Excellent Goan food! The pork sorpotel and the fish curry rice are authentic and delicious. The staff is extremely courteous.', author: 'Anjali Mehta', tag: 'Local Guide · 52 reviews' },
  { stars: '★★★★★', rating: 5, text: 'Lovely place right on the main road. Great ambience and service. Try their butter garlic prawns and the chicken cafreal.', author: 'Rahul Mehra', tag: 'Verified Diner' },
  { stars: '★★★★★', rating: 5, text: 'This place is a gem! The Goan Fish Thali is the best I have had in North Goa. The sol kadhi is refreshing. Must visit!', author: 'Neha Gupta', tag: 'Local Guide · 103 reviews' },
  { stars: '★★★★★', rating: 5, text: 'The ambience is beautiful, especially in the evening with the warm lighting. Food is delicious and the staff is very friendly.', author: 'Vikram Singh', tag: 'Verified Diner' },
  { stars: '★★★★★', rating: 5, text: 'Great place for seafood lovers. The prawn balchão and kingfish recheado are fantastic. Reasonably priced for the quality.', author: 'Sneha Rao', tag: 'Local Guide · 28 reviews' },
]

const stagger = (i) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay: i * 0.05 },
})

export default function Reviews() {
  return (
    <>
      <PageHeader
        title="Guest Reviews"
        subtitle="Real words from real people who have sat at our tables."
      />

      <section className="pb-16">
        <div className="container-custom">
          {/* Aggregate */}
          <motion.div
            className="text-center mb-14 p-10 bg-surface rounded-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-display text-6xl text-primary mb-2">4.7</div>
            <p className="text-2xl text-secondary mb-2 tracking-wider">★★★★★</p>
            <p className="text-sm text-on-surface-variant">Based on 1,185+ Google reviews</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                className="p-6 bg-surface border border-border hover:border-[rgba(197,165,114,0.15)] transition-all duration-300"
                {...stagger(i)}
              >
                <p className="text-sm text-secondary mb-2 tracking-wider">{r.stars}</p>
                <blockquote className="text-sm leading-relaxed text-on-surface-variant italic mb-4">
                  "{r.text}"
                </blockquote>
                <div className="border-t border-border pt-3 mt-auto">
                  <p className="text-sm text-on-surface font-medium">{r.author}</p>
                  <p className="text-xs text-on-surface-muted">{r.tag}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://www.google.com/maps/place/The+Ocean+Grill/data=!4m8!3m7!1s0x3bbfbdb7e6e5b6c7:0x7f6c5f8d4a0b2c1d!8m2!3d15.5439!4d73.7538!9m1!1b1!16s%2Fg%2F11hf6b6f7h?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Write a Review on Google
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
