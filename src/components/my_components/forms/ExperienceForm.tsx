import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Experiences2,
  experienceUpdate
} from "@/types/general";
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
  experience: Experiences2 | null;
};

export function ExperiencesForm({
  open,
  setOpen,
  experience,
}: Readonly<Props>) {
  const { is_loading, postExperiences } = AllDetailsStore();
  const { accessjwt } = userAuthStore();
  const form = useForm<z.infer<typeof experienceUpdate>>({
    resolver: zodResolver(experienceUpdate),
    defaultValues: {
      id: experience?.id ?? -1,
      company: experience?.company ?? "",
      city: experience?.city ?? "",
      role: experience?.role ?? "",
      dates: experience?.dates ?? "",
      descriptions:
        experience?.descriptions.map((d) => d.description).join(", ") ?? "",
    },
  });
  //React.useLayoutEffect(()=>{loadskills(accessjwt)},[])

  function onSubmit(values: z.infer<typeof experienceUpdate>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validate
    postExperiences(accessjwt, values).then((str) => {
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
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Company" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Input placeholder="Role" {...field} />
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
                  <FormDescription>
                    {"Enter in YYYY-(YYYY | now) format"}
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
