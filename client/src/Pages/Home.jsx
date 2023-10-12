import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Navbar from '../Components/Navbar'
import axios from "axios";
const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  const verifyCookie = async () => {

    try {
      const { data } = await axios.post(
        "http://localhost:3001/",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;

      console.log("Response data:", data); // Log the entire response data
      console.log("User object:", user); // Log the user object


      setUsername(user.username);
      console.log(status)
      return status
        ? console.log(`Hello ${user.username}`)
        : (removeCookie("token"), navigate("/"));
    } catch (error) {
      console.log(error);
    }
  };
  
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };
  return (
    <>
      <div className="home_page px-10 py-20 flex flex-wrap justify-around items-center overflow-hidden min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
        <Navbar/>
        <div className="title flex flex-col justify-center align-center">
          <h4 className="text-8xl font-bold">Find the </h4>
          <h4 className="text-8xl font-bold text-red-500">Love </h4>
          <h4 className="text-8xl font-bold"> of your life </h4>
        </div>
        <img src="/dating-couple-1.png" alt="" className="h-2/6 w-2/6" />
        {/* <button onClick={Logout}>LOGOUT</button> */}
      </div>
    </>
  );
};

export default Home;