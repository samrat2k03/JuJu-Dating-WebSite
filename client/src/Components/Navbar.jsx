import { useRef } from "react"
import { AiOutlineSetting } from 'react-icons/ai'
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


  return (
    <div className="absolute top-0 w-screen flex justify-between px-10 py-3 ">
      <div className="logo">Hello</div>
      <div className="dropdown" onMouseEnter={display} onMouseLeave={display}>
        <div className="user h-12 w-12 border-2 border-amber-700 rounded-full bg-[url('/profile.jpg')] bg-cover bg-center"></div>
        <div className="dropdown-menu bg-white mt-2 rounded-md overflow-hidden transition-max-h-opacity duration-500 ease-in-out max-h-0 opacity-0" ref={profileObject}>
          <ul>
            {/* <li><a href="">Profile</a></li>
            <li><a href="">Preferences</a></li>
            <li><a href="">Matches</a></li> */}
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
          </ul>
        </div>

      </div>
    </div>
  )
}
export default Navbar