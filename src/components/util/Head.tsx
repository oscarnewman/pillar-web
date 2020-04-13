import React from 'react'
import NextHead from 'next/head'

const Head = ({
  title,
  description,
}: {
  title?: string
  description?: string
}) => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title || 'Pillar'}</title>

      <meta
        name="description"
        content={description || 'Pillar is a new way to give.'}
      />

      <link rel="stylesheet" href="https://use.typekit.net/lmf4atf.css" />

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossOrigin="anonymous"
      />
    </NextHead>
  )
}

export default Head
