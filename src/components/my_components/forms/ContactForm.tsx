import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {contactUpdate} from "@/types/general"
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

export function ContactForm({open, setOpen}: Readonly<Props>) {
  const {contactDetails, is_loading, postContact} = AllDetailsStore()
  const {accessjwt}=userAuthStore();
  const form = useForm<z.infer<typeof contactUpdate>>({
    resolver: zodResolver(contactUpdate),
    defaultValues: {
      phone: contactDetails?.phone ?? "",
      email: contactDetails?.email ?? "",
      student_email: contactDetails?.student_email ?? "",
      github: contactDetails?.github ?? "",
      linkedin: contactDetails?.linkedin ?? ""
    },
  })
  React.useLayoutEffect(()=>{},[contactDetails])

  function onSubmit(values: z.infer<typeof contactUpdate>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validate
    postContact(accessjwt,values).then(str=>{
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
              name="phone"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Phone Numebr</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="student_email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Student Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Student Email" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="github"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Github</FormLabel>
                  <FormControl>
                    <Input placeholder="Github" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedin"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Linkedin</FormLabel>
                  <FormControl>
                    <Input placeholder="Linkedin" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            {is_loading ? <Button disabled className="w-full">
                <Loader2 className="animate-spin" />
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
