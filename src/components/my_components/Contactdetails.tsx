import AllDetailsStore from "@/store/userDetailsStore";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { ContactForm } from "./forms/ContactForm";
import { ConfirmationDialog } from "./ConfirmationDialog";

export default function ContactDetails() {
  const { contactDetails } = AllDetailsStore();
  const [open,setOpen]=useState(false);
  const [open1,setOpen1]=useState(false);
  
  return (
    <div className="bg-accent p-4 text-accent-foreground rounded-xl ">
      <div className="flex justify-between items-center gap-2 cursor-pointer">
      <h3 className="font-bold text-2xl mb-3 ">Contact Details: </h3>
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
      {!contactDetails ? (
        <h4 className="font-bold text-xl my-3">Enter Your Details</h4>
      ) : (
        <div className="break-all">
          <ul>
            <li className=" text-accent-foreground">
              Phone Number : <span>{contactDetails.phone}</span>
            </li>
            <li className=" text-accent-foreground">
              Email : {contactDetails.email}
            </li>
            <li className=" text-accent-foreground">
            Student Email : {contactDetails.student_email}
            </li>
            <li className=" text-accent-foreground">
              Github : <Link to={contactDetails.github}>{contactDetails.github}</Link>
            </li>
            <li className=" text-accent-foreground">
              Likedin : <Link to={contactDetails.linkedin}>{contactDetails.linkedin}</Link>
            </li>
          </ul>
        </div>
      )}
      <ContactForm open={open} setOpen={setOpen} />
            <ConfirmationDialog open={open1} setOpen={setOpen1} func={"contactDetails"}/>
      
    </div>
  );
}
