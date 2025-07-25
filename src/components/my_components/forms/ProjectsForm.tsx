import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Project2, projectsUpdate } from "@/types/general";
import { z } from "zod";
import AllDetailsStore from "@/store/userDetailsStore";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import userAuthStore from "@/store/userstore.ts";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  project: Project2 | null;
};

export function ProjectsForm({ open, setOpen, project }: Readonly<Props>) {
  const { is_loading, postProjects } = AllDetailsStore();
  const { accessjwt } = userAuthStore();
  const form = useForm<z.infer<typeof projectsUpdate>>({
    resolver: zodResolver(projectsUpdate),
    defaultValues: {
      id: project?.id ?? -1,
      name: project?.name ?? "",
      description: project?.description ?? "",
      dates: project?.dates ?? "",
      tools: project?.tools ?? "",
      descriptions:
        project?.descriptions.map((d) => d.description).join(", ") ?? "",
    },
  });
  //React.useLayoutEffect(()=>{loadskills(accessjwt)},[])

  function onSubmit(values: z.infer<typeof projectsUpdate>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validate
    postProjects(accessjwt, values).then((str) => {
      toast(str);
      setOpen(false);
      form.reset();
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Project Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brief Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Brief Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dates"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input placeholder="Date" {...field} />
                  </FormControl>
                  <FormDescription>{"Enter in YYYY format"}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tools"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tools</FormLabel>
                  <FormControl>
                    <Input placeholder="Tools" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter Comma Seperated Values
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="descriptions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter Comma Seperated Values
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {is_loading ? (
              <Button disabled className="w-full">
                <Loader2 className="animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button type="submit" className="w-full">
                Submit
              </Button>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
