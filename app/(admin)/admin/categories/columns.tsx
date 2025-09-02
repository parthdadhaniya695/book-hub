import { ColumnDef } from "@tanstack/react-table";


export type Category = {
    category_id: number,
    category_name: string
}

export const columns: ColumnDef<Category>[] = 