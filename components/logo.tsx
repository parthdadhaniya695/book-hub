import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href="/">
        <Image className='hidden lg:flex' src="/logo.png" alt="Book Hub Logo" width={160} height={120} />
        <Image className='flex lg:hidden' src="/logo.png" alt="Book Hub Logo" width={120} height={80} />
    </Link>
  )
}

export default Logo