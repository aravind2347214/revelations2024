import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SCHEDULE } from '../data/schedule'

function SchedulePage() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] '>
      <div className='bg-[#00000060] h-full max-h-[100vh] overflow-y-auto flex-1 flex flex-col'>
    <Navbar activePage="schedule"/>
    <div 
    data-aos="fade-down" data-aos-duration="1000"
    className='bangers text-[40px] sm:text-[60px] text-center mt-14 text-white  drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,1)] '>
      S c h e d u l e        
    </div>
        <div className='flex-1  px-5 p-1 flex gap-3 flex-col sm:flex-row justify-center pt-1 w-full sm:w-[85%] mx-auto mt-5'
         data-aos="fade-down" data-aos-duration="1000"

        >
          {
            SCHEDULE.map((day:any,i:any)=>(
              <>
              <div className= 'hover:shadow-xl hover:shadow-blue-500 flex flex-col sm:mb-5  p-2 min-w-[33.3%] bg-[#00000060]'
              >
                <div className='bangers text-[30px] text-white  bg-blue-900 my-[2px] px-2' 
                >
                  <div className='drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,1)]'>
                  {day.date}
                  </div>
                  </div>
                <div className='flex flex-col max-h-[500px] overflow-y-auto'>

                {
                  day.events.map((event: any,i:any) =>(
                    <div 
                    
                    key={event.time} className=' py-2 flex flex-col gap-1 bangers  mb-2 p-1 border-[3px] border-black bg-gray-200'>
                      <div className='flex flex-row items-center retro-border p-1 border-[3px] border-black justify-between bg-white'>
                        <div className='text-blue-900 text-[25px] font-medium '>{event.name}</div>
                        <div className='comic bg-black px-1 text-white font-bold text-[15px]'>{event.round}</div>
                      </div>
                      <div className='flex flex-row items-center justify-between gap-2 mx-2 mt-3 '>
                        <div className='text-blue-900 '>{event.timings}</div>
                        <div className='flex flex-row items-center text-gray-500 '>Venue : <span className='bg-blue-900 px-2 ml-1 text-[12px] text-white comic font-semibold'>{event.venue}</span></div>
                      </div>
                    </div>
                  ))
                }
                </div>
              </div>
              {
                i!==SCHEDULE.length-1?
              <div className=' mx-auto w-[70%] flex flex-row gap-1 items-center'>
                <div className='min-h-[2px]  bg-gray-300  flex-1'></div>
                <div className='min-h-[10px] min-w-[10px] rounded-full bg-blue-900 '></div>
                <div className='min-h-[2px] bg-gray-300  flex-1'></div>
              </div>:null
              }
              
              </>
            ))
          }

        </div>
    <Footer/>
      </div>

</div>
  )
}

export default SchedulePage
