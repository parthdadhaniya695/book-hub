import { createRowActions } from "@/components/data-table-actions"
import DataTableColumnHeader from "@/components/data-table-column-header"
import { formatISBN } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"
import { Check, CircleOff } from "lucide-react"

type Photo = {
    photo_id: number,
    url: string
}

export type Book = {
    book_id: number,
    name: string,
    no_of_copies: number,
    isbn: string,
    is_active: boolean | number,
    book_category_links?: { category_id: number }[],
    book_photos?: Photo[],
    publish_year: number,
    author: string
}

export const columns: ColumnDef<Book>[] = [
    {
        accessorKey: "book_photos",
        enableSorting: false,
        header: ({ column }) => <DataTableColumnHeader column={column} title="Image" />
    },
    {
        accessorKey: "name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />
    },
    {
        accessorKey: "isbn",
        enableSorting: false,
        header: ({ column }) => <DataTableColumnHeader column={column} title="ISBN" />,
        cell:({ row }) => formatISBN(row.getValue('isbn'))
    },
    {
        accessorKey: "publish_year",
        enableSorting: false,
        header: ({ column }) => <DataTableColumnHeader column={column} title="Publiush year" />
    },
    {
        accessorKey: "no_of_copies",
        enableSorting: false,
        header: ({ column }) => <DataTableColumnHeader column={column} title="No of copies" />
    },
    {
        accessorKey: "is_active",
        enableSorting: false,
        header: ({ column }) => <DataTableColumnHeader column={column} title="Active" />,
        cell: ({ row }) => {
            row.getValue('is_active') ? <Check size={16} className="text-green-500" />
            : <CircleOff size={16} className="text-red-500" /> 
        }
    },
    createRowActions<Book>()
]