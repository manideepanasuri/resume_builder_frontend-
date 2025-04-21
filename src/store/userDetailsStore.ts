import {
  Achivements,
  achivementsUpdate,
  ContactDetails,
  contactUpdate,
  Education,
  educationUpdate,
  Experiences,
  experienceUpdate,
  Position,
  positionsUpdate,
  Project,
  projectsUpdate,
  Skills,
  skillsUpdate,
  Userdetails,
  userDetailsUpdate
} from "@/types/general"
import axios from "axios"
import { create } from "zustand"
import { devtools } from 'zustand/middleware'
import {z} from "zod";

interface initialStateType{
  userDetails:Userdetails | null
  contactDetails:ContactDetails |null
  education:Education |null
  projects:Project | null
  experiences:Experiences | null
  skills:Skills|null
  positions:Position|null
  achievements:Achivements|null
  is_loading:boolean,
}

export type AllDetailsType = {
  userDetails:Userdetails | null
  contactDetails:ContactDetails |null
  education:Education |null
  projects:Project | null
  experiences:Experiences | null
  skills:Skills|null
  positions:Position|null
  achievements:Achivements|null
  is_loading:boolean,
  loadUserDetails:(accessjwt:string)=>Promise<void>
  loadContactDetails:(accessjwt:string)=>Promise<void>
  loadEducation:(accessjwt:string)=>Promise<void>
  loadProjects:(accessjwt:string)=>Promise<void>
  loadExperiences:(accessjwt:string)=>Promise<void>
  loadSkills:(accessjwt:string)=>Promise<void>
  loadPositions:(accessjwt:string)=>Promise<void>
  loadAchivements:(accessjwt:string)=>Promise<void>
  loadAll:(accessjwt:string)=>void
  //post requests
  postUserDetails:(accessjwt:string,data:z.infer<typeof userDetailsUpdate>)=>Promise<string>
  postContact:(accessjwt:string,data:z.infer<typeof contactUpdate>)=>Promise<string>
  postSkills:(accessjwt:string,data:z.infer<typeof skillsUpdate>)=>Promise<string>
  postProjects:(accessjwt:string,dataa:z.infer<typeof projectsUpdate>)=>Promise<string>
  postEducation:(accessjwt:string,dataa:z.infer<typeof educationUpdate>)=>Promise<string>
  postExperiences:(accessjwt:string,dataa:z.infer<typeof experienceUpdate>)=>Promise<string>
  postAchivements:(accessjwt:string,dataa:z.infer<typeof achivementsUpdate>)=>Promise<string>
  postPositions:(accessjwt:string,dataa:z.infer<typeof positionsUpdate>)=>Promise<string>
  //delete requests
  deleteUserDetails: (accessjwt:string)=>Promise<string>
  deleteContactDetails: (accessjwt:string)=>Promise<string>
  deleteSkills: (accessjwt:string)=>Promise<string>
  deleteEducation: (accessjwt:string,id:number)=>Promise<string>
  deleteExperience: (accessjwt:string,id:number)=>Promise<string>
  deleteProject: (accessjwt:string,id:number)=>Promise<string>
  deletePosition: (accessjwt:string,id:number)=>Promise<string>
  deleteAchivement: (accessjwt:string,id:number)=>Promise<string>
}

const initialState:initialStateType={
  userDetails:null,
  contactDetails:null,
  education:null,
  projects:null,
  experiences:null,
  skills:null,
  positions:null,
  achievements:null,
  is_loading:false
}


const AllDetails=(set:any, get:any)=>({
  ...initialState,
  loadUserDetails: async (accessjwt:string)=>{
    set({is_loading:true});
    try {
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/user-details/"


      const config = {
        method: 'get',
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: {}
      };
      const response= await axios(config);
      set({userDetails:response.data.user_details_collage
      })
      //(response);
      set({is_loading:false});
    } catch (error) {
      //(error);
      set({is_loading:false,userDetails:null});
    }
  },
  loadContactDetails: async (accessjwt:string)=>{
    set({is_loading:true});
    try {
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/contact-info/"


      const config = {
        method: 'get',
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: {}
      };
      const response= await axios(config);
      set({contactDetails:response.data.contact_information})
      //(response);
      set({is_loading:false});
    } catch (error) {
      //(error);
      set({is_loading:false,contactDetails:null});
    }
  },
  loadEducation: async (accessjwt:string)=>{
    set({is_loading:true});
    try {
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/educations/"


      const config = {
        method: 'get',
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: {}
      };
      const response= await axios(config);
      set({education:response.data.eductaion})
      //(response);
      set({is_loading:false});
    } catch (error) {
      //(error);
      set({is_loading:false,education:null});
    }
  },
  loadProjects: async (accessjwt:string)=>{
    set({is_loading:true});
    try {
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/projects/"


      const config = {
        method: 'get',
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: {}
      };
      const response= await axios(config);
      set({projects:response.data.projects})
      //(response);
      set({is_loading:false});
    } catch (error) {
      //(error);
      set({is_loading:false,projects:null});
    }
  },
  loadExperiences: async (accessjwt:string)=>{
    set({is_loading:true});
    try {
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/experiences/"
      const config = {
        method: 'get',
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: {}
      };
      const response= await axios(config);
      set({experiences:response.data.experiences})
      //(response);
      set({is_loading:false});
    } catch (error) {
      //(error);
      set({is_loading:false,experiences:null});
    }
  },
  loadSkills: async (accessjwt:string)=>{
    set({is_loading:true});
    try {
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/skills/"
      const config = {
        method: 'get',
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: {}
      };
      const response= await axios(config);
      set({skills:response.data.skill})
      //(response.data.skill);
      set({is_loading:false});
    } catch (error) {
      //(error);
      set({is_loading:false,skills:null});
    }
  },
  loadPositions: async (accessjwt:string)=>{
    set({is_loading:true});
    try {
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/positions/"
      const config = {
        method: 'get',
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: {}
      };
      const response= await axios(config);
      set({positions:response.data.position})
      //(response);
      set({is_loading:false});
    } catch (error) {
      //(error);
      set({is_loading:false,positions:null});
    }
  },
  loadAchivements: async (accessjwt:string)=>{
    set({is_loading:true});
    try {
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/achievements/"
      const config = {
        method: 'get',
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: {}
      };
      const response= await axios(config);
      set({achievements:response.data.achievement})
      //(response);
      set({is_loading:false});
    } catch (error) {
      //(error);
      set({is_loading:false,achievements:null});
    }
  },
  loadAll:(accessjwt:string)=>{
    get().loadUserDetails(accessjwt);
    get().loadContactDetails(accessjwt);
    get().loadEducation(accessjwt);
    get().loadProjects(accessjwt);
    get().loadExperiences(accessjwt);
    get().loadSkills(accessjwt);
    get().loadPositions(accessjwt);
    get().loadAchivements(accessjwt);
  },
  postUserDetails:async (accessjwt:string,dataa:z.infer<typeof userDetailsUpdate>):Promise<string> =>{
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/user-details/"
      const method=get().userDetails?"PUT":"POST";
      const config = {
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: dataa
      };
    //("hiii");

      const response= await axios(config);
      //(response);
      set({is_loading:false,userDetails:response.data.user_details_collage});
      return response.data.message;
    }
    catch (e) {
      //(e);
      set({is_loading:false});
       await get().loadUserDetails(accessjwt);
      return "Failed to Update"
    }
  },
  postContact:async (accessjwt:string,dataa:z.infer<typeof contactUpdate>):Promise<string> =>{
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/contact-info/"
      const method=get().contactDetails?"PUT":"POST";
      const config = {
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: dataa
      };

      const response= await axios(config);
      //(response);
      set({is_loading:false,contactDetails:response.data.contact_information});
      return response.data.message;
    }
    catch (e) {
      //(e);
      set({is_loading:false});
      //await get().loadContactDetails(accessjwt);
      return "Failed to Update"
    }
  },
  postSkills:async (accessjwt:string,dataa:z.infer<typeof skillsUpdate>):Promise<string> =>{
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/skills/"
      const method=get().skills?"PUT":"POST";
      const config = {
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: dataa
      };

      const response= await axios(config);
      //(response);
      set({is_loading:false,skills:response.data.skill});
      return response.data.message;
    }
    catch (e) {
      //(e);
      set({is_loading:false});
      return "Failed to Update"
    }
  },
  postProjects:async (accessjwt:string,dataa:z.infer<typeof projectsUpdate>):Promise<string> =>{
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/projects/"
      const method=dataa.id!=-1?"PUT":"POST";
      const retdata={...dataa,descriptions:dataa.descriptions.split(',').map(str=>str.trim())}
      const config = {
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: retdata
      };

      const response= await axios(config);
      await get().loadProjects(accessjwt);
      //(response);
      set({is_loading:false});
      return response.data.message;
    }
    catch (e) {
      //(e);
      set({is_loading:false});
      return "Failed to Update"
    }
  },
  postEducation:async (accessjwt:string,dataa:z.infer<typeof educationUpdate>):Promise<string> =>{
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/educations/"
      const method=dataa.id!=-1?"PUT":"POST";
      const retdata={...dataa}
      const config = {
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: retdata
      };

      const response= await axios(config);
      await get().loadEducation(accessjwt);
      //(response);
      set({is_loading:false});
      return response.data.message;
    }
    catch (e) {
      //(e);
      set({is_loading:false});
      return "Failed to Update"
    }
  },
  postExperiences:async (accessjwt:string,dataa:z.infer<typeof experienceUpdate>):Promise<string> =>{
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/experiences/"
      const method=dataa.id!=-1?"PUT":"POST";
      const retdata={...dataa,descriptions:dataa.descriptions.split(',').map(str=>str.trim())}
      const config = {
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: retdata
      };

      const response= await axios(config);
      await get().loadExperiences(accessjwt);
      //(response);
      set({is_loading:false});
      return response.data.message;
    }
    catch (e) {
      //(e);
      set({is_loading:false});
      return "Failed to Update"
    }
  },
  postAchivements:async (accessjwt:string,dataa:z.infer<typeof achivementsUpdate>):Promise<string> =>{
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/achievements/"
      const method=dataa.id!=-1?"PUT":"POST";
      const retdata={...dataa}
      const config = {
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: retdata
      };

      const response= await axios(config);
      await get().loadAchivements(accessjwt);
      //(response);
      set({is_loading:false});
      return response.data.message;
    }
    catch (e) {
      //(e);
      set({is_loading:false});
      return "Failed to Update"
    }
  },
  postPositions:async (accessjwt:string,dataa:z.infer<typeof positionsUpdate>):Promise<string> =>{
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/positions/"
      const method=dataa.id!=-1?"PUT":"POST";
      const retdata={...dataa}
      const config = {
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: retdata
      };

      const response= await axios(config);
      await get().loadPositions(accessjwt);
      //(response);
      set({is_loading:false});
      return response.data.message;
    }
    catch (e) {
      //(e);
      set({is_loading:false});
      return "Failed to Update"
    }
  },
  deleteUserDetails: async(accessjwt:string):Promise<string> =>{
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/user-details/"
      const method="DELETE";
      const retdata={}
      const config = {
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: retdata
      };

      const response= await axios(config);
      await get().loadUserDetails(accessjwt);
      //(response);
      set({is_loading:false});
      return response.data.message;
    }
    catch (e) {
      //(e);
      set({is_loading:false});
      return "Failed to Delete"
    }
  },
  deleteContactDetails: async(accessjwt:string):Promise<string> =>{
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/contact-info/"
      const method="DELETE";
      const retdata={}
      const config = {
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: retdata
      };

      const response= await axios(config);
      await get().loadContactDetails(accessjwt);
      //(response);
      set({is_loading:false});
      return response.data.message;
    }
    catch (e) {
      //(e);
      set({is_loading:false});
      return "Failed to Delete"
    }
  },
  deleteSkills: async(accessjwt:string):Promise<string> =>{
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/skills/"
      const method="DELETE";
      const retdata={}
      const config = {
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: retdata
      };

      const response= await axios(config);
      await get().loadSkills(accessjwt);
      //(response);
      set({is_loading:false});
      return response.data.message;
    }
    catch (e) {
      //(e);
      set({is_loading:false});
      return "Failed to Delete"
    }
  },
  deleteEducation: async(accessjwt:string,id:number):Promise<string> =>{
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/educations/"
      const method="DELETE";
      const retdata={id}
      const config = {
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: retdata
      };

      const response= await axios(config);
      await get().loadEducation(accessjwt);
      //(response);
      set({is_loading:false});
      return response.data.message;
    }
    catch (e) {
      //(e);
      set({is_loading:false});
      return "Failed to Delete"
    }
  },
  deleteExperience: async(accessjwt:string,id:number):Promise<string> =>{
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/experiences/"
      const method="DELETE";
      const retdata={id}
      const config = {
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: retdata
      };

      const response= await axios(config);
      await get().loadExperiences(accessjwt);
      //(response);
      set({is_loading:false});
      return response.data.message;
    }
    catch (e) {
      //(e);
      set({is_loading:false});
      return "Failed to Delete"
    }
  },
  deleteProject: async(accessjwt:string,id:number):Promise<string> =>{
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/projects/"
      const method="DELETE";
      const retdata={id}
      const config = {
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: retdata
      };

      const response= await axios(config);
      await get().loadProjects(accessjwt);
      //(response);
      set({is_loading:false});
      return response.data.message;
    }
    catch (e) {
      //(e);
      set({is_loading:false});
      return "Failed to Delete"
    }
  },
  deletePosition: async(accessjwt:string,id:number):Promise<string> =>{
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/positions/"
      const method="DELETE";
      const retdata={id}
      const config = {
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: retdata
      };

      const response= await axios(config);
      await get().loadPositions(accessjwt);
      //(response);
      set({is_loading:false});
      return response.data.message;
    }
    catch (e) {
      //(e);
      set({is_loading:false});
      return "Failed to Delete"
    }
  },
  deleteAchivement: async(accessjwt:string,id:number):Promise<string> =>{
    set({is_loading:true})
    try{
      const url=import.meta.env.VITE_BACKEND_HOST+"api/info/achievements/"
      const method="DELETE";
      const retdata={id}
      const config = {
        method: method,
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${accessjwt}`
        },
        data: retdata
      };

      const response= await axios(config);
      await get().loadAchivements(accessjwt);
      //(response);
      set({is_loading:false});
      return response.data.message;
    }
    catch (e) {
      //(e);
      set({is_loading:false});
      return "Failed to Delete"
    }
  }
})


const AllDetailsStore=create<AllDetailsType>()(
  devtools(
    AllDetails
  )
);

export default AllDetailsStore;