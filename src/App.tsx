import { ThemeProvider } from "@/components/theme-provider"
import Login from "./pages/Login"
import Navbar from "./components/my_components/Navbar"
import { Route, Routes } from "react-router"
import { Toaster } from "@/components/ui/sonner"
import Authenticated from "./components/redirects/Authenticated"
import Homepage from "./pages/Homepage"
import NotAuthenticated from "./components/redirects/NotAuthenticated"
import { useEffect } from "react"
import userAuthStore from "./store/userstore"
import Signup from "./pages/Signup"
import PrivacyPolicy from "./pages/PrivacyPolicyExtension"


function App() {
  const {refresh_tokens}=userAuthStore()
  useEffect(()=>{
    refresh_tokens();
  },[])
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar/>
      <Routes>
      <Route path="/login" element={<NotAuthenticated><Login/></NotAuthenticated>} />
      <Route path="/signup" element={<NotAuthenticated><Signup/></NotAuthenticated>} />
      <Route path="/" element={<Authenticated><Homepage/></Authenticated>}/>
      <Route path="/privacy-policy-extension" element={<PrivacyPolicy/>}/>

    </Routes>
    <Toaster />
    </ThemeProvider>
  )
}

export default App
