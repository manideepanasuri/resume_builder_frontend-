
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import axios from "axios"
import { z } from 'zod'
import { formSchema, userregSchema } from '@/types/general'

export type usertype={
  accessjwt: string
  refreshjwt:string
  name: string
  email: string
  is_loading:boolean
  refresh_tokens: ()=> Promise<void>
  reset:()=>void
  login: (data:z.infer<typeof formSchema>) => Promise<string>
  createAccount: (data:z.infer<typeof userregSchema>)=>Promise<string>
}

const initialState={
  accessjwt:"",
  refreshjwt:"",
  name:"",
  email:"",
  is_loading:false
}

const userStore=(set:any,get:any)=>({
  ...initialState,
  refresh_tokens:async ()=>{
    if(get().refreshjwt==""){
      set(initialState)
      return ;
    }
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/token/refresh/"
      const response=await axios.post(url,{refresh:get().refreshjwt});
      //(response);
      set({accessjwt:response.data.access})
      set({is_loading:false});
    }
    catch(err){
      //(err);
      set(initialState)
      set({is_loading:false});
      return;
    }
  },
  reset:()=>{
    set(initialState);
  },
  login:async (data:z.infer<typeof formSchema>)=>{
    set({is_loading:true})
    try {
      const url=import.meta.env.VITE_BACKEND_HOST+"api/login/"
      const response=await axios.post(url,data)
      //(response);
      const dat=response.data;
      set({is_loading:false,refreshjwt:dat.tokens.refresh,accessjwt:dat.tokens.access,name:dat.user.name,email:dat.user.email})
      return response.data.message;
    } catch (error:any) {
      //(error)
      set(initialState)
      set({is_loading:false})
      return error?.response?.data?.message??"Internal Server Error";
    }
  },
  createAccount:async (data:z.infer<typeof userregSchema>)=>{
    set({is_loading:true})
    try {
      const url=import.meta.env.VITE_BACKEND_HOST+"api/register/"
      const response=await axios.post(url,data)
      //(response);
      const dat=response.data;
      set({is_loading:false,refreshjwt:dat.tokens.refresh,accessjwt:dat.tokens.access,name:dat.user.name,email:dat.user.email})
      return response.data.message;
    } catch (error:any) {
      //(error)
      set(initialState)
      set({is_loading:false})
      return error?.response?.data?.message??"Internal Server Error";
    }
  }
})

const userAuthStore = create<usertype>()(
  devtools(
    persist(userStore, { name: "resume_builder_user" })
  )
);


export default userAuthStore;
