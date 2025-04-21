import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Education2, educationUpdate } from "@/types/general";
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

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  education: Education2 | null;
};

export function EducationForm({ open, setOpen, education }: Readonly<Props>) {
  const { is_loading, postEducation } = AllDetailsStore();
  const { accessjwt } = userAuthStore();
  const form = useForm<z.infer<typeof educationUpdate>>({
    resolver: zodResolver(educationUpdate),
    defaultValues: {
      id: education?.id ?? -1,
      institution: education?.institution ?? "",
      degree: education?.degree ?? "",
      board: education?.board ?? "",
      cgpa: education?.cgpa ?? "",
      year: education?.year ?? "",
    },
  });
  //React.useLayoutEffect(()=>{loadskills(accessjwt)},[])

  function onSubmit(values: z.infer<typeof educationUpdate>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validate
    postEducation(accessjwt, values).then((str) => {
      toast(str);
      setOpen(false);
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
              name="institution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution</FormLabel>
                  <FormControl>
                    <Input placeholder="Institution" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="degree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Degree</FormLabel>
                  <FormControl>
                    <Input placeholder="Degree" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="board"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Board</FormLabel>
                  <FormControl>
                    <Input placeholder="Board" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cgpa"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CGPA</FormLabel>
                  <FormControl>
                    <Input placeholder="CGPA" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year</FormLabel>
                  <FormControl>
                    <Input placeholder="Year" {...field} />
                  </FormControl>
                  <FormDescription>
                    {"Enter in YYYY-(YYYY | now) format"}
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
