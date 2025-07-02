 import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { trending } from '../../lib/trending';
import { useState } from 'react';

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
    <div className="py-[124px] relative">
      {/* test */}
      {/* <span className=" bg-[#00FFFF80]  w-[423px] h-[423px] rounded-full absolute top-[-100px] right-[-250px] blur-[400px]"></span> */}
      {/* <span className=" [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]  w-[423px] h-[423px] rounded-full absolute top-[-100px] right-[-250px] blur-[400px]"></span> */}
      {/* <div className="w-[423px] h-[423px] rounded-full absolute top-[-100px] right-[-250px] bg-neutral-900"><div className="absolute inset-0 bg-[#00FFFF80] bg-[size:20px_20px] opacity-20 blur-[100px]"></div></div> */}
      {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white "></div> */}
      <main className="px-[104px] py-[64px] flex flex-col relative">
         <h1 className="text-[48px] font-[700] leading-[120px] text-center text-transparent bg-clip-text bg-gradient-to-r  from-[#A849FF] to-[#F9FBFF]">
           Trending NFTs
         </h1>

      {/* Trending slide  */}
        <section className="flex items-center gap-[24px] justify-between relative py-[100px]">
        {/* buttons */}
        <button className="w-[80px] h-[80px] rounded-full bg-[#121212] border-[1px] border-[#E0E0E0] text-[#E0E0E0] text-[40px] flex items-center justify-center absolute top-1/2 left-[30px]  -translate-y-1/2 cursor-pointer  disabled:cursor-not-allowed" onClick={handlePrev} disabled={currentIndex === 0}>
            <IoIosArrowBack />
        </button>
        <button className="w-[80px] h-[80px] rounded-full bg-[#121212] border-[1px] border-[#E0E0E0] text-[#E0E0E0] text-[40px] flex items-center justify-center absolute top-1/2 right-[30px]  -translate-y-1/2 cursor-pointer  disabled:cursor-not-allowed" onClick={handleNext} disabled={currentIndex >= Math.ceil(trending.length / cardsPerClick) - 1}>
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
        </section>

     {/* see more button  */}
     <div className=' w-full flex items-center justify-center'>
        <button className=' text-[24px] text-[#E0E0E0] font-[600] bg-transparent border-[1px] border-[#E0E0E0] px-[32px] py-[10px] rounded-[8px] w-fit'>See more</button>
     </div>
      </main>
    </div>
  )
}

export default Trending
