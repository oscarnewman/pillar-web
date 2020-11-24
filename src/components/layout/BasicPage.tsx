import React from 'react'
import Head from '../util/Head'
import Nav from '../ui/Nav'
import Container from '../util/Container'
import Footer from '../ui/Footer'

const BasicPage: React.SFC<{ title?: string; contained?: boolean }> = ({
  title,
  children,
  contained = true,
}) => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex-1">
        <Head title={title} />
        <Nav />
        {contained ? <Container>{children}</Container> : children}
      </div>
      <Footer />
    </div>
  )
}

export default BasicPage
