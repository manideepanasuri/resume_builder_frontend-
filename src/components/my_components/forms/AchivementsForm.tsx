import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {Achivements2, achivementsUpdate} from "@/types/general"
import {z} from "zod"
import AllDetailsStore from "@/store/userDetailsStore"
import * as React from "react";

import {Button} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Loader2} from "lucide-react";
import userAuthStore from "@/store/userstore.ts";
import {toast} from "sonner";
import { Textarea } from "@/components/ui/textarea"


type Props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  achivement:Achivements2|null
};

export function AchivementsForm({open, setOpen,achivement}: Readonly<Props>) {
  const { is_loading, postAchivements} = AllDetailsStore()
  const {accessjwt}=userAuthStore();
  const form = useForm<z.infer<typeof achivementsUpdate>>({
    resolver: zodResolver(achivementsUpdate),
    defaultValues: {
      id: achivement?.id??-1,
      achievement:achivement?.achievement??"",
      description:achivement?.description??"",
      dates:achivement?.dates??"",
    },
  })
  //React.useLayoutEffect(()=>{loadskills(accessjwt)},[])

  function onSubmit(values: z.infer<typeof achivementsUpdate>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validate
    postAchivements(accessjwt,values).then(str=>{
      toast(str)
      setOpen(false);
      form.reset();
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogContent className="sm:max-w-md max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="achievement"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Achivement</FormLabel>
                  <FormControl>
                    <Input placeholder="Achivement" {...field} />
                  </FormControl>
                  
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dates"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Dates</FormLabel>
                  <FormControl>
                    <Input placeholder="Dates" {...field} />
                  </FormControl>
                  <FormDescription>
                    {"Enter in YYYY format"}
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
            />
            
            {is_loading ? <Button disabled className="w-full">
                <Loader2 className="animate-spin"/>
                Please wait
              </Button> :
              <Button type="submit" className="w-full ">Submit</Button>
            }
          </form>
        </Form>
      </DialogContent>
    </Dialog>
      
  )
}
