import Achivements from "@/components/my_components/Achivements";
import ContactDetails from "@/components/my_components/Contactdetails";
import Education from "@/components/my_components/Education";
import Experiences from "@/components/my_components/Experiences";
import Positions from "@/components/my_components/Positions";
import Projects from "@/components/my_components/Projects";
import Skills from "@/components/my_components/Skills";
import Userdetails from "@/components/my_components/Userdetails";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AllDetailsStore from "@/store/userDetailsStore";
import userAuthStore from "@/store/userstore";
import { useEffect } from "react";

export default function Homepage() {
  const { name, email,accessjwt } = userAuthStore();
  const {loadAll}=AllDetailsStore();
  useEffect(() => {
    loadAll(accessjwt);
  }, [])
  
  return (
    <div className="p-3">
      <div className="flex-col flex justify-center items-center  ">
        <Avatar className="h-28 w-28 border-3 rounded-full border-accent-foreground shadow-2xl shadow-accent">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="text-2xl">CN</AvatarFallback>
        </Avatar>
        <div className="m-3 my-4 border-2 border-accent-foreground p-3 rounded-xl text-center bg-accent text-accent-foreground shadow-2xl shadow-accent">
          <h3 className="font-bold my-1">Name: {name}</h3>
          <h3 className="font-bold my-1">Email: {email}</h3>
        </div>
        <div className="grid lg:grid-cols-2 lg:w-[70%] gap-2">
        <Userdetails/>
        <ContactDetails/>
        <Skills/>
        <Education/>
        <Experiences/>
        <Projects/>
        <Positions/>
        <Achivements/>
        </div>
      </div>
    </div>
  );
}
