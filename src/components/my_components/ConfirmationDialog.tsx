import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import userAuthStore from "@/store/userstore"
import { toast } from "sonner"
import AllDetailsStore from "@/store/userDetailsStore"

type Props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  func:string
  id?:number
};

export function ConfirmationDialog({open,setOpen,func,id}:Readonly<Props>) {
  const {accessjwt}=userAuthStore()
  const {deleteUserDetails,deleteContactDetails,deleteSkills,deleteEducation,deleteExperience,deleteProject,deletePosition,deleteAchivement,is_loading}=AllDetailsStore()
  function onContinue() {
    
      if(func=== "user details"){
        deleteUserDetails(accessjwt).then(str=>{
          toast(str);
          setOpen(false);
        })
      }
      if(func=== "contactDetails"){
        deleteContactDetails(accessjwt).then(str=>{
          toast(str);
          setOpen(false);
        })
      }
      if(func=== "skills"){
        deleteSkills(accessjwt).then(str=>{
          toast(str);
          setOpen(false);
        })
      }
      if(func=== "education"){
        deleteEducation(accessjwt,id??-1).then(str=>{
          toast(str);
          setOpen(false);
        })
      }
      if(func=== "experience"){
        deleteExperience(accessjwt,id??-1).then(str=>{
          toast(str);
          setOpen(false);
        })
      }
      if(func=== "project"){
        deleteProject(accessjwt,id??-1).then(str=>{
          toast(str);
          setOpen(false);
        })
      }
      if(func=== "position"){
        deletePosition(accessjwt,id??-1).then(str=>{
          toast(str);
          setOpen(false);
        })
      }
      if(func=== "achievement"){
        deleteAchivement(accessjwt,id??-1).then(str=>{
          toast(str);
          setOpen(false);
        })
      }
    
    
  }
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you Sure?</DialogTitle>
          <DialogDescription>
            This Action Can't be reversed
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          {is_loading ? <Button disabled className="">
                <Loader2 className="animate-spin"/>
                Please wait
              </Button> :
              <Button type="submit" className="" onClick={onContinue}>Continue</Button>
            }
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
