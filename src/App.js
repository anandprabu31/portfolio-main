import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter } from 'react-router-dom'
import WorkExperience from "./components/Work Experience";


function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <BrowserRouter>
      <Header/>
      <Home />
      <About />
      <Experience />
      <WorkExperience/>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;