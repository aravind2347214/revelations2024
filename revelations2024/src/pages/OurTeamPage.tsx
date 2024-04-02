import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { COMMITTEE, CORE_TEAM, EVENT_HEADS, FACULTY } from '../data/ourteam'

function OurTeamPage() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='flex flex-col w-[100vw] h-[100vh]'>
    <div className='bg-[#00000060] max-h-[100vh] overflow-y-auto flex-1 flex flex-col bangers'>
    <Navbar activePage="our-team"/>
    <div className='flex flex-col justify-center flex-1 gap-5 py-5 pb-10 mt-12 text-center sm:px-10 sm:pb-5'
     data-aos="fade-down" data-aos-duration="1000"
  >
       

      <div className='flex flex-col sm:gap-2 bg-[#00000087] p-1 sm:p-2 pb-5'>
        <div className='text-[40px] sm:text-[60px] text-white drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,1)]'>FACULTY IN CHARGE</div>
        <div className='comic text-white justify-center font-semibold text-[16px] sm:text-[20px]'>{FACULTY.description}</div>
        <div className='flex flex-row flex-wrap justify-center gap-3 mt-2'>
          {/* ------------------ */}
          {
            FACULTY.members?.map((node:any)=>(
              <div className='flex flex-col bg-gray-200 p-2  w-[45%]  sm:w-fit mb-5  border-[3px] border-black hover:shadow-xl hover:shadow-yellow-700'>
              <div className='text-[18px] sm:text-[25px] px-2 bg-yellow-700 text-white border-[2px] border-black'>
                <div className='drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,1)] '>
                {node.name}
                </div>
              </div>
              <div className='text-[14px]'>{node.role}</div>
              {/* <div className='text-yellow-800'>2347210</div> */}
            </div>
            ))
          }
          {/* ------------------ */}
        </div>
      </div>

      <div className=' mx-auto w-[70%] flex flex-row gap-1 items-center'>
                <div className='min-h-[2px]  bg-gray-300  flex-1'></div>
                <div className='min-h-[10px] min-w-[10px] rounded-full bg-yellow-700'></div>
                <div className='min-h-[2px] bg-gray-300  flex-1'></div>
      </div>

      <div className='flex flex-col sm:gap-2 bg-[#00000087] p-1 sm:p-2 pb-5 '>
        <div className='text-[40px] sm:text-[60px] text-white drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,1)]'>Core Team</div>
        <div className='comic text-white justify-center font-semibold text-[16px] sm:text-[20px]'>{CORE_TEAM.description}</div>
        <div className='flex flex-row flex-wrap justify-center gap-3 mt-2'>
          {/* ------------------ */}
          {
            CORE_TEAM.members.map((node:any)=>(
              <div className='flex flex-col bg-gray-200 p-2  w-[45%]  sm:w-fit mb-5   border-[3px] border-black hover:shadow-xl hover:shadow-yellow-700'>
              <div className='text-[18px] sm:text-[25px] px-2 bg-yellow-700 text-white border-[2px] border-black'>
                <div className='drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,1)] '>
                {node.name}
                </div>
              </div>
              <div className='text-[14px]'>{node.section}</div>
              {/* <div className='text-yellow-800'>2347210</div> */}
            </div>
            ))
          }
          {/* ------------------ */}
        </div>
      </div>

      <div className=' mx-auto w-[70%] flex flex-row gap-1 items-center'>
                <div className='min-h-[2px]  bg-gray-300  flex-1'></div>
                <div className='min-h-[10px] min-w-[10px] rounded-full bg-yellow-700'></div>
                <div className='min-h-[2px] bg-gray-300  flex-1'></div>
      </div>

      <div className='flex flex-col sm:gap-2 bg-[#00000087] p-1 sm:p-2 pb-5'>
        <div className='text-[40px] sm:text-[60px] text-white drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,1)]'>COMMITTEE MEMBERS</div>
        <div className='comic text-white justify-center font-semibold text-[16px] sm:text-[20px]'>{COMMITTEE.description}</div>
        <div className='flex flex-row flex-wrap justify-center gap-3 mt-2'>
          {/* ------------------ */}
          {
            COMMITTEE.members.map((node:any)=>(
              <div className='flex flex-col bg-gray-200 p-2  w-[45%]  sm:w-fit mb-5  border-[3px] border-black hover:shadow-xl hover:shadow-yellow-700'>
              <div className='text-[18px] sm:text-[25px] px-2 bg-yellow-700 text-white border-[2px] border-black'>
                <div className='drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,1)] '>
                {node.name}
                </div>
              </div>
              <div className='text-[14px]'>{node.section}</div>
              {/* <div className='text-yellow-800'>2347210</div> */}
            </div>
            ))
          }
          {/* ------------------ */}
        </div>
      </div>

      <div className=' mx-auto w-[70%] flex flex-row gap-1 items-center'>
                <div className='min-h-[2px]  bg-gray-300  flex-1'></div>
                <div className='min-h-[10px] min-w-[10px] rounded-full bg-yellow-700 '></div>
                <div className='min-h-[2px] bg-gray-300  flex-1'></div>
      </div>
      <div className='flex flex-col sm:gap-2 bg-[#00000087] p-1 sm:p-2 pb-5 mb-5 sm:mb-0'>
        <div className='text-[40px] sm:text-[60px] text-white drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,1)]'>EVENT HEADS</div>
        <div className='comic text-white justify-center font-semibold text-[16px] sm:text-[20px]'>{EVENT_HEADS.description}</div>
        <div className='flex flex-row flex-wrap justify-center gap-3 mt-2'>
          {/* ------------------ */}
          {
           EVENT_HEADS.members.map((node:any)=>(
              <div className='flex flex-col bg-gray-200 p-2    w-[45%] sm:w-fit mb-5  border-[3px] border-black hover:shadow-xl hover:shadow-yellow-700'>
              <div className='text-[18px] sm:text-[25px] px-2 bg-yellow-700 text-white border-[2px] border-black'>
                <div className='drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,1)] '>
                {node.name}
                </div>
              </div>
              <div className='text-[14px]'>{node.section}</div>
              {/* <div className='text-yellow-800'>2347210</div> */}
            </div>
            ))
          }
          {/* ------------------ */}
        </div>
      </div>

    </div>

    <Footer/>
    </div>
</div>
  )
}

export default OurTeamPage
