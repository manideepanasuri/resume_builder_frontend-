import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {userDetailsUpdate} from "@/types/general"
import {z} from "zod"
import AllDetailsStore from "@/store/userDetailsStore"
import * as React from "react";

import {Button} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Loader2} from "lucide-react";
import userAuthStore from "@/store/userstore.ts";
import {toast} from "sonner";


type Props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export function UserDetailsForm({open, setOpen}: Readonly<Props>) {
  const {userDetails, is_loading, postUserDetails} = AllDetailsStore()
  const {accessjwt}=userAuthStore();
  const form = useForm<z.infer<typeof userDetailsUpdate>>({
    resolver: zodResolver(userDetailsUpdate),
    defaultValues: {
      rollno: userDetails?.rollno ?? "",
      program: userDetails?.program ?? "",
      course: userDetails?.course ?? "",
      collage: userDetails?.collage ?? "",
    },
  })
  React.useEffect(() => {
    form.reset({
      rollno: userDetails?.rollno ?? "",
      program: userDetails?.program ?? "",
      course: userDetails?.course ?? "",
      collage: userDetails?.collage ?? "",
    });
  }, [userDetails]); // Reset when contactDetails change
  

  function onSubmit(values: z.infer<typeof userDetailsUpdate>) {
    postUserDetails(accessjwt,values).then(str=>{
      toast(str)
      setOpen(false);
    })
  }

  

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="rollno"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Roll Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Roll Number" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="program"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Program</FormLabel>
                  <FormControl>
                    <Input placeholder="Program" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="collage"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Collage</FormLabel>
                  <FormControl>
                    <Input placeholder="Collage" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="course"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Course</FormLabel>
                  <FormControl>
                    <Input placeholder="Course" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            {is_loading ? <Button disabled className="w-full">
                <Loader2 className="animate-spin"/>
                Please wait
              </Button> :
              <Button type="submit" className="w-full">Submit</Button>
            }
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
