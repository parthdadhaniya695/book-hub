import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Input } from './ui/input'
import { Button } from './ui/button'

function Searchbar() {

  async function doSearch(formData: FormData) {
    'use server'

    const search_by = formData.get('search_by')
    const search = formData.get('search')

    console.log({ search_by, search })
  }

  return (
    <form action={doSearch}>
      <div className='flex flex-col w-full space-y-2 sm:space-y-0
      sm:flex-row lg:max-w-lg sm:items-center sm:space-x-2
      '>
        <p className='text-slate-500 text-sm min-w-[70px]'>Search by</p>
        <Select name='search_by'>
          <SelectTrigger className='w-full lg:w-[480px]'>
            <SelectValue placeholder='Keyword' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='title'>Title</SelectItem>
            <SelectItem value='category'>Category</SelectItem>
          </SelectContent>
        </Select>
        <Input type='search' placeholder='Search...' name='search' />
        <Button type='submit'>Search</Button>
      </div>
    </form>
  )
}

export default Searchbar