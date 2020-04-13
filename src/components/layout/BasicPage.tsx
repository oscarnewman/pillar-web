import React from 'react'
import Head from '../util/Head'
import Nav from '../ui/Nav'
import Container from '../util/Container'
import Footer from '../ui/Footer'

const BasicPage: React.SFC<{ title?: string }> = ({ title, children }) => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex-1">
        <Head title={title} />
        <Nav></Nav>
        <Container>{children}</Container>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BasicPage
