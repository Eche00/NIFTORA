import Articles from "./homeComponents/Articles"
import Create from "./homeComponents/Create"
import Hero from "./homeComponents/Hero"
import TopCategory from "./homeComponents/TopCategory"
import TopCollection from "./homeComponents/TopCollection"
import Trending from "./homeComponents/Trending"
import Wallets from "./homeComponents/Wallets"

function Home() {
  return (
    <div className=" z-0 ">
      <Hero/>
      <Wallets/>
      <Trending/>
      <TopCollection/>
      <TopCategory/>
      <Create/>
      <Articles/>
    </div>
  )
}

export default Home