import { Header } from '../components/Header'
import { SalesCard } from '../components/SalesCard'
import styles from './styles.module.css'

export function Layout() {
  return (
    <div>
      <Header />
      <main>
        <section className={styles.sales}>
          <div className={styles.dsmetaContainer}>
            <SalesCard />
          </div>
        </section>
      </main>
    </div>
  )
}
