import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import Achievements from "./sections/Achievements";
import Collaboration from "./sections/Collaboration";
import ChatBot from "./sections/Chatbot";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements/>
        <Experience/>
        <Collaboration/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
