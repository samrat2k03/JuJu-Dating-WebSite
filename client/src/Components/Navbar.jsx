import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useRef } from "react"
import { AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { GiSettingsKnobs, GiJigsawBox } from 'react-icons/gi'


const Navbar = () => {
  const profileObject = useRef();
  const display = () => {
    const element = profileObject.current;

    if (element.classList.contains('max-h-0')) {
      // Expand the element
      element.classList.remove('max-h-0', 'opacity-0');
      element.classList.add('max-h-full', 'opacity-100');
    } else {
      // Collapse the element
      element.classList.remove('max-h-full', 'opacity-100');
      element.classList.add('max-h-0', 'opacity-0');
    }
  };
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
    <div className="absolute top-0 w-screen flex justify-between px-10 py-3 ">
      <div className="logo sm:text-sm md:lg:text-4xl  font-montserrat font-bold text-center">JuJu</div>

      <div className="dropdown flex flex-col items-end" onMouseEnter={display} onMouseLeave={display}>
        <div className="user h-12 w-12 border-2 border-amber-700 rounded-full bg-[url('/profile.jpg')] bg-cover bg-center float-right"></div>
        <div className="dropdown-menu bg-white mt-2 rounded-md overflow-hidden transition-max-h-opacity duration-500 ease-in-out max-h-0 opacity-0" ref={profileObject}>
          <ul>
            <li className="flex justify-left leading-3 cursor-pointer m-1 p-1 rounded transition-colors duration-500 ease-in-out hover:bg-red-50">
              <CgProfile />
              <span className="mx-3 "> Profile</span>
            </li>
            <li className="flex justify-left leading-3 cursor-pointer m-1 p-1 rounded transition-colors duration-500 ease-in-out hover:bg-red-50">
              <GiSettingsKnobs />
              <span className="mx-3 "> Preferences</span>
            </li>
            <li className="flex justify-left leading-3 cursor-pointer m-1 p-1 rounded transition-colors duration-500 ease-in-out hover:bg-red-50">
              <GiJigsawBox />
              <span className="mx-3 "> Matches</span>
            </li>
            <li className="flex justify-left leading-3 cursor-pointer m-1 p-1 rounded transition-colors duration-500 ease-in-out hover:bg-red-50">
              <AiOutlineSetting />
              <span className="mx-3 "> Settings</span>
            </li>
            <li className="flex justify-left leading-3 cursor-pointer m-1 p-1 rounded transition-colors duration-500 ease-in-out hover:bg-red-50">
              <AiOutlineLogout />
              <button onClick={Logout} className="mx-3 ">Logout</button>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}
export default Navbar