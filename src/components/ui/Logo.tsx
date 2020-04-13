import React from 'react'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href="/">
      <a>
        <img
          src="/LogoBoxBig.png"
          alt="Pillar Logo"
          className="shadow-lg w-24 rounded"
        />
      </a>
    </Link>
  )
}

export default Logo
