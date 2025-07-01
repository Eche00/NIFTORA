
function Hero() {
  return <div className=" bg-black text-white h-[100vh] ">
     {/* container  */}
         <main className="px-[104px] py-[64px] flex items-center justify-between relative">
  {/* <!-- Grid background --> */}
 <div className=" w-[70%]  h-[70vh] z-0   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[size:60px_60px] bg-[linear-gradient(to_right,#FFFFFF4D_0.8px,transparent_0.1px),linear-gradient(to_bottom,#FFFFFF4D_0.8px,transparent_0.1px)]  [mask-image:radial-gradient(ellipse_at_center,_black,_transparent)]     overflow-hidden   pointer-events-none"></div>
 
          {/* left sction  */}
          <section className="flex flex-1 flex-col gap-[24px] text-white text-[16px] font-[500] py-[60px] z-50">
            {/* title  */}
            <div className=" flex flex-col gap-[12px]">
            <h1 className=" text-[#F6F6F6] text-[90px] font-[700] leading-[120px] max-w-[700px]"> Own the Future of <span className=" text-[#B76AFF]">Digital Art</span></h1>
<p className=" text-[#9E9E9E] text-[20px] font-[500] max-w-[600px]">Discover rare NFTs, trade securely, and showcase your digital collection—powered by blockchain technology</p>
            </div>
            {/* buttons  */}
            <div className=" flex items-center gap-[12px]"> 
              <button className=" bg-gradient-to-b from-[#1F51FF] to-[#8A2BE2] py-[10px] px-[32px] rounded-[8px] text-[16px] text-white">Explore</button>  
              <div className=" bg-gradient-to-b from-[#1F51FF] to-[#8A2BE2] p-[2px] w-fit h-fit  rounded-[8px] ">
              <button className=" bg-black py-[8px] px-[32px] rounded-[8px] text-[16px] text-white  flex items-center gap-[10px]"><span>+</span> <span>Create</span></button>  
                </div>  
              </div>
              {/* count  */}
            <div className="flex items-center gap-[48px]">
              <p className=" flex flex-col items-center text-[38px] font-[600]">500k+ <span className="text-[16px] font-[500]">Collections</span></p>
              <p className=" flex flex-col items-center text-[38px] font-[600]">100k+ <span className="text-[16px] font-[500]">Artists</span></p>
              <p className=" flex flex-col items-center text-[38px] font-[600]">10k+ <span className="text-[16px] font-[500]">Community</span></p>
            </div>
          </section>


          {/* right sction  */}
          <section className="flex flex-1 items-center justify-center gap-[24px] text-white text-[16px] font-[500]  z-50">
          <div className=" w-fit h-fit relative">
            <span className=" w-[352px] h-[247px] rounded-[20px] border-[1px] border-[#FFFFFF] bg-black absolute top-[-40px] left-[-20px] z-0"></span>
            <span className=" w-[352px] h-[247px] rounded-[20px] border-[1px] border-[#FFFFFF] bg-[#FFFFFF4D] absolute top-[-40px] left-[-20px] z-0"></span>
            <img src="/Hero.png" alt="//" className=" bg-blue-700 w-[404px] h-[560px] rounded-[30px] z-50 relative" />
            <span className=" w-[352px] h-[453px] rounded-[20px] border-[1px] border-[#FFFFFF] bg-black absolute bottom-[-30px] right-[-30px] z-0"></span>
            <span className=" w-[352px] h-[453px] rounded-[20px] border-[1px] border-[#FFFFFF] bg-[#FFFFFF4D] absolute bottom-[-30px] right-[-30px] z-0"></span>

          </div>
          </section>
    
         </main>
  </div>;
}

export default Hero;
