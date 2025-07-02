import { topcategories } from "../../lib/topcategories";

function TopCategory() {
  return <div className=" relative ">
           
           <main className="px-[104px] py-[64px] flex flex-col relative">
              <h1 className="text-[48px] font-[700] leading-[120px] text-center text-transparent bg-clip-text bg-gradient-to-r  from-[#A849FF] to-[#F9FBFF] ">
                Top Categories
              </h1>
         
        {/* cards  */}
          <section className=" flex flex-wrap items-center gap-[24px] gap-y-[40px] justify-center relative py-[100px] max-w-[90%] mx-auto">
                
                   {/* each card  */}
                   {topcategories.map((card)=>(
                    <div className=" max-w-[397px]  max-h-[329px] h-fit w-fit bg-gradient-to-b from-[#FFFFFF4D]/10 to-[#FFFFFF]/10  py-[20px] px-[14px] border-[1px] border-[#FFFFFF]/30 rounded-[24px] flex flex-col gap-[23px] " key={card.title}>
                      <img src={card?.img} alt="" className="w-[365px] h-[243px] object-cover rounded-[12px]" />
                      {/* details  */}
                      <div className="flex items-center justify-center">
                          <h1 className="flex flex-col text-[20px] text-[#FFFFFF] font-[600]">{card?.title}</h1>
                        
                      </div>
                    </div>
                    ))} 
                  </section>
           {/* see more button  */}
     <div className=' w-full flex items-center justify-center'>
        <button className=' text-[24px] text-[#E0E0E0] font-[600] bg-transparent border-[1px] border-[#E0E0E0] px-[32px] py-[10px] rounded-[8px] w-fit'>See more</button>
     </div>
           </main>
         </div>;
}

export default TopCategory;
