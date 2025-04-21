import AllDetailsStore from '@/store/userDetailsStore'
import { Plus } from 'lucide-react'
import ExperiencesComponet from './ExperiencesComponet'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { useState } from 'react'
import { ExperiencesForm } from './forms/ExperienceForm'


export default function Experiences() {
  const {experiences}=AllDetailsStore()
    const [open, setOpen] = useState(false);
  
  return (
    <div className="bg-accent p-4 text-accent-foreground rounded-xl  ">
      <div className="flex justify-between items-center gap-2 cursor-pointer">
        <h3 className="font-bold text-2xl mb-3 ">Experiences : </h3>
      </div>
      <ScrollArea>
        <div className='flex w-10 items-stretch gap-2 '>
      {!experiences  ? (
        <h4 className="font-bold text-xl my-3">Enter Your Details</h4>
      ) : (
        experiences.map((exp)=><ExperiencesComponet experience={exp} key={exp.id}/>)
      )}
      <div className="p-10 grid place-items-center bg-blur-2xl shadow-3xl border-2 rounded-2xl cursor-pointer h-auto" onClick={()=>{setOpen(true)}}>
                  <Plus className="w-10 h-10 " />
                    <ExperiencesForm open={open} setOpen={setOpen} experience={null} />
                </div>
      </div>
      <ScrollBar orientation="horizontal" className='absolute bottom-0'/>
      </ScrollArea>
    </div>
  )
}
