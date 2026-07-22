import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </div>
    </main>
  )
}
