import AllDetailsStore from "@/store/userDetailsStore";
import { Edit, Trash } from "lucide-react";
import { UserDetailsForm } from "./forms/UserDetailsForm";
import {useState} from "react";
import { ConfirmationDialog } from "./ConfirmationDialog";

export default function Userdetails() {
  const { userDetails } = AllDetailsStore();
  const [open,setOpen]=useState(false);
  const [open1,setOpen1]=useState(false);

  return (
    <div className="bg-accent p-4 text-accent-foreground rounded-xl w-auto">
      <div className="flex justify-between items-center gap-2 cursor-pointer">
      <h3 className="font-bold text-2xl mb-3 ">Requried Details: </h3>
      <div className="flex gap-2">
          <Trash className="cursor-pointer"
            onClick={() => {
              setOpen1(true);
            }} />
          <Edit
            className="cursor-pointer"
            onClick={() => {
              setOpen(true);
            }}
          />

        </div>
      </div>
      {!userDetails ? (
        <h4 className="font-bold text-xl my-3">Enter Your Details</h4>
      ) : (
        <div>
          <ul>
            <li className=" text-accent-foreground">
              Roll Number : {userDetails.rollno}
            </li>
            <li className=" text-accent-foreground">
              Program : {userDetails.program}
            </li>
            <li className=" text-accent-foreground">
              Course : {userDetails.course}
            </li>
            <li className=" text-accent-foreground">
              Collage : {userDetails.collage}
            </li>
          </ul>
        </div>
      )}
      <UserDetailsForm open={open} setOpen={setOpen}/>
      <ConfirmationDialog open={open1} setOpen={setOpen1} func={"user details"}/>
    </div>
  );
}
