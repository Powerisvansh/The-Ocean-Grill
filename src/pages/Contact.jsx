import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Mail, Calendar } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

const stagger = (i) => ({
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay: i * 0.08 },
})

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[300px] flex items-end overflow-hidden">
        <img
          src="https://ocean-grill-gems.lovable.app/assets/ambience-Dx0Sc9UL.jpg"
          alt="The Ocean Grill Calangute"
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[rgba(15,15,15,0.3)] to-transparent" />
        <div className="container-custom relative z-[2] pb-12">
          <motion.span className="text-[11px] uppercase tracking-[0.25em] text-on-surface-variant mb-3 block" {...fadeIn}>
            Get in Touch
          </motion.span>
          <motion.h1 className="font-display text-4xl md:text-5xl text-[#f5f0e8]" {...fadeIn}>
            Find Us at the Coast
          </motion.h1>
        </div>
      </section>

      {/* Map */}
      <section className="relative h-[400px] md:h-[500px]">
        <iframe
          title="The Ocean Grill Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.1234!2d73.7538!3d15.5439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbdb7e6e5b6c7%3A0x7f6c5f8d4a0b2c1d!2sThe%20Ocean%20Grill!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="100%"
          style={{ filter: 'grayscale(1) invert(0.9)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-surface-low">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: MapPin, title: 'Address', lines: ['Falcon Resort, Naika Wado', 'Calangute, Goa 403516', 'India'] },
              { icon: Phone, title: 'Phone', lines: ['+91 93560 13294'] },
              { icon: Clock, title: 'Hours', lines: ['Daily · 11:00 AM – 1:00 AM'] },
              { icon: Mail, title: 'Email', lines: ['hello@theoceangrill.com'] },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="p-6 bg-surface border border-border text-center"
                {...stagger(i)}
              >
                <card.icon className="w-5 h-5 text-secondary mx-auto mb-3" />
                <h3 className="font-display text-sm uppercase tracking-widest text-on-surface mb-3">{card.title}</h3>
                {card.lines.map((line, j) => (
                  <p key={j} className="text-sm text-on-surface-variant">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16">
        <div className="container-custom max-w-2xl">
          <motion.div className="text-center mb-10" {...fadeIn}>
            <span className="section-label">Reservations</span>
            <h2 className="section-title">Book a Table</h2>
            <p className="section-text">Call <a href="tel:+919356013294" className="text-secondary underline">+91 93560 13294</a> or fill in the form below and we'll get back to you.</p>
          </motion.div>

          <motion.form
            className="space-y-5"
            {...fadeIn}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="text" placeholder="Your Name" className="input-field" required />
              <input type="tel" placeholder="Phone Number" className="input-field" required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="date" className="input-field" required />
              <input type="time" className="input-field" required />
            </div>
            <input type="number" placeholder="Number of Guests" min="1" max="20" className="input-field" required />
            <textarea placeholder="Special requests (dietary, occasion, seating preference)" rows="4" className="input-field" />
            <button type="submit" className="btn-primary w-full sm:w-auto">Send Reservation Request</button>
            <p className="text-xs text-on-surface-muted mt-3">We'll confirm your booking via phone or WhatsApp within a few hours.</p>
          </motion.form>
        </div>
      </section>
    </>
  )
}
