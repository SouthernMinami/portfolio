import Link from 'next/link'
import styles from './Header.module.css'

type Props = {
  title: string
}

export const Header = ({ title }: Props) => {
  return (
    <header className="flex bg-black w-full h-24">
      <nav className={styles.nav}>
        <ul className="navbar flex items-center w-full h-full space-x-4">
          <li className="nav-item text-4xl font-bold text-white pb-2 pl-3 pr-2">
            <Link className="nav-link" href="/">
              {title}
            </Link>
          </li>
          <li className="flex items-center justify-between text-slate-400">
            <Link href="/resume">My Resume</Link>
          </li>
          <li className="flex items-center justify-between text-slate-400">
            <Link href="/works">Works</Link>
          </li>
          <li className="flex items-center justify-between text-slate-400">
            <Link href="/skills">Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
