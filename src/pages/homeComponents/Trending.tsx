 import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { trending } from '../../lib/trending';
import { useState } from 'react';
import '../../styles/styles.css'
import { motion } from "framer-motion";

function Trending() {
  const [currentIndex,setCurrentIndex] = useState(0)
  const cardsPerClick = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, Math.ceil(trending.length / cardsPerClick) - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const currentCards = trending.slice(currentIndex * cardsPerClick, (currentIndex + 1) * cardsPerClick);

  return (
    <div className="md:py-[124px] py-[30px] relative">
      {/* bg */}
      <span className=" circleBlurR"></span>

      {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white "></div> */}
      <main className="md:px-[104px] px-[10px] py-[64px] flex flex-col relative">
         <motion.h1 initial={{opacity:0,y:100}} whileInView={{opacity:1, y:1}} transition={{duration:2}} viewport={{ once: true }} className="md:text-[48px] text-[32px] text-nowrap font-[700] leading-[120px] text-center text-transparent bg-clip-text bg-gradient-to-r  from-[#A849FF] to-[#F9FBFF]">
           Trending NFTs
         </motion.h1>

      {/* Trending slide  */}
        <motion.section 
        initial={{opacity:0,scale:0.5}} whileInView={{opacity:1, scale:1}} transition={{duration:2}} viewport={{ once: true }} className="flex md:flex-row flex-col items-center gap-[24px] md:justify-between justify-center relative py-[100px]">
        {/* buttons */}
        <button className="w-[80px] h-[80px] rounded-full bg-[#121212] border-[1px] border-[#E0E0E0] text-[#E0E0E0] text-[40px] flex items-center justify-center absolute md:top-1/2 md:left-[30px] top-0  md:-translate-y-1/2 cursor-pointer  disabled:cursor-not-allowed" onClick={handlePrev} disabled={currentIndex === 0}>
            <IoIosArrowBack />
        </button>
        <button className="w-[80px] h-[80px] rounded-full bg-[#121212] border-[1px] border-[#E0E0E0] text-[#E0E0E0] text-[40px] flex items-center justify-center absolute md:top-1/2 md:right-[30px]  md:-translate-y-1/2 bottom-0 cursor-pointer  disabled:cursor-not-allowed" onClick={handleNext} disabled={currentIndex >= Math.ceil(trending.length / cardsPerClick) - 1}>
            <IoIosArrowForward />
        </button>
         
         {/* each card  */}
         {currentCards.map((card)=>(
          <div className=" max-w-[482px]  max-h-[646px] h-fit w-fit bg-gradient-to-b from-[#FFFFFF4D]/10 to-[#FFFFFF]/10  py-[20px] px-[17px] border-[1px] border-[#FFFFFF]/30 rounded-[24px] flex flex-col gap-[23px] " key={card.title}>
            <img src={card?.img} alt="" className="w-[448px] h-[448px] object-cover rounded-[12px]" />
            {/* details  */}
            <div className="flex flex-col gap-[24px]">
               <section className="flex items-center justify-between">
                <h1 className="flex flex-col text-[24px] text-[#FFFFFF] font-[600]">{card?.title}<span className=" text-[14px] text-[#FFFFFF] font-[400]">{card?.subtitle}</span></h1>
                <span dangerouslySetInnerHTML={{ __html:card?.logo || ''}}></span>
               </section>
               {/* bottom details  */}
               <section className=" flex items-center justify-between">
                <p className="flex flex-col text-[20px] text-[#FFFFFF] font-[600]">{card?.latestbid}<span className=" text-[16px] text-[#FFFFFF] font-[400]">Latest Bid</span></p>
                <p className="flex flex-col text-[20px] text-[#FFFFFF] font-[600]">{card?.from}<span className=" text-[16px] text-[#FFFFFF] font-[400]">From </span></p>
                <p className="flex flex-col text-[20px] text-[#FFFFFF] font-[600]">${card?.priceinusd}<span className={`text-[16px] ${card?.x >= 5.0 ? 'text-[#1DFF04]':'text-[#FF0404]'} font-[400]`}>{card?.x >= 5.0 ?'+':'-'}{card?.x}%</span></p>
               </section>
            </div>
          </div>
          ))} 
        </motion.section>

     {/* see more button  */}
     <div className=' w-full flex items-center justify-center pt-5 md:pt-0'>
        <motion.button                   whileInView={{
                    rotate: [0, -10, 10, -10, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    delay: 1,
                    repeatDelay: 10,
                    repeat: Infinity,
                    repeatType: "loop", // (optional) smoother looping
                  }} className=' text-[24px] text-[#E0E0E0] font-[600] bg-transparent border-[1px] border-[#E0E0E0] px-[32px] py-[10px] rounded-[8px] w-fit cursor-pointer'>See more</motion.button>
     </div>
      </main>
    </div>
  )
}

export default Trending
