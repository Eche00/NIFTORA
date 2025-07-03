import { articles } from "../../lib/article";

function Articles() {
  return  <div className=" relative ">
             
             <main className="px-[104px] pt-[64px] pb-[164px] flex flex-col relative">
                <h1 className="text-[48px] font-[700] leading-[120px] text-center text-transparent bg-clip-text bg-gradient-to-r  from-[#A849FF] to-[#F9FBFF] ">
                  Articles
                </h1>
           
          {/* cards  */}
            <section className=" flex flex-wrap items-center gap-[24px] gap-y-[40px] justify-center relative py-[100px] max-w-[95%] mx-auto">
                  
                     {/* each card  */}
                     {articles.map((card)=>(
                      <div className="  max-h-[430px] h-fit w-fit bg-gradient-to-b from-[#FFFFFF4D]/10 to-[#FFFFFF]/10  py-[20px] px-[14px] border-[1px] border-[#FFFFFF]/30 rounded-[24px] flex flex-col gap-[23px] " key={card.title}>
                        <img src={card?.img} alt="" className="w-[397px] h-[265px] object-cover rounded-t-[12px]" />
                        {/* details  */}
                        <div className="flex flex-col gap-[24px]">
                            <h1 className="flex flex-col text-[20px] text-[#FFFFFF] font-[600] max-w-[361px]">{card?.title}</h1>
                          <p className="flex flex-col text-[14px] text-[#FFFFFF] font-[400]">{card?.date}</p>
                        </div>
                      </div>
                      ))} 
                    </section>
             {/* see more button  */}
       <div className=' w-full flex items-center justify-center'>
          <button className=' text-[24px] text-[#E0E0E0] font-[600] bg-transparent border-[1px] border-[#E0E0E0] px-[32px] py-[10px] rounded-[8px] w-fit'>See more</button>
       </div>
             </main>
           </div>;;
}

export default Articles;
