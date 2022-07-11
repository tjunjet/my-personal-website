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
          <li><a href="pages/about.js">About</a></li>
          <li><a href="pages/education.js">Education</a></li>
          <li><a href="pages/experience.js">Work Experience</a></li>
          <li><a href="pages/projects.js">Projects</a></li>
          <li><a href="pages/skills.js">Skills</a></li>
          <li><a href="pages/awards.js">Awards</a></li>
          <li><a href="pages/certifications.js">Certifications</a></li>
          <li><a href="pages/volunteering.js">Volunteering</a></li>
        </nav>
        <section>
          <BrowserRouter>
            <Routes>
              <Route path = "/" element = {<Home />} />
              <Route path = "pages/about.js" element = {<About />} />
              <Route path = "pages/education.js" element = {<Education />} />
              <Route path = "pages/experience.js" element = {<Experience />} />
              <Route path = "pages/projects.js" element = {<Projects />} />
              <Route path = "pages/skills.js" element = {<Skills />} />
              <Route path = "pages/awards.js" element = {<Awards />} />
              <Route path = "pages/certifications.js" element = {<Certifications />} />
              <Route path = "pages/volunteering.js" element = {<Volunteering />} />
            </Routes>
          </BrowserRouter>
        </section>
      </div>
    );
  }