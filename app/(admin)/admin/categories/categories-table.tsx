'use client'

import { DataTable } from '@/components/data-table'
import React from 'react'
import { Category, columns } from './columns'
import ConfirmationDialog from '@/components/confirmation-dialog'

type props = {
  data: {
    category_id: number,
    category_name: string,
  }[],
  total: number
}
function CategoriesTable({ data }: { data: props }) {

  const handleRowDelete = (item: Category) => {
    console.log("delete", item)
  }

  const handleRowEdit = (item: Category) => {
    console.log("edit", item)
  }
  return (
    <>
      <DataTable
        data={data.data}
        columns={columns}
        total={data.total}
        filter_column='category_name'
        onRowDelete={handleRowDelete}
        onRowEdit={handleRowEdit}
      />

      <ConfirmationDialog />
    </>
  )
}

export default CategoriesTable