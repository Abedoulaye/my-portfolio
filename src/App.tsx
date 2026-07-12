import aiIcon from "../assets/ai-icon.png";
import { Hero } from "../components/Hero.tsx";
import Skills from "../components/skills.tsx";
import About from "../components/about.tsx";
import Projects from "../components/projects.tsx";
import resume from "../public/Resume (1).pdf";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="topnav">
          <h1>
            Abe<span className="color">doulaye</span>
          </h1>
          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contact</a>
            <a href={resume} download className="btn" id="resume">
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
            </a>
          </nav>
        </div>

        <main className="main-content">
          <Hero />

          <Skills />

          <About />

          <Projects />

          <div className="contact-section" id="contacts">
            <div className="mini-container">
              <img src={aiIcon} alt="AI Icon" />
            </div>

            <div className="mini-container">
              <h3>Get in Touch</h3>
              <p> I'm currently looking for new oppurtunities,</p>
              <p>Feel free to reach out</p>
            </div>

            <div className="mini-container">
              <a href="mailto:abedoulaye.m.dia@gmail.com">
                Contact Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e3e3e3"
                >
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
              </a>
            </div>
          </div>
        </main>
      </div>

      <footer>
        <p>@ Abedoulaye Dia. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
