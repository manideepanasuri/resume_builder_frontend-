import {z} from "zod"
export const formSchema = z.object({
  email: z.string().email("Enter valid a Email"),
  password: z
    .string()
    .min(6, "Minumum 6 characters")
    .max(16, "Maximum 16 charactesrs"),
});

export const userregSchema = z.object({
  email: z.string().email("Enter valid a Email"),
  name:z.string().min(3,"Minumum 3 characters"),
  password: z
    .string()
    .min(6, "Minumum 6 characters")
    .max(16, "Maximum 16 charactesrs"),
  confirmpassword:z.string()
  
}).refine((data) => data.password === data.confirmpassword, {
  path: ["confirmpassword"],
  message: "Passwords do not match",
});


export type Project = Project2[]

export interface Project2 {
  id: number
  name: string
  description: string
  dates: string
  tools: string
  descriptions: Description[]
}

export interface Description {
  id: number
  description: string
}


export type Experiences = Experiences2[]

export interface Experiences2 {
  id: number
  company: string
  city: string
  role: string
  dates: string
  descriptions: Description[]
}


export interface Userdetails {
  id: number
  rollno: string
  program: string
  course: string
  collage: string
  user: number
}


export interface ContactDetails {
  id: number
  phone: string
  email: string
  student_email: string
  github: string
  linkedin: string
  user: number
}


export type Education = Education2[]

export interface Education2 {
  id: number
  institution: string
  degree: string
  board: string
  cgpa: string
  year: string
  user: number
}


export interface Skills {
  language: string
  developer_tools: string
  framework: string
  cloud_database: string
  soft_skills: string
  coursework: string
  area_of_interest: string
  id: number
}


export type Position = Position2[]

export interface Position2 {
  id: number
  position: string
  club_event: string
  tenure: string
  user: number
}



export type Achivements = Achivements2[]

export interface Achivements2 {
  id: number
  achievement: string
  description: string
  dates: string
  user: number
}



export const userDetailsUpdate=z.object(
  {
    rollno:z.string().min(3,"Atleast 3 Characters"),
    program:z.string().min(3,"Atleast 3 Characters"),
    course:z.string().min(3,"Atleast 3 Characters"),
    collage:z.string().min(3,"Atleast 3 Characters"),
  }
)

export const contactUpdate=z.object(
  {
    phone:z.string().min(3,"Atleast 3 Characters"),
    email:z.string().email("Enter valid Email"),
    student_email:z.string().email("Enter valid Email"),
    github:z.string().min(3,"Atleast 3 Characters"),
    linkedin:z.string().min(3,"Atleast 3 Characters")
  }
)

export const skillsUpdate=z.object({
  language: z.string(),
  developer_tools: z.string(),
  framework: z.string(),
  cloud_database: z.string(),
  soft_skills: z.string(),
  coursework: z.string(),
  area_of_interest: z.string()
})

export const projectsUpdate=z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  dates: z.string(),
  tools: z.string(),
  descriptions: z.string()
})
export const educationUpdate=z.object({
  id: z.number(),
  institution: z.string(),
  degree: z.string(),
  board: z.string(),
  cgpa: z.string(),
  year: z.string(),
})
export const experienceUpdate=z.object({
  id: z.number(),
  company: z.string(),
  city: z.string(),
  role: z.string(),
  dates: z.string(),
  descriptions: z.string(),
})
export const achivementsUpdate=z.object({
  id: z.number(),
  achievement: z.string(),
  description: z.string(),
  dates: z.string(),
})
export const positionsUpdate=z.object({
  id: z.number(),
  position: z.string(),
  club_event: z.string(),
  tenure: z.string()
})

