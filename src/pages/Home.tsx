import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import TechStack from '../components/sections/TechStack'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import Certifications from '../components/sections/Certifications'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </motion.main>
  )
}
