import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

const NavLink: React.SFC<{ href: string }> = ({ href, children }) => (
  <Link href={href}>
    <a>{children}</a>
  </Link>
)

const Nav = () => {
  return (
    <nav>
      <div className="bar h-1 block w-full bg-cover bg-center" />
      <div className="container px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center">
        <Logo />

        <section>
          <Link href="/signin">
            <a className="text-gray-700 text-lg font-medium">
              Dashboard{' '}
              <i className="fas fa-arrow-right ml-1 text-purple-200"></i>
            </a>
          </Link>
        </section>
      </div>

      <style jsx>{`
        .bar {
          background-image: url('/navbg.svg');
        }
      `}</style>
    </nav>
  )
}

export default Nav
