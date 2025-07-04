import { motion } from "framer-motion";

function Hero() {
  return <div className=" bg-[#121212] text-white ">
     {/* container  */}
         <motion.main initial={{opacity:0,scale:0.5}} whileInView={{opacity:1, scale:1}} transition={{duration:2}} viewport={{ once: true }}   className="md:px-[104px] px-[20px] py-[64px] flex md:flex-row flex-col items-center md:justify-between justify-center relative md:gap-0 gap-[20px]">
            {/* <!-- Grid background --> */}
               <div className=" w-[70%]  h-[70vh] z-0   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[size:60px_60px] bg-[linear-gradient(to_right,#FFFFFF1F_0.8px,transparent_0.1px),linear-gradient(to_bottom,#FFFFFF1F_0.8px,transparent_0.1px)]  [mask-image:radial-gradient(ellipse_at_center,_#121212,_transparent_60%)]     overflow-hidden   pointer-events-none"></div>
 
          {/* left sction  */}
          <section className="flex flex-1 flex-col gap-[24px] text-white text-[16px] font-[500] py-[60px] z-40">
            {/* title  */}
            <div className=" flex flex-col gap-[12px]">
            <motion.h1 className=" text-[#F6F6F6] md:text-[90px] md:font-[700] md:leading-[120px] md:max-w-[700px]  text-[60px] font-[700] leading-[60px]" initial={{opacity:0,y:-200,x:-200}} whileInView={{opacity:1, y:0,x:0}} transition={{duration:2}} viewport={{ once: true }} > Own the Future of <span className=" text-[#B76AFF]">Digital Art</span></motion.h1>
               <p className=" text-[#9E9E9E] text-[20px] font-[500] md:max-w-[600px] ">Discover rare NFTs, trade securely, and showcase your digital collection—powered by blockchain technology</p>
            </div>
            {/* buttons  */}
            <motion.div initial={{opacity:0,y:200,x:-200}} whileInView={{opacity:1, y:0,x:0}} transition={{duration:2}} viewport={{ once: true }}  className=" flex items-center gap-[12px]"> 
              <button className=" bg-gradient-to-b from-[#1F51FF] to-[#8A2BE2] py-[10px] px-[32px] rounded-[8px] text-[16px] text-white  hover:scale-[105%] transition-all duration-300 cursor-pointer">Explore</button>  
              <div className=" bg-gradient-to-b from-[#1F51FF] to-[#8A2BE2] p-[2px] w-fit h-fit  rounded-[8px] ">
              <button className=" bg-[#121212] hover:bg-transparent  transition-all duration-300 py-[8px] px-[32px] rounded-[8px] text-[16px] text-white  flex items-center gap-[10px] cursor-pointer"><span>+</span> <span>Create</span></button>  
                </div>  
              </motion.div>
              {/* count  */}
            <motion.div initial={{opacity:0,y:200,x:-200}} whileInView={{opacity:1, y:0,x:0}} transition={{duration:2}} viewport={{ once: true }}  className="flex items-center md:gap-[48px] gap-[24px]">
              <p className=" flex flex-col items-center md:text-[38px] text-[28px] font-[600]">500k+ <span className="md:text-[16px] text-[14px] font-[500]">Collections</span></p>
              <p className=" flex flex-col items-center md:text-[38px] text-[28px] font-[600]">100k+ <span className="md:text-[16px] text-[14px] font-[500]">Artists</span></p>
              <p className=" flex flex-col items-center md:text-[38px] text-[28px] font-[600]">10k+ <span className="md:text-[16px] text-[14px] font-[500]">Community</span></p>
            </motion.div>
          </section>


          {/* right sction  */}
          <motion.section whileInView={{ rotate: 360 }}
              transition={{ duration: 2}} viewport={{once:true}} whileHover={{rotate: [0, -10, 10, -10, 10, 0],}} className="flex flex-1 items-center justify-center gap-[24px] text-white text-[16px] font-[500]  z-40 ">
          <div className=" w-fit h-fit relative">
            <span className=" md:w-[352px] w-[252px] md:h-[247px] h-[147px] rounded-[20px] border-[1px] border-[#FFFFFF] bg-black absolute top-[-40px] left-[-20px] z-0"></span>
            <span className=" md:w-[352px] w-[252px] md:h-[247px] h-[147px] rounded-[20px] border-[1px] border-[#FFFFFF] bg-[#FFFFFF4D] absolute top-[-40px] left-[-20px] z-0"></span>
            <img src="/Hero.png" alt="//" className=" bg-blue-700 md:w-[404px] md:h-[560px] w-[80%] h-[460px] rounded-[30px] z-40 relative object-cover" />
            <span className=" md:w-[352px] w-[252px] h-[453px] rounded-[20px] border-[1px] border-[#FFFFFF] bg-black absolute bottom-[-30px] md:right-[-30px] right-[-5px] z-0"></span>
            <span className=" md:w-[352px] w-[252px] h-[453px] rounded-[20px] border-[1px] border-[#FFFFFF] bg-[#FFFFFF4D] absolute bottom-[-30px] md:right-[-30px] right-[-5px] z-0"></span>

          </div>
          </motion.section>
    
         </motion.main>
  </div>;
}

export default Hero;
