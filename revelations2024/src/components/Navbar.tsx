import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props:any) {
    const { activePage}=props
  return (
    <div className='flex fixed w-full z-[20] flex-row p-1 px-4 bg-[#000000da] h-[50px] items-center justify-between'>
    <Link to={"/"}>
    <div className='font-bold  text-[30px]  w-fit max-w-[200px]'>
        <img src={require("../assets/navbarlogo.png")}  className='border-[2px] border-black w-[100px] h-[40px] sm:scale-100 scale-[0.8]' alt="" />
        {/* <div className=' text-[18px] sm:text-[30px] bangers color-animation cursor-pointer'>R V L T N S</div> */}
    </div>
    </Link>    
    <div className='flex flex-row items-center gap-5 text-[14px] sm:text-[20px]' data-aos="slide-left" data-aos-duration="1000">
    <Link to={"/events"}>
       <div className={`
       bangers hover:underline hover:text-gray-400  cursor-pointer underline-offset-2 ${activePage==="events"?"text-red-500  underline":"text-white"}
       `}>
       Events
       </div>
      </Link> 
       <Link to={"/schedule"}>
       <div className={`hover:underline hover:text-gray-400 cursor-pointer bangers underline-offset-2 ${activePage==="schedule"?"text-blue-700  underline":"text-white"}`}>
       Schedule
       </div>
       </Link>
       <Link to={"/our-team"}>
       <div className={`hover:underline hover:text-gray-400  bangers cursor-pointer underline-offset-2 ${activePage==="our-team"?"text-yellow-600  underline":"text-white"}`}>
       Our team
       </div>
       </Link>
    </div>
   </div>
  )
}

export default Navbar
