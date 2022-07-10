import tjunjet_selfie from '../assets/images/tjunjet_selfie.jpg';
import '../css/root.css';

export default function Root() {
    return (
      <div className="Root">
        <header className="Root-header">
          <img src={tjunjet_selfie} className="My-selfie" alt="logo" />
          <p className="My-Name">
            Ong Tjun Jet
          </p>
          <p className = "Role">
            Electrical and Computer Engineering; Carnegie Mellon University
          </p>
          <a
            className="Root-link"
            href="https://sg.linkedin.com/in/tjun-jet-ong"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </header>
      </div>
    );
  }