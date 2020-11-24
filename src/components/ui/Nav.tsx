import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const NavLink: React.SFC<{ href: string }> = ({ href, children }) => (
  <Link href={href}>
    <a>{children}</a>
  </Link>
)

const Nav = () => {
  return (
    <nav>
      <div className="bar dark:bg-fg-accent h-1 block w-full bg-cover bg-center" />
      <div className="container px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center">
        <Logo />

        <section>
          <Link href="/signin">
            <a className="text-fg-secondary text-lg font-medium">
              Dashboard{' '}
              <i className="fas fa-arrow-right ml-1 text-purple-200" />
            </a>
          </Link>
        </section>
      </div>
    </nav>
  )
}

export default Nav
