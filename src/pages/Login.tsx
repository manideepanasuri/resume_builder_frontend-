
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { formSchema } from "@/types/general";
import userAuthStore from "@/store/userstore";
import { toast } from "sonner";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Loader2 } from "lucide-react";


export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {refreshjwt,login,reset,is_loading}=userAuthStore()
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const str=login(values);
    toast(str);
  }
  const navigate=useNavigate()
  useEffect(()=>{
      if(refreshjwt===""){
        reset();
      }
      else{
        navigate("/");
      }
    },[refreshjwt])
    
  return (
    <div className="flex justify-center items-center my-4">
    <Card className="mx-auto max-w-sm md:min-w-sm  min-w-[80%]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Enter your email and password to login to your account
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
                    <FormDescription>
                      Enter Your Email
                    </FormDescription>
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
                    <FormDescription>
                      Enter Your Password
                    </FormDescription>
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
