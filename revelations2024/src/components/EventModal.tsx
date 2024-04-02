import React from 'react'

function EventModal(props:any) {
    const{eventData,setEventModal}=props
  return (
    <div 
    onClick={()=>setEventModal({[`isOpen`]:false,[ `eventData`]:null})}
    className="top-0 left-0 absolute w-[100vw] h-[100vh] bg-[#00000054] flex justify-center items-center">
      
      <div
      onClick={(e:any)=>e.stopPropagation()} 
      className="bg-C55  p-5 max-w-[70%] w-fit shadow-xl bg-white border-[3px] border-black retro-border sm:flex hidden ">
        <div className='min-w-[50%]'>
        <div className='bangers text-[40px]'>{eventData?.event_name}</div>
        <div className='flex flex-row gap-5 mb-5'>
        <div className='bangers px-2  border-[3px] border-black w-fit'>{eventData?.type}</div>
        <div className='text-justify bangers flex flex-row gap-1 my-1'> 
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/></svg>
        <span>{eventData?.venue}</span></div>
        </div>
        <div className='flex flex-row gap-3 items-center'> 
        <div className='bangers mt-1  text-red-500 border-[3px] border-red-500  px-2 w-fit items-center flex '>{eventData?.team_size}</div>
        <div className='bangers flex flex-row items-center gap-1'> <span className='text-red-500 text-[20px]'>{eventData?.rounds} </span>rounds</div>
        </div>
        <div className='bangers my-5 bg-red-300 text-black p-1 w-3/4 px-2'>
          {
            eventData?.judging_criteria?.map((node:any)=>(
              <div className='flex flex-row items-center gap-3'>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m320-240 160-122 160 122-60-198 160-114H544l-64-208-64 208H220l160 114-60 198ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
                </div>
                <div>{node}</div>
              </div>
            ))
          }
        </div>
        <div className='flex flex-row gap-4'>
          {
            eventData?.contact_persons.map((node:any)=>(
              <div className='flex flex-col text-left  '>
                <div className='bangers text-red-500'>{node?.name}</div>
                <div className='bangers'>{node?.phone}</div>
              </div>

            ))
          }

        </div>
        </div>
        <div className='text-justify comic font-semibold'>{eventData?.description}</div>
        
      </div>

      <div className=' mt-10 flex sm:hidden mx-auto bg-C55  p-3 w-[95%] shadow-xl flex-col bg-white border-[3px] border-black max-h-[500px] overflow-y-auto'>
      <div className='bangers text-[30px]'>{eventData?.event_name}</div>
      <div className='flex flex-row gap-5 mb-5'>
        <div className='bangers px-2  border-[3px] border-black w-fit'>{eventData?.type}</div>
        <div className='text-justify bangers flex flex-row gap-1 my-1'> 
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/></svg>
        <span>{eventData?.venue}</span></div>
        </div>
        <div className='flex flex-row gap-3 items-center'> 
        <div className='bangers mt-1  text-red-500 border-[3px] border-red-500  px-2 w-fit items-center flex '>{eventData?.team_size}</div>
        <div className='bangers flex flex-row items-center gap-1'> <span className='text-red-500 text-[20px]'>{eventData?.rounds} </span>rounds</div>
        </div>
        <div className='bangers my-5 bg-red-300 text-black p-1 w-full px-2 flex-col flex gap-1'>
          {
            eventData?.judging_criteria?.map((node:any)=>(
              <div className='flex flex-row items-center gap-3'>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m320-240 160-122 160 122-60-198 160-114H544l-64-208-64 208H220l160 114-60 198ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
                </div>
                <div>{node}</div>
              </div>
            ))
          }
        </div>

        <div className=' mx-auto w-[80%] flex sm:hidden flex-row gap-1 items-center my-2'>
                <div className='min-h-[2px]  bg-red-300  flex-1'></div>
                <div className=' text-red-500 bangers px-2'>Description</div>
                <div className='min-h-[2px] bg-red-300  flex-1'></div>
        </div>

        <div className='text-justify comic font-semibold text-[12px] '>{eventData?.description}</div>
              <div className=' mx-auto w-[70%] flex sm:hidden flex-row gap-1 items-center my-2'>
                <div className='min-h-[2px]  bg-red-300  flex-1'></div>
                <div className='min-h-[5px] min-w-[5px] rounded-full bg-red-500 '></div>
                <div className='min-h-[2px] bg-red-300  flex-1'></div>
              </div>
        <div className='flex flex-row gap-4'>
          {
            eventData?.contact_persons.map((node:any)=>(
              <div className='flex flex-col text-left  '>
                <div className='bangers text-red-500'>{node?.name}</div>
                <div className='bangers'>{node?.phone}</div>
              </div>

            ))
          }

        </div>

      </div>



     </div>
  )
}

export default EventModal
