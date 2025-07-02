

function Wallets() {
  return (
    <div>
      {/* container  */}
      <main className="  px-[104px] text-white flex flex-col items-center gap-[64px]">
      <section className="flex items-center gap-[64px]">
        <img src="/metamask.png" alt="" className=" w-[285px] h-[80px] object-contain" />
        <img src="/trustwallet.png" alt="" className=" w-[285px] h-[80px] object-contain" />
        <img src="/walletconnect.png" alt="" className=" w-[285px] h-[80px] object-contain" />
      </section>
      <section className="flex items-center gap-[64px]">
                <img src="/exodus.png" alt="" className=" w-[285px] h-[80px] object-contain" />
                <img src="/safepal.png" alt="" className=" w-[285px] h-[80px] object-contain" />

      </section>
      </main>
    </div>
  )
}

export default Wallets