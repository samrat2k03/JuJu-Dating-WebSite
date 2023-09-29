import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
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
      <div className="home_page">
        <h4>
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
    </>
  );
};

export default Home;