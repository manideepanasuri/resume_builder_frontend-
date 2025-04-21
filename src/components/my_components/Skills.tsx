import AllDetailsStore from "@/store/userDetailsStore";
import { Edit, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { SkillsForm } from "./forms/SkillsForm";
import { ConfirmationDialog } from "./ConfirmationDialog";

export default function Skills() {
  const { skills } = AllDetailsStore();
  useEffect(() => {
    //console.log(skills)
  }, [skills]);
  const [open, setOpen] = useState(false);
  const [open1,setOpen1]=useState(false);

  return (
    <div className="bg-accent p-4 text-accent-foreground rounded-xl">
      <div className="flex justify-between items-center gap-2 cursor-pointer">
        <h3 className="font-bold text-2xl mb-3 ">Skills : </h3>
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
      {!skills ? (
        <h4 className="font-bold text-xl my-3">Enter Your Details</h4>
      ) : (
        <div>
          <ul className="break-all">
            <li className=" text-accent-foreground">
              Languages : <span>{skills.language ? skills.language : "-"}</span>
            </li>
            <li className=" text-accent-foreground ">
              Developer Tools : {skills.developer_tools}
            </li>
            <li className=" text-accent-foreground">
              Frame works : {skills.framework}
            </li>
            <li className=" text-accent-foreground">
              Cloud : {skills.cloud_database}
            </li>
            <li className=" text-accent-foreground">
              Soft Skills : {skills.soft_skills}
            </li>
            <li className=" text-accent-foreground">
              Course Work : {skills.coursework}
            </li>
            <li className=" text-accent-foreground">
              Area Of Interests : {skills.area_of_interest}
            </li>
          </ul>
        </div>
      )}
      <SkillsForm open={open} setOpen={setOpen} />
      <ConfirmationDialog open={open1} setOpen={setOpen1} func={"skills"}/>
      
    </div>
  );
}
