import Hero from "./Sections/Hero/hero"
import NavBar from "../../components/NavBar/NavBar"
import About from "./Sections/About/About"
import Projects from "./Sections/Projects/projects"

const Home = () => {
    return (
      <div>
        <NavBar />
        <Hero />
        <About />
        <Projects />
      </div>
    )
  }
  
  export default Home
  