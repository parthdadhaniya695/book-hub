import React from 'react'
import { Sidebar, SidebarHeader } from './ui/sidebar'

function AdminSidebar() {
  return (
    
    <Sidebar variant='floating' className='p-0'>
        <SidebarHeader>
            <p>Admin</p>
        </SidebarHeader>
    </Sidebar>
  )
}

export default AdminSidebar