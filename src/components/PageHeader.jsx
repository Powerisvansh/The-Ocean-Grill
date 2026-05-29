import { motion } from 'framer-motion'

export default function PageHeader({ title, subtitle }) {
  return (
    <motion.div
      className="pt-[84px] pb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="font-display text-4xl md:text-5xl text-on-surface">{title}</h1>
      {subtitle && (
        <p className="text-sm text-on-surface-variant mt-3 max-w-[500px] mx-auto">{subtitle}</p>
      )}
    </motion.div>
  )
}
