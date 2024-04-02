import {CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import React from 'react'
import "pure-react-carousel/dist/react-carousel.es.css";
import { EVENTS } from '../data/events';
import { Link } from 'react-router-dom';


function HomePageEvents() {

  return (
    <div className='pb-3 mx-5 '>

        <div className='bangers text-[35px]  xs:mx-10 xs:text-left text-center  text-white drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,1)]'>Events</div> 
  
        {/* ---------Mobile Carousel----------- */}
        <div className='block sm:hidden'>
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={EVENTS.length}
        visibleSlides={1}
        orientation='horizontal'
        infinite={true}
        isPlaying={true}
        playDirection='forward'
        touchEnabled={true}
        step={1}
        interval={4000}
        
      >
        <Slider>
          {
            EVENTS.map((node:any)=>(
          <Slide index={0} >
          <Link to={"/events"}>
          <div className='h-[130px] mx-auto w-[98%] bg-[#FFB802] dottedbg border-[3px] border-black justify-center flex items-center'>
          <div className='bangers text-[30px] flex justify-center'>{node.event_name}</div>
          </div>
          </Link>
          </Slide>
            ))
          }
        </Slider>
        </CarouselProvider>
        </div>

        {/*---------Tab Carousel-----------   */}
        <div className='hidden sm:block lg:hidden'>
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={75}
        totalSlides={EVENTS.length}
        visibleSlides={2}
        // infinite={true}
        isPlaying={true}
        playDirection='forward'
        touchEnabled={true}
        step={1}
        interval={4000}
        


      >
        <Slider>
          {
            EVENTS.map((node:any)=>(
          <Slide index={0}>
            <Link to={"/events"}>
          <div className='h-[270px] w-[98%] mx-auto bg-[#FFB802] dottedbg border-[3px] border-black justify-center flex items-center'>
          <div className='bangers text-[30px] flex justify-center bg-red-500'>{node.event_name}</div>
          </div>
            </Link>
          </Slide>
            ))
          }
       
        </Slider>
        </CarouselProvider>
        </div>

        {/*---------Desktop Carousel-----------   */}
        <div className='hidden lg:block'>
        <CarouselProvider
      
        naturalSlideWidth={90}
        naturalSlideHeight={65}
        totalSlides={EVENTS.length}
        visibleSlides={3}

        // infinite={true}
        isPlaying={true}
        playDirection='forward'
        touchEnabled={true}
        step={0.5}
        interval={1000}
      >
        <Slider>
          {
            EVENTS.map((node:any)=>(
          <Slide index={0}>
            <Link to={"/events"}>
          <div className='h-[270px] w-[98%] mx-auto justify-center items-center flex bg-[#FFB802] dottedbg border-[3px] border-black'>
              <div className='bangers text-[40px]'>{node.event_name}</div>
              <p></p>
          </div>
            </Link>
          </Slide>
            ))
          }
       
        </Slider>
        </CarouselProvider>
        </div>


    </div>
  )
}

export default HomePageEvents
