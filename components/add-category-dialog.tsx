import { useForm } from 'react-hook-form'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { addCategory } from '@/actions/actions'
import { usePathname } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'


type Props = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  category?: string
}

const formSchema = z.object({
  id: z.number().default(-1),
  name: z.string().min(2, {
    message: "Category must be entered"
  }).max(20),
})

function AddCategoryDialog({ setOpen, open, category }: Props) {
  const { toast } = useToast()
  const path = usePathname()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '' }
  });

  const onSubmit = async ( values: z.infer<typeof formSchema>) => {
    await addCategory(values.name, path)
    toast({
      description: 'Category added successfully',
    })
    form.reset()

  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add category</DialogTitle>
          <DialogDescription></DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-1'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder='Category name' />
                        </FormControl>
                    </FormItem>
                  )}
                />

                <Button type='submit'>Save</Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default AddCategoryDialog