import { Suspense, useState } from 'react'
import './App.css'
import DigitalTools from './components/digitalTools/DigitalTools'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Stats from './components/stats/Stats'
import GetStarted from './components/getStarted/GetStarted'
import TransparentPricing from './components/transparentPricing/TransparentPricing'
import Footer from './components/footer/Footer'

const fetchToolsData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
function App() {
    const toolsPromise = fetchToolsData ();
    
    const [buyNow, setBuyNow] = useState([]);
  return (
    <>
      <Navbar buyNow={buyNow}></Navbar>
      <Hero></Hero>
      <Stats></Stats>
      
      <Suspense fallback = {<span className="loading loading-spinner loading-xl ml-230 mt-10"></span>}>
        <DigitalTools setBuyNow ={setBuyNow} buyNow={buyNow} toolsPromise={toolsPromise}></DigitalTools>
      </Suspense>
      <GetStarted></GetStarted>
      <TransparentPricing></TransparentPricing>
      <Footer></Footer>
    </>
  )
}

export default App
