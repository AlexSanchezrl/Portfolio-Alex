import { BrowserRouter, Route, Routes } from "react-router-dom"
import Portfolio from "./layout/pages/portafolio"
import AboutMe from "./layout/pages/AboutMe"
import Footer from "./layout/pages/footer"
import Nav from "./layout/pages/nav"
import ParticlesBg from "./components/PariclesBg"



function App() {

      return (
        <>

     <BrowserRouter>
     <ParticlesBg />

    <main>
      <Nav />
      

      <Routes>
      
            <Route path="/" element={<Portfolio />}/>
            <Route path="about-me" element={<AboutMe />} />

       </Routes>
      
    <Footer />
    </main>
      
             </BrowserRouter>


     </>
       )
     }

export default App
