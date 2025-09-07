import React from 'react'
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ColumnDef, Row, Table } from '@tanstack/react-table'

export type GenericColumnDef<T> = ColumnDef<T, unknown>

interface DataTableActionsProps<TData> {
    row: Row<TData>,
    table: Table<TData>,
    edit_label?: string
}
function DataTableActions<TData>({
    row, table, edit_label
}: DataTableActionsProps<TData>) {

    const item = row.original

    return (
        <div className="flex justify-end">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => table.options.meta?.onEdit(item)}
                    >
                        {edit_label ? edit_label : 'Edit'}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={() => table.options.meta?.onDelete(item)}
                    >Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    )
}

type RowActionsProps = {
    edit_label?: string
}

export function createRowActions<T>({ edit_label }: RowActionsProps = {})
    : GenericColumnDef<T> {
    return {
        id: 'actions',
        enableHiding: false,
        cell: ({ row, table }) =>
            <DataTableActions row={row} table={table} edit_label={edit_label} />
    }
} 