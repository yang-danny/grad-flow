import Banner from "../../components/Banner"
import CV from "../../components/CV"
import Candidates from "../../components/Candidates"
import Featured from "../../components/Featured"
import FirstJob from "../../components/FirstJob"
import Jobs from "../../components/Jobs"
import News from "../../components/News"
import Preparation from "../../components/Preparation"

const Home = () => {
 
  return (
    <>
    <Banner />
    <Featured />
    <FirstJob />
    <Jobs />
    <CV />
    <Candidates />
    <Preparation />
    <News />
    </>
  )
}

export default Home
