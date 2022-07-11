import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Education from './pages/education'
import Experience from './pages/experience'
import Projects from './pages/projects'
import Skills from "./pages/skills"
import Awards from './pages/awards'
import Certifications from './pages/certifications'
import Volunteering from './pages/volunteering'

import './css/root.css';

function App() {
  return (
    <div>
      <nav>
        <li><a href="/">Home</a></li>
        <li><a href="/#/about">About</a></li>
        <li><a href="/#/education">Education</a></li>
        <li><a href="/#/experience">Work Experience</a></li>
        <li><a href="/#/projects">Projects</a></li>
        <li><a href="/#/skills">Skills</a></li>
        <li><a href="/#/awards">Awards</a></li>
        <li><a href="/#/certifications">Certifications</a></li>
        <li><a href="/#/volunteering">Volunteering</a></li>
      </nav>
      {/* <section> */}
        {/* <BrowserRouter> */}
          <Routes>
            <Route path = "/about" element = {<About />} />
            <Route path = "/education" element = {<Education />} />
            <Route path = "/experience" element = {<Experience />} />
            <Route path = "/projects" element = {<Projects />} />
            <Route path = "/skills" element = {<Skills />} />
            <Route path = "/awards" element = {<Awards />} />
            <Route path = "/certifications" element = {<Certifications />} />
            <Route path = "/volunteering" element = {<Volunteering />} />
            <Route path = "/" element = {<Home />} />
          </Routes>
        {/* </BrowserRouter> */}
      {/* </section> */}
    </div>
  );
}

export default App;
