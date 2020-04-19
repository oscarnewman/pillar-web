import React from 'react'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href="/">
      <a>
        <img
          src="/Logo.png"
          width="96"
          height="54"
          alt="Pillar Logo"
          className="shadow-lg w-24 rounded"
        />
      </a>
    </Link>
  )
}

export default Logo
