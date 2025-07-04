import { useState } from "react";
import { HeaderIcon } from "../svgs/HeaderIcon"
import { FaBars } from 'react-icons/fa'; // FontAwesome
import { MdClose } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion'
import '../styles/styles.css'

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="bg-[#121212] fixed top-0 left-0 w-full z-50">
     
      {/* container  */}
     <main className="sm:px-[104px] px-[20px] py-[20px] flex items-center justify-between bg-[#121212] z-50 relative">
       {/* logo */}
      <section className=" ">{HeaderIcon.logo}</section>
      {/* navigation  */}
      <section className="hidden sm:flex items-center gap-[24px] text-white text-[16px] font-[500]">
        <p className=" cursor-pointer text-[#B76AFF]">Home</p>
        <p className=" cursor-pointer">Services</p>
        <p className=" cursor-pointer">Explore</p>
        <p className=" cursor-pointer">About</p>
        <p className=" cursor-pointer">Page</p>
      </section>

      {/* connect wallet  */}
      <button className=" px-[32px] py-[10px] text-[16px] font-[] rounded-[8px] bg-gradient-to-b from-[#1F51FF] to-[#8A2BE2] text-white cursor-pointer hover:scale-[105%] transition-all duration-300 hidden sm:inline-block">Connect Wallet</button>
      <button className="  text-white text-2xl cursor-pointer hover:scale-[105%] sm:hidden inline-block" onClick={()=>setOpenMenu(!openMenu)}>{openMenu ? <MdClose/>:<FaBars/>}</button>
     
     </main>
      <AnimatePresence>
      {openMenu && 
        <motion.section 
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -200 }}
      transition={{ duration: 1 }}
       className="fixed top-[80px] left-0 w-full h-full bg-[#121212] z-30 flex flex-col gap-[32px] ">
          <div className="flex flex-col  text-white text-[16px] font-[500]">
             <p className=" cursor-pointer text-[#B76AFF] p-[10px]  border-b border-gray-500">Home</p>
             <p className=" cursor-pointer  p-[10px]  border-b border-gray-500">Services</p>
             <p className=" cursor-pointer  p-[10px]  border-b border-gray-500">Explore</p>
             <p className=" cursor-pointer  p-[10px]  border-b border-gray-500">About</p>
             <p className=" cursor-pointer  p-[10px]  border-b border-gray-500">Page</p>
           </div>
           <button  className=" px-[32px] py-[10px] text-[16px] mx-[10px] rounded-[8px] bg-gradient-to-b from-[#1F51FF] to-[#8A2BE2] text-white cursor-pointer hover:scale-[105%] transition-all duration-300 ">Connect Wallet</button>

            {/* bg */}
         <span className=" circleBlurLH sm:hidden inline-block"></span>
        </motion.section>
        }
        </AnimatePresence>
    </div>
  )
}

export default Header