import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Position2, positionsUpdate } from "@/types/general";
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
  position: Position2 | null;
};

export function PositionForm({ open, setOpen, position }: Readonly<Props>) {
  const { is_loading, postPositions } = AllDetailsStore();
  const { accessjwt } = userAuthStore();
  const form = useForm<z.infer<typeof positionsUpdate>>({
    resolver: zodResolver(positionsUpdate),
    defaultValues: {
      id: position?.id ?? -1,
      position: position?.position ?? "",
      club_event: position?.club_event ?? "",
      tenure: position?.tenure ?? "",
    },
  });
  //React.useLayoutEffect(()=>{loadskills(accessjwt)},[])

  function onSubmit(values: z.infer<typeof positionsUpdate>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validate
    postPositions(accessjwt, values).then((str) => {
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
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Input placeholder="Position" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="club_event"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Club/Event</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Club/Event" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tenure"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tenure</FormLabel>
                  <FormControl>
                    <Input placeholder="Tenure" {...field} />
                  </FormControl>
                  <FormDescription>{"Enter in YYYY format"}</FormDescription>
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
              <Button type="submit" className="w-full ">
                Submit
              </Button>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
