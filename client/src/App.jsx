import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sign-in" exact element={<Signin />} />
        <Route path="/sign-up" exact element={<SignUp />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
