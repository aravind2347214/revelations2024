import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomePageLeagues from '../components/HomePageLeagues'
import HomePageEvents from '../components/HomePageEvents'

function HomePage() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className='flex flex-col w-[100vw] overflow-x-hidden'>
      <div className='bg-[#00000060]'>
        <Navbar activePage="home"/>
        <div className='flex flex-col justify-center flex-1 py-10 mt-10'>
          <div className='text-center bangers max-h-[300px] items-center hidden xs:flex justify-center py-10 mb-10'>
            {/* <Revlogo  scaleValue={"0.6"}/> */}
            <div data-aos="fade-down" data-aos-duration="1000" className=' color-animation bangers flex-row items-baseline flex text-[200px]  drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,1)]'>
              REVELATIONS
              <span className='text-[30px]'>' 24</span>
            </div>
          </div>

          <div className='text-center bangers max-h-[300px] items-center flex xs:hidden justify-center py-10 mb-4'>
            {/* <Revlogo  scaleValue={"0.95"}/> */}
            <div data-aos="fade-down" data-aos-duration="1000" className=' color-animation bangers flex-row items-baseline flex text-[70px]  drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,1)]'>
              REVELATIONS
              <span className='text-[25px]'>' 24</span>
            </div>

          </div>

          <div data-aos="fade-up" data-aos-duration="1000" className='bg-[#00000080] px-5 mb-10 text-center !py-[20px] sm:py-5 md:text-center xs:px-10 lg:mt-0 comic font-semibold text-white comic w-[95%] mx-auto text-[14px] sm:text-[20px]'>
“Revelations 2024” is an Intra-departmental
fest that is organized by the Department of
Computer Science for the Post graduate
students every year. The objective of this event
is to provide a platform for the students to
show case their talents in technical as well as
non-technical events. The theme for
“Revelations 2024” is “Marvel universe”.
<br/><br/>
The students were divided into seven leagues –
ironman, captain america, thor, black widow,
scarlet witch, spiderman and dr. strange .
In and around every event, there were about
300+ students competing against each other.
The fest has 10 events in total. The preliminary
rounds for all the events are conducted from
the 23rd of march,2024. The finalists of each
event are made to compete against each other
on the final day, that is the 13th of April.
          </div>
        <div className='bangers text-[35px]  xs:mx-10 xs:text-left text-center  text-white drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,1)]' data-aos="fade-down" data-aos-duration="1000">Leagues</div>  
        <HomePageLeagues/>
        </div>
        <HomePageEvents/> 
        <Footer/>
      </div>
    </div>
  )
}

export default HomePage
