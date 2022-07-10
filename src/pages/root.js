import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './home'
import Education from './education'
import Experience from './experience'
import Projects from './projects'
import Certifications from './certifications'
import Volunteering from './volunteering'

import '../css/root.css';

export default function Root() {
    return (
      <div>
        <h1 className = "Title">My Website</h1>
        <nav>
          <li><a href="/home">Home</a></li>
          <li><a href="/education">Education</a></li>
          <li><a href="/experience">Work Experience</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/certifications">Certifications</a></li>
          <li><a href="/volunteering">Skills</a></li>
        </nav>
        <BrowserRouter>
          <Routes>
            <Route path = "/home" element = {<Home />} />
            <Route path = "/education" element = {<Education />} />
            <Route path = "/experience" element = {<Experience />} />
            <Route path = "/projects" element = {<Projects />} />
            <Route path = "/skills" element = {<Skills />} />
            <Route path = "/certifications" element = {<Certifications />} />
            <Route path = "/volunteering" element = {<Volunteering />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }