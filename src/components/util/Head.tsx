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
    </NextHead>
  )
}

export default Head
