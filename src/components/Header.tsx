import { HeaderIcon } from "../svgs/HeaderIcon"

function Header() {
  return (
    <div className="bg-[#121212] fixed top-0 left-0 w-full z-50">
      {/* container  */}
     <main className="px-[104px] py-[20px] flex items-center justify-between">
       {/* logo */}
      <section className=" ">{HeaderIcon.logo}</section>
      {/* navigation  */}
      <section className="flex items-center gap-[24px] text-white text-[16px] font-[500]">
        <p className=" cursor-pointer text-[#B76AFF]">Home</p>
        <p className=" cursor-pointer">Services</p>
        <p className=" cursor-pointer">Explore</p>
        <p className=" cursor-pointer">About</p>
        <p className=" cursor-pointer">Page</p>
      </section>

      {/* connect wallet  */}
      <button className=" px-[32px] py-[10px] text-[16px] font-[] rounded-[8px] bg-gradient-to-b from-[#1F51FF] to-[#8A2BE2] text-white cursor-pointer hover:scale-[105%] transition-all duration-300">Connect Wallet</button>
     </main>
    </div>
  )
}

export default Header