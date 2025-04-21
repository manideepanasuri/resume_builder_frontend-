import { Experiences2 } from "@/types/general";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";
import { ExperiencesForm } from "./forms/ExperienceForm";
import { ConfirmationDialog } from "./ConfirmationDialog";

type Props = {
  experience: Experiences2;
};

export default function ExperiencesComponet({ experience }: Readonly<Props>) {
  const [open, setOpen] = useState(false);
  const [open1,setOpen1]=useState(false);

  return (
    <div className="bg-accent p-4 text-accent-foreground rounded-xl border-2  shadow-2xl">
      {experience === null ? (
        <h4 className="font-bold text-xl my-3">Enter Your Details</h4>
      ) : (
        <div>
          <ul className=" text-nowrap">
            <li className=" text-accent-foreground">
              Company : {experience.company}
            </li>
            <li className=" text-accent-foreground ">
              City : {experience.city}
            </li>
            <li className=" text-accent-foreground">Role: {experience.role}</li>
            <li className=" text-accent-foreground">
              Date : {experience.dates}
            </li>
            <li className=" text-accent-foreground ">
              Description :{" "}
              <ul className="pl-5 list-disc text-wrap">
                {experience.descriptions.map((desc) => (
                  <li key={desc.id} className=" text-accent-foreground">
                    {" "}
                    {desc.description}
                  </li>
                ))}
              </ul>
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
          <ExperiencesForm
            open={open}
            setOpen={setOpen}
            experience={experience}
          />
          <ConfirmationDialog
                      open={open1}
                      setOpen={setOpen1}
                      func={"experience"}
                      id={experience.id}
                    />
        </div>
      )}
    </div>
  );
}
