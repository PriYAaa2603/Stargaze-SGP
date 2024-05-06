/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'
import { useSelector } from 'react-redux';
import OAuth from '../Components/OAuth';
import back11 from '/blackbg.jpg'





export default function SignIn() {
  const [formData, setFormData] = useState({})
  const { loading, error } = useSelector((state) => state.user)


  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })


  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());

      const res = await fetch('/api/auth/signin',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',

          },
          body: JSON.stringify(formData),

        }


      )
      const data = await res.json();
      console.log(data);
      if (data.success == false) {
        dispatch(signInFailure(data.message))
        return;
      }
      dispatch(signInSuccess(data))

      Navigate('/home')
    }
    catch (error) {
      dispatch(signInFailure(error.message))

    }

  };
  return (
    <div className='  flex items-center justify-center h-screen' style={{ backgroundImage: `url(${back11})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className=' p-10 mt-14  w-[500px]  max-w-lg mx-auto rounded-xl  shadow-xl  border-2'>
        <h1 className=' text-[#91a0cf] text-3xl text-center font-semibold mb-8'>Sign In</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4   items-center'>



          <input type='email'
           placeholder='email'
            className=' border-2  focus:outline-none text-slate-200 p-2 rounded-lg w-full'
            id='email'
            onChange={handleChange}
            style={{ backgroundImage: `url(${back11})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />

          <input type='password'
            placeholder='password'
            className=' border-2  focus:outline-none text-slate-200 p-2 rounded-lg w-full'
             id='password'
            onChange={handleChange}
            style={{ backgroundImage: `url(${back11})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
          />

          <button disabled={loading} className=
            'bg-[#070d1f] mt-4 text-white p-2 rounded-lg w-full uppercase hover:opacity-95 disabled:opacity-80'>
            {loading ? 'Loading...' : 'Sign In'}</button>

            <span className='text-center text-slate-200'>or</span>
          <OAuth />

        </form>
        <div className="flex  text-md gap-2 mt-8 text-blue-400">
          <p>Don&apos;t have an account?</p>

          <Link to={"/sign-up"}>
            <span className='text-blue-100'>Sign up</span>
          </Link>

          {error && <p className='text-red-500 mt-5'>{error.toString()}</p>}

        </div>
      </div>
    </div>
  )
}
