import { motion } from 'framer-motion'
import '../styles/styles.css'

function MobileScreen() {
  return (
    <div className=" w-full h-[100vh] relative overflow-hidden">
      {/* bg */}
         <span className=" circleBlurLF"></span>

      {/* circles  */}
     <section className="relative h-[110vh]">
         <span className=" sm:w-[1187px] sm:h-[514px] w-[700px] h-[200px]  border-[1px] border-[#484848] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-[50%] rotate-x-180" 
       style={{ transform: ' rotate(165.79deg)' }}></span>
       <span className=" sm:w-[1724px] sm:h-[748px] w-[1000px] h-[400px] border-[1px] border-[#484848] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-[50%] rotate-x-180" 
       style={{ transform: ' rotate(165.79deg)' }}></span>
       <span className=" sm:w-[2378px] sm:h-[1032px] w-[1200px] h-[600px] border-[1px] border-[#484848] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-[50%] rotate-x-180 z-40" 
       style={{ transform: ' rotate(165.79deg)' }}></span>
     </section>

  {/* title  */}
            <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1, scale:1}} transition={{duration:2}} viewport={{ once: true }} className=" flex flex-col gap-[12px] absolute top-1/2 left-1/2 -translate-y-1/2  -translate-x-1/2 w-[80%]">
            <h1 className=" text-[#F6F6F6] text-[60px] font-[700]  leading-[60px]"  > Own the Future of <span className=" text-[#B76AFF]">Digital Art</span></h1>
               <p className=" text-[#9E9E9E] text-[20px] font-[500]">Kindly switch to a device(DESKTOP) with a larger display to properly view this Web application.</p>
            </motion.div>
     </div>
  )
}

export default MobileScreen