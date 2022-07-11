import {BrowserRouter, HashRouter, Link, Route, Routes} from 'react-router-dom'

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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/experience">Work Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/awards">Awards</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
        <li><Link to="/volunteering">Volunteering</Link></li>
      </nav>
      {/* <section> */}
        {/* <BrowserRouter> */}
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/about" element = {<About />} />
            <Route path = "/education" element = {<Education />} />
            <Route path = "/experience" element = {<Experience />} />
            <Route path = "/projects" element = {<Projects />} />
            <Route path = "/skills" element = {<Skills />} />
            <Route path = "/awards" element = {<Awards />} />
            <Route path = "/certifications" element = {<Certifications />} />
            <Route path = "/volunteering" element = {<Volunteering />} />
          </Routes>
        {/* </BrowserRouter> */}
      {/* </section> */}
    </div>
  );
}

export default App;
