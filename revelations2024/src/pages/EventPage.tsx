import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { EVENTS } from '../data/events'
import EventModal from '../components/EventModal'

function EventPage() {
  const [eventModal,setEventModal] = useState<any>({isOpen:false, eventData:null})

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className='flex flex-col w-[100vw] h-[100vh] '>
      <div className='relative bg-[#00000060]  max-h-[100vh] overflow-y-auto flex-1 flex flex-col'>
        <Navbar activePage="events"/>
        <div 
         data-aos="fade-down" data-aos-duration="1000"
         className='bangers text-[40px] sm:text-[60px] text-center m-1 shadow-lg mt-14 text-white  drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,1)]'>
    
            E v e n t s
          </div>
        <div
          data-aos="fade-down" data-aos-duration={1000}
         className='flex-1 px-2 sm:px-5 flex-row p-1 flex gap-3 flex-wrap justify-center m-1
         bg-[#00000060] 
        pt-10 '>

          {
            EVENTS?.map((node:any,i:any)=>(
              <>
              <div key={node.event_id}
             
               className='hover:shadow-xl hover:shadow-red-500  border-[3px] cursor-pointer border-black bg-[#dcdcdc] min-w-[300px] h-fit flex flex-col p-1 w-full sm:w-auto' 
               onClick={()=>setEventModal({[`isOpen`]:true,[`eventData`]:node})}
               >
                <div className='bangers text-[25px]  sm:text-[30px] p-1 bg-red-500 text-white '>
                  <div className='drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,1)] '>
                  {node?.event_name}
                  </div>
                </div>
                <div className='flex flex-row gap-2 text-[18px] sm:text-[20px] p-1 bangers'>
                  <span className='text-red-500'>Venue :</span>
                  <span className=''>{node?.venue}</span>
                </div>
                <div className='flex flex-row gap-2 bangers text-[18px] sm:text-[20px] p-1 bangers'>
                <span className='text-red-500'>Type :</span>
                  <span className=''>{node?.type}</span>
                
                </div>

              </div>
              {
                i!==EVENTS.length-1?
              <div className=' mx-auto w-[70%] flex sm:hidden flex-row gap-1 items-center'>
                <div className='min-h-[2px]  bg-gray-300  flex-1'></div>
                <div className='min-h-[10px] min-w-[10px] rounded-full bg-red-500 '></div>
                <div className='min-h-[2px] bg-gray-300  flex-1'></div>
              </div>:null
              }
              </>
            ))
          }

          


        

        </div>
        <Footer/>
      </div>
        {
          eventModal.isOpen?
          <EventModal
          setEventModal={setEventModal}
          eventData={eventModal.eventData}
          />:null
        }  
    </div>
  )
}

export default EventPage
