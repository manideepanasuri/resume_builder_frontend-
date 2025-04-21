
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { userregSchema } from "@/types/general";
import userAuthStore from "@/store/userstore";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";


export default function Signup() {
  const form = useForm<z.infer<typeof userregSchema>>({
    resolver: zodResolver(userregSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {createAccount,is_loading,}=userAuthStore()
  function onSubmit(values: z.infer<typeof userregSchema>) {
    console.log(values);
    const str=createAccount(values);
    toast(str);
  }

  return (
    <div className="flex justify-center items-center my-4">
    <Card className="mx-auto max-w-sm md:min-w-sm  min-w-[80%]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
        <CardDescription>
          Enter your details to Create Account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmpassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Confirm Password" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {is_loading?<Button disabled className="w-full">
      <Loader2 className="animate-spin" />
      Please wait
    </Button>:<Button type="submit" className="w-full">Submit</Button>}
              
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}
