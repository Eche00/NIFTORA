import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router";

function Container() {
  return (
    <div className=" bg-[#121212]">
      <Header/>
     <section className="w-full pt-[80px] z-10 ">
       <Outlet/>
     </section>
      <section className=" z-30">
        <Footer/>
      </section>
    </div>
  )
}

export default Container