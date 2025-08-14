import React from 'react'
import Logo from '@/components/logo'
import SearchBar from './search-bar'

function Header() {
  return (
    <>
      <header className="py-2 lg:py-4 ">
        {/* mobile */}
        <div className='flex lg:hidden container mx-auto flex-col justify-between p-2'>
          <div className='flex items-center'>
            {/* logo */}
            <Logo />
            {/* sidebar trigger */}
          </div>
          <SearchBar />
        </div>

        {/* desktop */}
        <div className='hidden lg:flex container mx-auto flex-col justify-between p-2'>
          <div className='flex items-center'>
            {/* logo */}
            <Logo />
          </div>
          <SearchBar />
        </div>
      </header>
    </>
  )
}

export default Header