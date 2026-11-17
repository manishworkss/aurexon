import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.badge}>AUREXON TECHNOLOGIES</div>
        <h1 className={styles.title}>Next-Gen Systems &amp; Digital Lab</h1>
        <p className={styles.description}>
          Content safely archived. Ready to build the brand new design experience.
        </p>
      </div>
    </main>
  )
}
