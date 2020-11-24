import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Container from '../util/Container'

interface LinkProps {
  href?: string
}
const FooterLink: React.SFC<LinkProps> = ({ children, href = '/' }) => {
  const localLink = href.startsWith('mailto:')
  const ContainerLink = localLink ? 'div' : Link
  return (
    <ContainerLink href={localLink ? null : href}>
      <a
        className="no-underline text-fg-primary font-medium text-sm ml-4"
        href={href}
      >
        {children}
      </a>
    </ContainerLink>
  )
}
const Footer = () => (
  <Container>
    <div className="container px-4 sm:px-6 lg:px-8">
      <div className="mx-auto border-t pt-8 pb-16 light:border-gray-50 dark:border-gray-800 flex items-center justify-between">
        <div className="max-w-xs">
          <div className="w-20 mb-6">
            <Logo />
          </div>
          <p className="text-fg-secondary block max-w-sm">
            The new way to make a difference in the causes that matter most.
          </p>
        </div>

        <nav>
          <FooterLink href="/legal/terms">Terms</FooterLink>
          {/* <FooterLink href="/legal/privacy">Privacy</FooterLink> */}
          {/* <FooterLink href="mailto:help@pillar.gives">Support</FooterLink> */}
        </nav>
      </div>
    </div>
  </Container>
)

export default Footer
