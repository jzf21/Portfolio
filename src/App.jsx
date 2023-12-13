import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Projects from "./Components/Projects/Projects";
import Banner from "./Components/Banner/Banner";
import {
  Parallax,
  ParallaxProvider,
  ParallaxBanner,
} from "react-scroll-parallax";

import Footer from "./Components/Footer/Footer";
import Resume from "./Components/Resume";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import SelectedWorks from "./Components/SelectedWorks/SelectedWorks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ParallaxProvider>
                <Parallax speed={-20}>
                <Home/>
                </Parallax>
                <Parallax speed={20}>
                  {" "}
                  <About/>
              
                </Parallax>
                <SelectedWorks/>

                <Parallax speed={30}>
                  <div>
                    <Banner />
                  </div>
                </Parallax>

                <Projects />
                <Footer />
              </ParallaxProvider>
            }
          />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
