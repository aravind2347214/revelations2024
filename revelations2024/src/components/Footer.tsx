import React from 'react'

function Footer() {
  return (
    <div className='flex flex-row  w-full px-2 py-1 bg-[#000000ec] justify-center'>
        <div className='flex flex-row p-1 text-[12px] items-center px-2 gap-2  '>
            <img className='bg-blend-color-burn' src={require("../assets/christlogo.png")} width={30} height={30}  alt="" />
            <div className='text-white comic'>{`CHRIST (Deemed to be university) PG Computer Science Dept`}
            </div>
        </div>

        {/* <div className='flex flex-row items-center px-2'>
            <div className='rounded-[40%] p-[6px] bg-[#E31F2C] flex items-center justify-center border-[2px] border-black'>
            <InstagramIcon height="20" width="20" pathColor={"white"}/>

            </div>

        </div> */}
      
    </div>
  )
}

export default Footer
