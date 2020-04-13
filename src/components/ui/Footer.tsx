import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

interface LinkProps {
  href?: string
}
const FooterLink: React.SFC<LinkProps> = ({ children, href = '/' }) => (
  <Link href={href}>
    <a className="no-underline text-gray-800 font-medium text-sm ml-4">
      {children}
    </a>
  </Link>
)

const Footer = () => (
  <div className="bg-white w-full">
    <div className="container px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto border-t pt-8 pb-16 border-gray-50 text-gray-600 flex items-center justify-between">
        <div className="max-w-xs">
          <div className="w-20 mb-6">
            <Logo />
          </div>
          <p className="text-gray-500 block max-w-sm">
            The new way to make a difference in the causes that matter most.
          </p>
        </div>

        <nav>
          {/* <FooterLink>About</FooterLink> */}
          <FooterLink href="/legal/terms">Terms</FooterLink>
          <FooterLink href="/legal/privacy">Privacy</FooterLink>
          <FooterLink href="mailto:help@pillar.gives">Support</FooterLink>
        </nav>
      </div>
    </div>
  </div>
)

export default Footer
