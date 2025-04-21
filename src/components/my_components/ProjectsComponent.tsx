import { Project2 } from "@/types/general";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";
import { ProjectsForm } from "./forms/ProjectsForm";
import { ConfirmationDialog } from "./ConfirmationDialog";

type Props = {
  project: Project2;
};

export default function ProjectsComponet({ project }: Readonly<Props>) {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  return (
    <div className="bg-accent p-4 text-accent-foreground rounded-xl border-2  shadow-2xl ">
      {project === null ? (
        <h4 className="font-bold text-xl my-3">Enter Your Details</h4>
      ) : (
        <div>
          <ul className=" text-nowrap">
            <li className=" text-accent-foreground">Name : {project.name}</li>
            <li className=" text-accent-foreground ">
              Brief : {project.description}
            </li>
            <li className=" text-accent-foreground">Date : {project.dates}</li>
            <li className=" text-accent-foreground">Tools: {project.tools}</li>
            <li className=" text-accent-foreground ">
              Description :{" "}
              <ul className="pl-5 list-disc text-wrap">
                {project.descriptions.map((desc) => (
                  <li key={desc.id} className=" text-accent-foreground">
                    {" "}
                    {desc.description}
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <div className="flex items-center justify-end mt-auto">
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
          <ProjectsForm open={open} setOpen={setOpen} project={project} />
          <ConfirmationDialog
            open={open1}
            setOpen={setOpen1}
            func={"project"}
            id={project.id}
          />
        </div>
      )}
    </div>
  );
}
