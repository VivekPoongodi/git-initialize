/** @format */

import React from "react";
import SideImg from "./chris-lee-70l1tDAI6rM-unsplash 1.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
function LoginDesign() {
  const block = "block border sm:w-96 w-56 py-1 rounded-lg";
  return (
    <>
      <div className='flex justify-between'>
        {/* login area */}
        <div className='flex justify-center w-full'>
          <div className=' mt-9'>
            <h1 className=' font-semibold text-3xl mb-10'>Get Started Now</h1>
            <form className='space-y-8'>
              <div>
                <label htmlFor='name'>Name</label>
                <input type='name' className={block} />
              </div>

              <div>
                <label htmlFor='email'>Email</label>
                <input type='email' className={block} />
              </div>

              <div>
                <label htmlFor='password'>password</label>
                <input type='password' className={block} />
              </div>

              <input type='checkbox' />
              <label htmlFor='checkbox'>
                {" "}
                I agree to the{" "}
                <span className=' underline'>terms & policy</span>
              </label>
              <button className='block bg-green-800 p-1 rounded-lg sm:w-96 w-56 font-semibold text-white'>
                SignUp
              </button>
            </form>

            {/* or login options */}
            <div className=' space-y-10'>
              <div className='text-center mt-12 text-gray-400  relative'>
                <p className='absolute bg-white px-2 ml-[45%] -mt-3'>Or</p>
                <hr className='border border-black' />
              </div>

              <div className=' sm:flex block justify-between'>
                <p className='text-center border border-gray-300 rounded-lg block p-1  lg:px-4  font-semibold sm:my-0 my-2'>
                  <FcGoogle className='inline text-lg' /> signup with google
                </p>
                <p className='text-center border border-gray-300 rounded-lg block p-1 lg:px-4 font-semibold sm:my-0 my-2'>
                  <FaApple className='inline text-lg' /> signin with Apple
                </p>
              </div>
              <p className='text-center font-semibold'>
                have an account? <span className='text-blue-500'>sign in</span>
              </p>
            </div>
          </div>
        </div>
        {/* image area */}
        <div className=' md:block  hidden'>
          <img src={SideImg} className='backgroundimg' alt='' />
        </div>
      </div>
    </>
  );
}

export default LoginDesign;
