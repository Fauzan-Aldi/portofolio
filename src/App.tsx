import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Experience from "./Components/Experience";
import Certificate from "./Components/Certificate";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Certificate/>
      <Contact/>
    </div>
  );
}

export default App;
