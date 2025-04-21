import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {skillsUpdate} from "@/types/general"
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


type Props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>

};

export function SkillsForm({open, setOpen}: Readonly<Props>) {
  const {skills, is_loading, postSkills} = AllDetailsStore()
  const {accessjwt}=userAuthStore();
  const form = useForm<z.infer<typeof skillsUpdate>>({
    resolver: zodResolver(skillsUpdate),
    defaultValues: {
      language: skills?.language??"",
  developer_tools: skills?.developer_tools??"",
  framework: skills?.framework??"",
  cloud_database: skills?.cloud_database??"",
  soft_skills: skills?.soft_skills??"",
  coursework: skills?.coursework??"",
  area_of_interest: skills?.area_of_interest??"",
    },
  })
  React.useLayoutEffect(()=>{},[skills])

  function onSubmit(values: z.infer<typeof skillsUpdate>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validate
    postSkills(accessjwt,values).then(str=>{
      toast(str)
      setOpen(false);
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
              name="language"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Languages</FormLabel>
                  <FormControl>
                    <Input placeholder="Languages" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the Technical Languages you know
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="developer_tools"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Developer Tools</FormLabel>
                  <FormControl>
                    <Input placeholder="Developer Tools" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="framework"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Frameworks</FormLabel>
                  <FormControl>
                    <Input placeholder="Frameworks" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cloud_database"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Cloud Databases</FormLabel>
                  <FormControl>
                    <Input placeholder="Cloud" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="soft_skills"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Soft Skills</FormLabel>
                  <FormControl>
                    <Input placeholder="Soft Skills" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="coursework"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Course Work</FormLabel>
                  <FormControl>
                    <Input placeholder="Course Work" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="area_of_interest"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Area Of Intrests</FormLabel>
                  <FormControl>
                    <Input placeholder="Intrests" {...field} />
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
