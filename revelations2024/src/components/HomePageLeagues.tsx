import React from "react";

function HomePageLeagues() {
  return (
    <div className="flex flex-1 overflow-x-hidden w-[95%] mx-auto  comic overflow-visible ">

      <div className="panel  min-w-[30%] flex flex-row   items-center justify-between pr-10  " 
      data-aos="slide-right" data-aos-duration="1000"
      >
        <div className="flex items-center h-full p-1 w-fit">
          <img
            src={require("../assets/thor.png")}
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div className="border-[10px] border-black p-1 px-3 bg-[#ED1F6A]">
            <div className="bangers text-[30px] text-white">
                Thor
            </div>
        </div>

      </div>

      <div className="panel  min-w-[30%] flex flex-row   items-center justify-between pr-10  " 
      data-aos="zoom-in" data-aos-duration="1000"
      >
        <div className="flex items-center h-full p-1 w-fit">
          <img
            src={require("../assets/drstrange 1.png")}
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div className="border-[10px] border-black p-1 px-3 bg-[#ED1F6A]">
            <div className="bangers text-[30px] text-white">
                Doctor Strange
            </div>
        </div>

      </div>
      
      <div className="panel  min-w-[30%] flex flex-row grayscale-[1] hover:grayscale-0 transform transition-colors items-center justify-between pl-10"
      data-aos="slide-left" data-aos-duration="1000">
     
      <div className="border-[10px] border-black p-1 bg-[#ED1F6A]">
            <div className="bangers text-[30px] text-white">
                captain america
            </div>
        </div>
         <div className="flex items-center h-full p-1 px-3 w-fit">
          <img
            src={require("../assets/cptnamerica 2.png")}
            width={200}
            height={200}
            alt=""
          />
        </div>
      </div>
      <div className="panel min-w-[40%] flex flex-row grayscale-[1] hover:grayscale-0 transform transition-colors  items-center justify-between pl-10"
      data-aos="slide-right" data-aos-duration="1200">
      <div className="border-[10px] border-black p-1 px-3 bg-[#ED1F6A]">
            <div className="bangers text-[30px] text-white">
                spiderman
            </div>
        </div>
      <div className="flex items-center h-full p-1 mr-6 w-fit">
          <img
            src={require("../assets/spiderman.png")}
            width={200}
            height={200}
            alt=""
          />
        </div>
      </div>
      <div className="panel min-w-[30%] flex flex-row grayscale-[1] hover:grayscale-0 transform transition-colors items-center justify-between pr-10"
      data-aos="slide-left" data-aos-duration="1200">
      <div className="flex items-center h-full p-1 px-3 ml-6 w-fit">
          <img
            src={require("../assets/blackwidow.png")}
            width={200}
            height={200}
            alt=""
          />
        </div>
        <div className="border-[10px] border-black p-1 px-3 bg-[#ED1F6A]">
            <div className="bangers text-[30px] text-white">
                Black widow
            </div>
        </div>
      </div>
      <div className="panel min-w-[40%] flex flex-row grayscale-[1] hover:grayscale-0 transform transition-colors  items-center justify-between pr-10"
      data-aos="slide-right" data-aos-duration="1400">
      <div className="flex items-center h-full p-1 ml-10 w-fit">
          <img
            src={require("../assets/scarletwitch.png")}
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div className="border-[10px] border-black p-1 px-3 bg-[#ED1F6A]">
            <div className="bangers text-[30px] text-white">
                Scarlet Witch
            </div>
        </div>
      </div>
      <div className="panel min-w-[50%] flex flex-row grayscale-[1] hover:grayscale-0 transform transition-colors items-center justify-between pl-10"
      data-aos="slide-left" data-aos-duration="1400">
      <div className="border-[10px] border-black p-1 px-3 bg-[#ED1F6A]">
            <div className="bangers text-[30px] text-white">
                Iron Man
            </div>
        </div>
      <div className="flex items-center h-full p-1 mr-10 w-fit -rotate-[20deg]">
          <img
            src={require("../assets/ironman.png")}
            width={200}
            height={400}
            alt=""
          />
        </div>
      </div>

    </div>
  );
}

export default HomePageLeagues;
