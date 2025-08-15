import React from 'react'
import Logo from './logo'
import Searchbar from './search-bar'

function Header() {
  return (
    <>
      <header className="py-2 lg:py-4 container mx-auto">
        {/* mobile */}
        <div className="flex sm:hidden container flex-col justify-between p-2">
          <div className="flex items-center">
            {/* logo */}
            <Logo />
            {/* sidebar trigger */}
          </div>

          <Searchbar/>
        </div>

        {/* desktop */}
        <div className="hidden sm:flex items-center justify-between">
          
            {/* logo */}
            <Logo />

          <Searchbar/>
        </div>
      </header>
    </>
  )
}

export default Header