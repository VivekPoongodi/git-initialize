/** @format */

import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import BrandLogo from "./images/image-removebg-preview (21) 1.svg";
import Cardimg from "./images/Group 3.png";
import Earnings from "./images/Small_Earnings.png";
function ColoredSignin() {
  const inputStyles = "md:w-[400px] w-full p-2 rounded-[10px] block border";
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className='flex justify-center'>
        <div className=' md:w-[50%] px w-full flex justify-center'>
          <div>
            {/* sign in area */}
            <img src={BrandLogo} className=' -ml-11 mb-6' alt='' />
            <div className=' sm:m-10 m-0 space-y-8'>
              <h1 className='font-bold text-4xl'>signin</h1>
              <p className=' text-gray-500'>
                Don,t have an account?
                <span className='underline text-black'>Create Now</span>
              </p>

              <form className=' space-y-10'>
                <div>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='text'
                    placeholder='Enter your Email'
                    className={inputStyles}
                  />
                </div>

                <div>
                  <label htmlFor='Password'>Password</label>
                  <div className='flex border rounded-[10px] overflow-hidden'>
                    <input
                      type={visible ? "password" : "text"}
                      className='md:w-[360px] w-full p-2 border-none  block'
                      placeholder='Enter your Password'
                    />
                    <div
                      className=' text-2xl p-2 border'
                      onClick={() => setVisible(!visible)}>
                      {visible ? <BiHide /> : <BiShow />}
                    </div>
                  </div>
                </div>

                <div className='flex justify-between'>
                  <div>
                    <input type='checkbox' />
                    <label htmlFor='checkbox' className=' text-gray-500'>
                      Remainder me
                    </label>
                  </div>
                  <a href='#' className='underline'>
                    Forgot Password
                  </a>
                </div>
                <button className='md:w-[400px] w-full bg-green-950 text-white text-lg font-semibold rounded-[10px] p-1'>
                  Sign in
                </button>
              </form>

              <div className='text-center mt-12 text-gray-500  relative'>
                <p className='absolute bg-white px-2 ml-[45%] -mt-3'>Or</p>
                <hr />
              </div>
              <div className='text-lg text-center border p-1 rounded-3xl'>
                <FcGoogle className='inline' />
                <span className=' pl-5'>continue with google</span>
              </div>
              <div className=' text-lg text-center border p-1 rounded-3xl'>
                <FaFacebook className='inline' />
                <span className=' pl-5'>continue with facebook</span>
              </div>
            </div>
          </div>
        </div>

        {/* aadvertisment design area */}
        <div className='w-[50%] lg:block hidden bg-green-950'>
          <p className=' text-center text-white'>
            <BiSupport className='inline' /> support
          </p>
          <div className='flex justify-center mt-20'>
            <div className='bg-white w-[60%] relative rounded-md'>
              <div className='w-[70%] p-6'>
                <h1 className='font-bold text-2xl'>
                  Reach financial
                  <br />
                  goals faster
                </h1>
                <p>
                  Use your Venus card around the world with no hidden fees.
                  Hold, transfer and spend money.
                </p>
                <div className='text-center m-1'>
                  <button className='bg-green-950 rounded-2xl p-1 text-white px-9'>
                    Learn more
                  </button>
                </div>
                <img
                  src={Earnings}
                  width={150}
                  className='absolute ml-44'
                  alt=''
                />
                <img
                  src={Cardimg}
                  className=' absolute -mt-[200px] ml-[225px]'
                  width={130}
                  alt=''
                />
              </div>
            </div>
          </div>

          <h1 className='text-center text-white mt-14 font-bold text-2xl'>
            Introducing New Features
          </h1>
          <p className='text-center mt-10 px-28 text-white'>
            Analyzing previous trends ensures that businesses always make the
            right decision. And as the scale of the decision and its impact
            magnifies...
          </p>
        </div>
      </div>
    </>
  );
}

export default ColoredSignin;
