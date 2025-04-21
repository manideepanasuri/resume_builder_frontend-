import { LogIn, LogOut, UserRoundPlus } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import userAuthStore from "@/store/userstore";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const { reset, refreshjwt } = userAuthStore();
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (refreshjwt == "") {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, [refreshjwt]);
  return (
    <div className="flex z-50   p-3 items-center justify-between px-5 py-3 sticky top-0 left-0 bg-accent">
      <h1 className="text-xl font-bold">Resume Builder</h1>
      <span className="flex">
        <ModeToggle />
        {loggedIn ? (
          <>
            <Button onClick={reset} className="ml-3">
              <LogOut /> Logout
            </Button>
            <Avatar className="ml-3">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </>
        ) : (
          <>
            <Link to="/login" className="ml-3 ">
              <Button>
                <LogIn /> Login
              </Button>
            </Link>
            <Link to="/signup" className="ml-3">
              <Button>
                <UserRoundPlus /> Get Started
              </Button>
            </Link>
          </>
        )}
      </span>
    </div>
  );
}
