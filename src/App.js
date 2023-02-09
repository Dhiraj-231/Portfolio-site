import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Work from './components/Work.jsx';
import Timeline from './components/Timeline.jsx';
import Service from './components/Service.jsx'
import Footer from "./components/Footer"
import Testimonial from './components/Testimonial.jsx';
import Contact from "./components/Contact"
import { Toaster } from 'react-hot-toast';
 let App=()=>{
  return(
    <>
      <Header/>
      <Home/>
      <Work/>
      <Timeline/>
      <Service/>
      <Testimonial/>
      <Contact />
      <Footer/>
      <Toaster/>
    </>
  )
 }
 export default App;