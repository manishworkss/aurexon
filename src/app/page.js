import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </main>
  )
}
