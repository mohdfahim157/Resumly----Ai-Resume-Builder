import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import {BuilderContextProvider} from "../context/Builder.context.ts"
import { useState } from "react";

export default function App() {
 interface BuilderData {
  theme: string;
}
  const [data,setData] = useState<BuilderData>({theme:"blue"})


  return (
    <>
    <BuilderContextProvider value={{data,setData}}>    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      </BuilderContextProvider>
    </>
  )
}

