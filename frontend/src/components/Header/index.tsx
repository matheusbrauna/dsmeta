import { Logo } from './Logo'
import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.dsmetaLogoContainer}>
        <Logo />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href='https://www.instagram.com/devsuperior.ig'>@devsuperior.ig</a>
        </p>
      </div>
    </header>
  )
}
