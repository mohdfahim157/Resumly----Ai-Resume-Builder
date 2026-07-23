import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import { BuilderContextProvider } from "../context/Builder.context.tsx";
import Protected from "./components/Protected/Protected.tsx";

export default function App() {

  return (
    <>
    <BuilderContextProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/dashboard" element={<Protected><Dashboard/></Protected>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      </BuilderContextProvider>
    </>
  )
}

