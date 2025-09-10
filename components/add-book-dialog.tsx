import { Book } from '@/app/(admin)/admin/(cataloge)/columns'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'
import z from 'zod'
import { usePathname } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

type props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    book?: Book
}

const formSchema = z.object({
    id: z.number().default(-1),
    name: z.string().min(1),
    isbn: z.string().min(10).max(13),
    author: z.string(),
    publish_year: z.coerce
        .number({ invalid_type_error: "must be a number" })
        .positive({ message: 'Value must be positive' })
        .finite({ message: "Must be a valid number" }),
    no_of_copies: z.coerce
        .number({ invalid_type_error: "must be a number" })
        .positive({ message: 'Value must be positive' })
        .finite({ message: "Must be a valid number" }),
    category: z.array(z.number()).min(1, {
        message: 'A book must have a category'
    }),
    photos: z.array(z.string())
})

function AddBookDialog({ open, setOpen, book }: props) {
    const [categories, setCategories] = React.
    useState<{category_id: number, name: string}[]>([])
    const [processing, setProcessing] = React.useState(false)
    const path = usePathname()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            isbn: '',
            author: '',
            no_of_copies: 1,
            category: [],
            photos: [],
            publish_year: new Date().getFullYear()
        }
    })

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Book</DialogTitle>
                    <DialogDescription></DialogDescription>
                    <Form {...form}>
                        <form className='space-y-4'>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Book name</FormLabel>
                                        <FormControl>
                                            <Input placeholder='book name' {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='author'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Author</FormLabel>
                                        <FormControl>
                                            <Input placeholder='last first' {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='isbn'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>ISBN</FormLabel>
                                        <FormControl>
                                            <Input placeholder="XXX-X-XX-XXXXXX-X" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='no_of_copies'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>No of copies</FormLabel>
                                        <FormControl>
                                            <Input placeholder="1" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='publish_year'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Publish year</FormLabel>
                                        <FormControl>
                                            <Input placeholder="2024" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='category'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Publish year</FormLabel>
                                        <FormControl>
                                            <Input placeholder="2024" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default AddBookDialog