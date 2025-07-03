import { motion } from "framer-motion";


function Wallets() {
  return (
    <div>
      {/* container  */}
      <main className="  px-[104px] text-white flex flex-col items-center gap-[64px]">
      <section className="flex items-center gap-[64px]">
        <motion.img initial={{opacity:0,x:-200}} whileInView={{opacity:1, x:0}} transition={{duration:2}} viewport={{ once: true }} src="/metamask.png" alt="" className=" w-[285px] h-[80px] object-contain" />
        <motion.img initial={{opacity:0,y:200}} whileInView={{opacity:1, y:0,}} transition={{duration:2}} viewport={{ once: true }} src="/trustwallet.png" alt="" className=" w-[285px] h-[80px] object-contain" />
        <motion.img initial={{opacity:0,x:200}} whileInView={{opacity:1,x:0}} transition={{duration:2}} viewport={{ once: true }} src="/walletconnect.png" alt="" className=" w-[285px] h-[80px] object-contain" />
      </section>
      <section className="flex items-center gap-[64px]">
                <motion.img initial={{opacity:0,y:200,x:-200}} whileInView={{opacity:1, y:0,x:0}} transition={{duration:2}} viewport={{ once: true }}src="/exodus.png" alt="" className=" w-[285px] h-[80px] object-contain" />
                <motion.img initial={{opacity:0,y:200,x:200}} whileInView={{opacity:1, y:0,x:0}} transition={{duration:2}} viewport={{ once: true }}src="/safepal.png" alt="" className=" w-[285px] h-[80px] object-contain" />

      </section>
      </main>
    </div>
  )
}

export default Wallets