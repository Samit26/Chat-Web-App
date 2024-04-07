import {Routes,Route,Navigate} from "react-router-dom"
import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from "./context/AutoContext"

function App() {
  
  const {authUser} = useAuthContext();
  return (
    <>
      <div className="p-4 h-screen flex item-center justify-center">
        <Routes>
          <Route path="/" element = {authUser ? <Home /> : <Navigate to={"/login"} />} />
          <Route path="/signup" element = {authUser ? <Navigate to="/" /> : <SignUp />}  />
          <Route path="/login" element = {authUser ? <Navigate to="/" /> : <Login/>} />
        </Routes>
        <Toaster />
     
      </div>
      
    </>
  )
}

export default App
