// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; 
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import {  ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// function SignUp() {

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const { username, email, password } = formData;

//   const onChange = (e) => {
//     // Update the corresponding field in the formData
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const submitForm = async (e) => {
//     e.preventDefault();
//     const newUser = {
//       username,
//       email,
//       password,
//       profilePic
//     };
//     try {
//       const response = await axios.post('http://localhost:3001/api/auth/signup', newUser);
//       const { success, message } = response.data;
//       if (success) {
//         toast.success(message, {
//           position: toast.POSITION.TOP_RIGHT
//       });
//         navigate('/home');
//       }
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//       toast.error('alredy registered', {
//         position: toast.POSITION.TOP_RIGHT
//     });
//       // alert("Already registered")
//     }
//   };

//   return (
//     <div className='lg:bg-gray-200 min-sm:flex-col w-full min-sm:w-1 flex xl:flex-row flex-col justify-center min-h-screen gap-0 max-container min-sm:gap-[10px]'>
//       {/* left side */}
//       <div className='flex flex-1 justify-center items-center flex-col p-10 '>
//         <h1 className='min:sm:text-sm text-[80px] font-montserrat font-bold text-center'>JuJu</h1>
//         <p className=' min-sm:text-sm text-[40px] font-palanquin text-coral-red  text-center'>A Dating Website</p>
//       </div>
//       {/* right side */}
//       <div className='flex flex-1 flex-col justify-center items-center'>
//         <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
//           <h2 className='text-coral-red text-[25px] font-bold text-center p-2'>
//             Sign Up
//           </h2>
//           <form onSubmit={submitForm}>
//             <input
//               type='text'
//               placeholder='Username'
//               className='mb-3 shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline'
//               value={username}
//               onChange={onChange}
//               name='username'
//             />
//             <input
//               type='email'
//               placeholder='Email address'
//               className='mb-3 shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline'
//               value={email}
//               onChange={onChange}
//               name='email'
//             />
//             <input
//               type='password'
//               className='mb-3 shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline'
//               placeholder='Password'
//               value={password}
//               onChange={onChange}
//               name='password'
//             />
//             <input
//               type='file'
//               className='mb-3 shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline'
//               onChange={onChange}
//               name='profilePic'
//             />
//             <div className='flex justify-center'>
//               <button
//                 type='submit'
//                 className='my-2 bg-coral-red hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
//               >
//                 Get Started
//               </button>
//             </div>
//           </form>
//           <p className='text-center text-gray-600'>
//             Already have an account? <Link to='/' className='text-coral-red'>Login</Link>
//           </p>
//         </div>
//       </div>
//       <div className='w-10'></div>
//     </div>
//   );
// }

// export default SignUp;

import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignUp() {
  const navigate = useNavigate();
  const formRef = useRef();
  
  const submitForm = async (e) => {
    e.preventDefault();
    const userData = new FormData(formRef.current); // Create a FormData object
    const payload = JSON.stringify(Object.fromEntries(userData));
    // for (const items of userData) {
    //   console.log(items[0], items[1]);
    // }
    console.log(payload)

    try {
      const response = await axios.post('http://localhost:3001/api/auth/signup', userData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type for file upload
        },
      });

      const { success, message } = response.data;

      if (success) {
        toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate('/home');
      }

      console.log(response.data);
    } catch (error) {
      console.log(error);
      toast.error('Already registered', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className='lg:bg-gray-200 min-sm:flex-col w-full min-sm:w-1 flex xl:flex-row flex-col justify-center min-h-screen gap-0 max-container min-sm:gap-[10px]'>
      {/* left side */}
      <div className='flex flex-1 justify-center items-center flex-col p-10 '>
        <h1 className='min:sm:text-sm text-[80px] font-montserrat font-bold text-center'>JuJu</h1>
        <p className=' min-sm:text-sm text-[40px] font-palanquin text-coral-red  text-center'>A Dating Website</p>
      </div>
      {/* right side */}
      <div className='flex flex-1 flex-col justify-center items-center'>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <h2 className='text-coral-red text-[25px] font-bold text-center p-2'>
            Sign Up
          </h2>
          <form onSubmit={submitForm} ref={formRef}>
            <input
              type='text'
              placeholder='Username'
              className='mb-3 shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline'
              name='username'
            />
            <input
              type='email'
              placeholder='Email address'
              className='mb-3 shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline'
              name='email'
            />
            <input
              type='password'
              className='mb-3 shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Password'
              name='password'
            />
            <input
              type='file'
              className='mb-3 shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline'
              name="file"
            />
            <div className='flex justify-center'>
              <button
                type='submit'
                className='my-2 bg-coral-red hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              >
                Get Started
              </button>
            </div>
          </form>
          <p className='text-center text-gray-600'>
            Already have an account? <Link to='/' className='text-coral-red'>Login</Link>
          </p>
        </div>
      </div>
      <div className='w-10'></div>
    </div>
  );
}

export default SignUp;
