import tjunjet_selfie from '../assets/images/tjunjet_selfie.jpg';
import '../css/App.css';

export default function Root() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={tjunjet_selfie} className="App-logo" alt="logo" />
          <p>
            Ong Tjun Jet
          </p>
          <p>
            Electrical and Computer Engineering; Carnegie Mellon University
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }