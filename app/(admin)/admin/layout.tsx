import AdminSidebar from '@/components/admin-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

function AdminLayout( {children} : {children: React.ReactNode} ) {
  return (
    <div>
        <SidebarProvider>
            <AdminSidebar/>
            {children}
        </SidebarProvider>
        
    </div>
  )
}

export default AdminLayout