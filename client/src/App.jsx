import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./Pages/Home"
import LoginPage from "./Pages/LoginPage"
import SignUp from "./Pages/SignUp"

function App() {
 return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< LoginPage/>} />
        <Route path="/signup" element={< SignUp/>} />
        <Route path="/home" element={< Home/>} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
