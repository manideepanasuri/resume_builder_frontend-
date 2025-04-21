import { Position2 } from "@/types/general";
import { Edit, Trash } from "lucide-react";
import { PositionForm } from "./forms/PositionsForm";
import { useState } from "react";
import { ConfirmationDialog } from "./ConfirmationDialog";

type Props = {
  position: Position2;
};

export default function PositionsComponent({ position }: Readonly<Props>) {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  return (
    <div className="bg-accent p-4 text-accent-foreground rounded-xl border-2  shadow-2xl">
      {position === null ? (
        <h4 className="font-bold text-xl my-3">Enter Your Details</h4>
      ) : (
        <div>
          <ul className=" text-nowrap">
            <li className=" text-accent-foreground">
              Position : {position.position}
            </li>
            <li className=" text-accent-foreground ">
              Club/Event : {position.club_event}
            </li>
            <li className=" text-accent-foreground">
              Tenure: {position.tenure}
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
          <PositionForm open={open} setOpen={setOpen} position={position} />
          <ConfirmationDialog
                      open={open1}
                      setOpen={setOpen1}
                      func={"position"}
                      id={position.id}
                    />
        </div>
      )}
    </div>
  );
}
