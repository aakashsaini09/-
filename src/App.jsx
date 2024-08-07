import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import SideNav from './components/SideNav'
import './App.css'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {


  return (
    <>
        <Navbar/>
    <div className="d-flex">
        <SideNav/>
        <HomePage/>
    </div>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
