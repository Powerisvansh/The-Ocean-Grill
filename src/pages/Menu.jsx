import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'

const sections = [
  {
    title: 'Goan Specialities',
    num: '01',
    img: 'https://ocean-grill-gems.lovable.app/assets/thali-Bc8xdblF.jpg',
    items: [
      { name: 'Goan Fish Thali', price: '₹450', desc: 'Kingfish curry, prawn curry, kismur, sol kadhi, rice' },
      { name: 'Prawn Balchão', price: '₹380', desc: 'Spicy pickled prawn masala, Goan staple' },
      { name: 'Chicken Cafreal', price: '₹320', desc: 'Green masala marinated, pan-fried chicken' },
      { name: 'Pork Sorpotel', price: '₹350', desc: 'Traditional Goan pork — tangy, spicy, slow-cooked' },
    ],
  },
  {
    title: 'From the Sea',
    num: '02',
    img: 'https://ocean-grill-gems.lovable.app/assets/kingfish-D4Oe-Iqy.jpg',
    items: [
      { name: 'Kingfish Recheado', price: '₹420', desc: 'Stuffed with spicy masala, pan-fried crisp' },
      { name: 'Butter Garlic Prawns', price: '₹480', desc: 'Tiger prawns, garlic butter, fresh coriander' },
      { name: 'Tandoori Pomfret', price: '₹520', desc: 'Whole pomfret marinated in yogurt & spice' },
      { name: 'Calamari Fry', price: '₹280', desc: 'Crispy squid rings with Goan spice dust' },
    ],
  },
  {
    title: 'From the Tandoor',
    num: '03',
    img: 'https://ocean-grill-gems.lovable.app/assets/tandoori-DYSDcWfu.jpg',
    items: [
      { name: 'Tandoori Chicken (Half)', price: '₹320', desc: 'Classic yogurt-marinated, charred in clay oven' },
      { name: 'Chicken Tikka', price: '₹340', desc: 'Boneless chunks, spicy & smoky' },
      { name: 'Seekh Kebab', price: '₹360', desc: 'Minced lamb, hand-spiced on the skewer' },
      { name: 'Paneer Tikka', price: '₹280', desc: 'Cottage cheese, bell pepper, onion — tandoor-fired' },
    ],
  },
  {
    title: 'Indo-Chinese',
    num: '04',
    img: 'https://ocean-grill-gems.lovable.app/assets/chilli-chicken-DQsnMwya.jpg',
    items: [
      { name: 'Chilli Chicken', price: '₹310', desc: 'Soy & chili glaze, bell peppers, spring onion' },
      { name: 'Gobi Manchurian', price: '₹250', desc: 'Cauliflower fritters in spicy Manchurian gravy' },
      { name: 'Veg Fried Rice', price: '₹220', desc: 'Wok-tossed veggies, fragrant jasmine rice' },
      { name: 'Fish in Hot Garlic', price: '₹380', desc: 'Crispy fish fillet, hot garlic sauce' },
    ],
  },
  {
    title: 'The Bar',
    num: '05',
    img: 'https://ocean-grill-gems.lovable.app/assets/drink-BWLaLNTX.jpg',
    items: [
      { name: "King's Peg (Whisky)", price: '₹280', desc: 'Your choice of Indian or imported single malt' },
      { name: 'Coconut Pina Colada', price: '₹350', desc: 'House special — creamy, tropical, rum-based' },
      { name: 'Goan Feni (Pint)', price: '₹180', desc: 'Raw, local, unforgettable' },
      { name: 'Kingfisher Pint', price: '₹220', desc: 'Ice-cold, the only way' },
    ],
  },
]

const stagger = (i) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay: i * 0.05 },
})

export default function Menu() {
  return (
    <>
      <PageHeader title="Our Menu" subtitle="Coastal classics, tandoor fire, and cold drinks — every plate tells a story." />

      <div className="pb-12">
        {sections.map((sec, idx) => (
          <motion.div
            key={idx}
            className="py-12 border-b border-border last:border-b-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="container-custom">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8">
                <div className="md:w-1/3">
                  <span className="text-xs text-on-surface-muted font-body block mb-1.5 tracking-[0.1em]">{sec.num}</span>
                  <h2 className="font-display text-[28px] mb-8 md:mb-0">{sec.title}</h2>
                </div>
                <div className="md:w-2/3">
                  <img
                    src={sec.img}
                    alt={sec.title}
                    className="w-full h-48 md:h-56 object-cover grayscale-[20%]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {sec.items.map((item, i) => (
                  <motion.div
                    key={i}
                    className="p-5 bg-surface border border-border hover:border-[rgba(197,165,114,0.2)] transition-all duration-300 hover:-translate-y-0.5"
                    {...stagger(i)}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-display text-lg">{item.name}</h3>
                      <span className="font-display text-secondary text-[17px] ml-4 whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}
