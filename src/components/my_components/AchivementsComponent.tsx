import { Achivements2 } from "@/types/general";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";
import { AchivementsForm } from "./forms/AchivementsForm";
import { ConfirmationDialog } from "./ConfirmationDialog";

type Props = {
  achievement: Achivements2;
};

export default function AchivementsComponent({ achievement }: Readonly<Props>) {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  return (
    <div className="bg-accent p-4 text-accent-foreground rounded-xl border-2  shadow-2xl">
      {!achievement ? (
        <h4 className="font-bold text-xl my-3">Enter Your Details</h4>
      ) : (
        <div>
          <ul className=" text-nowrap">
            <li className=" text-accent-foreground">
              Achievement : {achievement.achievement}
            </li>
            <li className=" text-accent-foreground ">
              Description :{" "}
              <span className="text-wrap"> {achievement.description}</span>
            </li>
            <li className=" text-accent-foreground">
              Date : {achievement.dates}
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
          <AchivementsForm
            open={open}
            setOpen={setOpen}
            achivement={achievement}
          />
          <ConfirmationDialog
                                open={open1}
                                setOpen={setOpen1}
                                func={"achievement"}
                                id={achievement.id}
                              />
        </div>
      )}
    </div>
  );
}
