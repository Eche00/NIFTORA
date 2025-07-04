import { motion } from "framer-motion";


function Wallets() {
  return (
    <div>
      {/* container  */}
      <main className="  sm:px-[104px] px-[10px] text-white flex items-center justify-center flex-col w-full  sm:gap-[64px] gap-[10px]">
      <section className="flex items-center justify-center flex-wrap sm:gap-[64px] gap-[10px]">
        <motion.img initial={{opacity:0,x:-200}} whileInView={{opacity:1, x:0}} transition={{duration:2}} viewport={{ once: true }} src="/metamask.png" alt="" className=" sm:w-[285px] sm:h-[80px] w-[220px] h-[60px] object-contain" />
        <motion.img initial={{opacity:0,y:200}} whileInView={{opacity:1, y:0,}} transition={{duration:2}} viewport={{ once: true }} src="/trustwallet.png" alt="" className=" sm:w-[285px] sm:h-[80px] w-[220px] h-[60px] object-contain" />
        <motion.img initial={{opacity:0,x:200}} whileInView={{opacity:1,x:0}} transition={{duration:2}} viewport={{ once: true }} src="/walletconnect.png" alt="" className=" sm:w-[285px] sm:h-[80px] w-[220px] h-[60px] object-contain" />
      </section>
      <section className="flex items-center justify-center flex-wrap sm:gap-[64px] gap-[10px]">
                <motion.img initial={{opacity:0,y:200,x:-200}} whileInView={{opacity:1, y:0,x:0}} transition={{duration:2}} viewport={{ once: true }}src="/exodus.png" alt="" className=" sm:w-[285px] sm:h-[80px] w-[220px] h-[60px] object-contain" />
                <motion.img initial={{opacity:0,y:200,x:200}} whileInView={{opacity:1, y:0,x:0}} transition={{duration:2}} viewport={{ once: true }}src="/safepal.png" alt="" className=" sm:w-[285px] sm:h-[80px] w-[220px] h-[60px] object-contain" />

      </section>
      </main>
    </div>
  )
}

export default Wallets