import { Education2 } from "@/types/general";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";
import { EducationForm } from "./forms/EducationForm";
import { ConfirmationDialog } from "./ConfirmationDialog";

type Props = {
  education: Education2;
};

export default function EducationComponent({ education }: Readonly<Props>) {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  return (
    <div className="bg-accent p-4 text-accent-foreground rounded-xl border-2  shadow-2xl">
      {education === null ? (
        <h4 className="font-bold text-xl my-3">Enter Your Details</h4>
      ) : (
        <div>
          <ul className=" text-nowrap">
            <li className=" text-accent-foreground">
              Institution : {education.institution}
            </li>
            <li className=" text-accent-foreground ">
              Degree : {education.degree}
            </li>
            <li className=" text-accent-foreground">
              Board: {education.board}
            </li>
            <li className=" text-accent-foreground">Cgpa : {education.cgpa}</li>
            <li className=" text-accent-foreground ">
              Year : {education.year}
            </li>
          </ul>
          <div className="flex items-center justify-end">
            <div className="flex gap-2">
              <Trash
                className="cursor-pointer"
                onClick={() => {
                  setOpen1(true);
                }}
              />
              <Edit
                className="cursor-pointer"
                onClick={() => {
                  setOpen(true);
                }}
              />
            </div>
          </div>
          <EducationForm open={open} setOpen={setOpen} education={education} />
          <ConfirmationDialog
            open={open1}
            setOpen={setOpen1}
            func={"education"}
            id={education.id}
          />
        </div>
      )}
    </div>
  );
}
