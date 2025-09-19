'use client'

import React from 'react'
import { Book, columns } from './columns'
import { DataTable } from '@/components/data-table'
import { deleteBook } from '@/actions/actions'

type props = {
  data: Book[],
  total: number
}

function CatalogTable({ data }: { data: any }) {

  const path = 

  const handleRowDelete = (item: Book) => {
    await deleteBook(item.book_id, )
  }

  const handleRowEdit = (item: Book) => {
    
  }

  return (
    <>
      <DataTable
        columns={columns}
        data={data.data}
        total={data.total}
        filter_column='name'
        onRowDelete={handleRowDelete}
        onRowEdit={handleRowEdit}
      />
    </>
  )
}

export default CatalogTable