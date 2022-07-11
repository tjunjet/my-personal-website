import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './home'
import About from './about'
import Education from './education'
import Experience from './experience'
import Projects from './projects'
import Skills from "./skills"
import Awards from './awards'
import Certifications from './certifications'
import Volunteering from './volunteering'

import '../css/root.css';

export default function Root() {
    return (
      <div>
        <nav>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/education">Education</a></li>
          <li><a href="/experience">Work Experience</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/awards">Awards</a></li>
          <li><a href="/certifications">Certifications</a></li>
          <li><a href="/volunteering">Volunteering</a></li>
        </nav>
        <section>
          <BrowserRouter>
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
          </BrowserRouter>
        </section>
      </div>
    );
  }