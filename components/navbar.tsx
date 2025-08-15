import Link from 'next/link'
import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'

function Navbar() {
  return (
    <nav className='bg-black text-white w-full hidden sm:block'>
      <div className='container mx-auto flex justify-between items-center py-4'>
        <div className='flex items-center space-x-8'>
          <Link href='/' className='hover:text-gray-400'>
            Catalog
          </Link>
          <Link href='/' className='hover:text-gray-400'>
            Locations
          </Link>
          <Link href='/' className='hover:text-gray-400'>
            Activities
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Library resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='flex flex-col p-4 md:w-[480px] lg:w-[500px]'>
                    <li>
                      <Link href='library-card'
                       className='block space-y-1 p-3 rounded hover:bg-accent'
                      >
                        <div>Library Card</div>
                        <p></p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  )
}

export default Navbar