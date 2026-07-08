import Computer from "../assets/computer.jpeg";
import aiIcon from "../assets/ai-icon.png";
import profileHolder from "../assets/profile-holder.png";

interface Icon {
  name: string;
  svg: React.ReactNode;
}

const techIcons: Icon[] = [
  {
    name: "HTML",
    svg: (
      <svg
        version="1.1"
        id="html-logo"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 108.35 122.88"
        enableBackground="new 0 0 108.35 122.88"
        xmlSpace="preserve"
      >
        <style>
          {`.html0{fillRule:evenodd;clipRule:evenodd;fill:#E44D26;} .html1{fillRule:evenodd;clipRule:evenodd;fill:#F16529;} .html2{fillRule:evenodd;clipRule:evenodd;fill:#EBEBEB;} .html3{fillRule:evenodd;clipRule:evenodd;fill:#FFFFFF;}`}
        </style>
        <g>
          <polygon className="html0" points="108.35,0 98.48,110.58 54.11,122.88 9.86,110.6 0,0 108.35,0" />
          <polygon className="html1" points="54.17,113.48 90.03,103.54 98.46,9.04 54.17,9.04 54.17,113.48" />
          <path className="html2" d="M34.99,36.17h19.19V22.61H20.16l0.32,3.64l3.33,37.38h30.35V50.06H36.23L34.99,36.17L34.99,36.17L34.99,36.17z M38.04,70.41H24.43l1.9,21.3l27.79,7.71l0.06-0.02V85.29l-0.06,0.02l-15.11-4.08L38.04,70.41L38.04,70.41L38.04,70.41z" />
          <path className="html3" d="M54.13,63.63h16.7l-1.57,17.59L54.13,85.3v14.11l27.81-7.71l0.2-2.29l3.19-35.71l0.33-3.64H54.13V63.63 L54.13,63.63z M54.13,36.14v0.03h32.76l0.27-3.05l0.62-6.88l0.32-3.64H54.13V36.14L54.13,36.14L54.13,36.14z" />
        </g>
      </svg>
    ),
  },
  {
    name: "CSS",
    svg: (
      <svg id="css-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296297 333333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
        <defs>
          <linearGradient id="cssGrad1" gradientUnits="userSpaceOnUse" x1="54128.7" y1="79355.5" x2="240318" y2="79355.5">
            <stop offset="0" stopColor="#e8e7e5" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="cssGrad2" gradientUnits="userSpaceOnUse" x1="62019.3" y1="202868" x2="233515" y2="202868">
            <stop offset="0" stopColor="#e8e7e5" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="cssGrad3" gradientUnits="userSpaceOnUse" x1="104963" y1="99616.9" x2="104963" y2="171021">
            <stop offset="0" stopColor="#d1d3d4" />
            <stop offset=".388" stopColor="#d1d3d4" />
            <stop offset="1" stopColor="#d1d3d4" />
          </linearGradient>
          <linearGradient id="cssGrad4" gradientUnits="userSpaceOnUse" x1="194179" y1="61185.8" x2="194179" y2="135407">
            <stop offset="0" stopColor="#d1d3d4" />
            <stop offset=".388" stopColor="#d1d3d4" />
            <stop offset="1" stopColor="#d1d3d4" />
          </linearGradient>
          <mask id="cssMask0">
            <linearGradient id="cssGrad5" gradientUnits="userSpaceOnUse" x1="104963" y1="99616.9" x2="104963" y2="171021">
              <stop offset="0" stopOpacity="0" stopColor="#fff" />
              <stop offset=".388" stopColor="#fff" />
              <stop offset="1" stopOpacity=".831" stopColor="#fff" />
            </linearGradient>
            <path fill="url(#cssGrad5)" d="M61737 99467h86453v71704H61737z" />
          </mask>
          <mask id="cssMask1">
            <linearGradient id="cssGrad6" gradientUnits="userSpaceOnUse" x1="194179" y1="61185.8" x2="194179" y2="135407">
              <stop offset="0" stopOpacity="0" stopColor="#fff" />
              <stop offset=".388" stopColor="#fff" />
              <stop offset="1" stopOpacity=".831" stopColor="#fff" />
            </linearGradient>
            <path fill="url(#cssGrad6)" d="M147890 61036h92578v74521h-92578z" />
          </mask>
          <style>{`.cssFil6{fill:#000;fill-opacity:.05098}`}</style>
        </defs>
        <g id="cssLayer">
          <g>
            <path fill="#2062af" d="M268517 300922l-120369 32411-120371-32411L0 0h296297z" />
            <path fill="#3c9cd7" d="M148146 24374v283109l273 74 97409-26229 22485-256954z" />
            <path fill="#fff" d="M148040 99617l-86153 35880 2857 35524 83296-35614 88604-37883 3674-36339-92278 38432z" />
            <path mask="url(#cssMask0)" fill="url(#cssGrad3)" d="M61887 135497l2857 35524 83295-35614V99617z" />
            <path mask="url(#cssMask1)" fill="url(#cssGrad4)" d="M240318 61186l-92278 38431v35790l88604-37883z" />
            <path fill="url(#cssGrad2)" d="M62019 135497l2858 35524 127806 407-2859 47365-42055 11840-40428-10208-2450-29399H67327l4900 56756 75950 22457 75538-22050 9800-112692z" />
            <path className="cssFil6" d="M148040 135497H61888l2857 35524 83295 266v-35790zm0 95022l-408 114-40422-10208-2450-29399H67197l4899 56756 75944 22457v-39720z" />
            <path fill="url(#cssGrad1)" d="M54129 61186h186189l-3674 36339H58620l-4491-36339z" />
            <path className="cssFil6" d="M148040 61186H54129l4491 36339h89420z" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    svg: (
      <svg id="tailwind-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 154" width="256" height="154">
        <defs>
          <linearGradient id="twGrad" x1="-2.778%" y1="32%" x2="100%" y2="67.556%">
            <stop offset="0%" stopColor="#2298BD" />
            <stop offset="100%" stopColor="#0ED7B5" />
          </linearGradient>
        </defs>
        <path fill="url(#twGrad)" d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    svg: (
      <svg version="1.1" id="js-logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.88" enableBackground="new 0 0 122.88 122.88" xmlSpace="preserve">
        <style>{`.jsSt0{fillRule:evenodd;clipRule:evenodd;fill:#F7DF1E;} .jsSt1{fillRule:evenodd;clipRule:evenodd;fill:#000000;}`}</style>
        <g>
          <polygon className="jsSt0" points="0,0 122.88,0 122.88,122.88 0,122.88 0,0" />
          <path className="jsSt1" d="M32.31,102.69l9.4-5.69c1.81,3.22,3.46,5.94,7.42,5.94c3.79,0,6.19-1.48,6.19-7.26V56.41h11.55v39.43 c0,11.96-7.01,17.4-17.24,17.4C40.39,113.24,35.03,108.46,32.31,102.69L32.31,102.69L32.31,102.69z M73.14,101.45l9.4-5.44 c2.48,4.04,5.69,7.01,11.38,7.01c4.78,0,7.84-2.39,7.84-5.69c0-3.96-3.13-5.36-8.41-7.67l-2.89-1.24c-8.33-3.55-13.86-8-13.86-17.4 c0-8.66,6.6-15.26,16.91-15.26c7.34,0,12.62,2.56,16.41,9.24l-8.99,5.77c-1.98-3.55-4.12-4.95-7.42-4.95 c-3.38,0-5.53,2.14-5.53,4.95c0,3.46,2.14,4.87,7.09,7.01l2.89,1.24c9.82,4.21,15.34,8.5,15.34,18.15 c0,10.39-8.17,16.08-19.14,16.08C83.45,113.25,76.52,108.13,73.14,101.45L73.14,101.45L73.14,101.45L73.14,101.45z" />
        </g>
      </svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg version="1.1" id="react-logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 109.43" enableBackground="new 0 0 122.88 109.43" xmlSpace="preserve">
        <style>{`.reactSt0{fillRule:evenodd;clipRule:evenodd;fill:#00D8FF;}`}</style>
        <g>
          <path className="reactSt0" d="M122.88,54.73c0-8.14-10.19-15.85-25.82-20.64c3.61-15.93,2-28.6-5.06-32.66c-1.63-0.95-3.53-1.4-5.61-1.4 v5.59c1.15,0,2.08,0.23,2.86,0.65c3.41,1.95,4.88,9.39,3.73,18.96c-0.28,2.35-0.73,4.83-1.28,7.36c-4.91-1.2-10.27-2.13-15.9-2.73 c-3.38-4.63-6.89-8.84-10.42-12.52C73.54,9.74,81.2,5.59,86.41,5.59V0l0,0c-6.89,0-15.9,4.91-25.02,13.43 C52.27,4.96,43.26,0.1,36.37,0.1v5.59c5.18,0,12.87,4.13,21.04,11.67c-3.51,3.68-7.01,7.86-10.34,12.5 c-5.66,0.6-11.02,1.53-15.93,2.75c-0.58-2.5-1-4.93-1.3-7.26c-1.18-9.57,0.28-17.01,3.66-18.99c0.75-0.45,1.73-0.65,2.88-0.65V0.13 l0,0c-2.1,0-4.01,0.45-5.66,1.4c-7.04,4.06-8.62,16.71-4.98,32.59C10.14,38.92,0,46.61,0,54.73c0,8.14,10.19,15.85,25.82,20.64 c-3.61,15.93-2,28.6,5.06,32.66c1.63,0.95,3.53,1.4,5.64,1.4c6.89,0,15.9-4.91,25.02-13.43c9.12,8.47,18.13,13.33,25.02,13.33 c2.1,0,4.01-0.45,5.66-1.4c7.04-4.06,8.62-16.71,4.98-32.59C112.74,70.56,122.88,62.84,122.88,54.73L122.88,54.73z M72.86,54.73 c0-6.32-5.12-11.45-11.45-11.45c-6.32,0-11.45,5.12-11.45,11.45s5.12,11.45,11.45,11.45C67.74,66.17,72.86,61.05,72.86,54.73 L72.86,54.73z M36.34,0.1L36.34,0.1L36.34,0.1L36.34,0.1z M90.27,38.02c-0.93,3.23-2.08,6.56-3.38,9.89c-1.03-2-2.1-4.01-3.28-6.01 c-1.15-2-2.38-3.96-3.61-5.86C83.56,36.57,86.99,37.22,90.27,38.02L90.27,38.02z M78.8,64.7c-1.95,3.38-3.96,6.59-6.04,9.57 c-3.73,0.33-7.51,0.5-11.32,0.5c-3.78,0-7.56-0.18-11.27-0.48c-2.08-2.98-4.11-6.16-6.06-9.52c-1.9-3.28-3.63-6.61-5.21-9.97 c1.55-3.36,3.31-6.71,5.18-9.99c1.95-3.38,3.96-6.59,6.04-9.57c3.73-0.33,7.51-0.5,11.32-0.5c3.78,0,7.56,0.18,11.27,0.48 c2.08,2.98,4.11,6.16,6.06,9.52c1.9,3.28,3.63,6.61,5.21,9.97C82.4,58.06,80.68,61.41,78.8,64.7L78.8,64.7z M86.89,61.44 c1.35,3.36,2.5,6.71,3.46,9.97c-3.28,0.8-6.74,1.48-10.32,2c1.23-1.93,2.45-3.91,3.61-5.94C84.78,65.47,85.86,63.44,86.89,61.44 L86.89,61.44z M61.49,88.16c-2.33-2.4-4.66-5.08-6.96-8.01c2.25,0.1,4.56,0.18,6.89,0.18c2.35,0,4.68-0.05,6.96-0.18 C66.12,83.08,63.79,85.76,61.49,88.16L61.49,88.16z M42.86,73.41c-3.56-0.53-6.99-1.18-10.27-1.98c0.93-3.23,2.08-6.56,3.38-9.89 c1.03,2,2.1,4.01,3.28,6.01C40.43,69.56,41.63,71.51,42.86,73.41L42.86,73.41z M61.36,21.29c2.33,2.4,4.66,5.08,6.96,8.01 c-2.25-0.1-4.56-0.18-6.89-0.18c-2.35,0-4.68,0.05-6.96,0.18C56.73,26.37,59.06,23.69,61.36,21.29L61.36,21.29z M42.83,36.04 c-1.23,1.93-2.45,3.91-3.61,5.94c-1.15,2-2.23,4.01-3.26,6.01c-1.35-3.36-2.5-6.71-3.46-9.97C35.79,37.24,39.25,36.57,42.83,36.04 L42.83,36.04z M20.16,67.4c-8.87-3.78-14.6-8.74-14.6-12.67c0-3.93,5.74-8.92,14.6-12.67c2.15-0.93,4.51-1.75,6.94-2.53 c1.43,4.91,3.31,10.02,5.64,15.25c-2.3,5.21-4.16,10.29-5.56,15.18C24.7,69.18,22.34,68.33,20.16,67.4L20.16,67.4z M33.64,103.19 c-3.41-1.95-4.88-9.39-3.73-18.96c0.28-2.35,0.73-4.83,1.28-7.36c4.91,1.2,10.27,2.13,15.9,2.73c3.38,4.63,6.89,8.84,10.42,12.52 c-8.17,7.59-15.83,11.75-21.04,11.75C35.34,103.84,34.39,103.62,33.64,103.19L33.64,103.19z M93.05,84.11 c1.18,9.57-0.28,17.01-3.66,18.99c-0.75,0.45-1.73,0.65-2.88,0.65c-5.18,0-12.87-4.13-21.04-11.67c3.51-3.68,7.01-7.86,10.34-12.5 c5.66-0.6,11.02-1.53,15.93-2.76C92.32,79.35,92.77,81.78,93.05,84.11L93.05,84.11z M102.69,67.4c-2.15,0.93-4.51,1.75-6.94,2.53 c-1.43-4.91-3.31-10.02-5.64-15.25c2.3-5.21,4.16-10.29,5.56-15.18c2.48,0.78,4.83,1.63,7.04,2.55c8.87,3.78,14.6,8.74,14.6,12.67 C117.29,58.66,111.56,63.64,102.69,67.4L102.69,67.4z" />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <svg id="typescript-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
        <path fill="#3178C6" d="M2 63.91v62.5h125v-125H2v62.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.67z" />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    svg: (
      <svg id="git-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
        <path fill="#F34F29" d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314a9.66 9.66 0 012.293 9.993L87.42 55.529c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.578 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.65 9.65 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.133 8.133 0 00.004-11.501z" />
      </svg>
    ),
  },
];

function App() {
    return (
        <>
        <div className="wrapper">
            <div className="topnav">
                <h1>Abe<span className="color">doulaye</span></h1>
                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#about">About</a>
                    <a href="#skills">Projects</a>
                    <a href="resume.pdf" download className="btn" id="resume">Resume
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                            <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                        </svg>
                    </a>
                </nav>
            </div>

            <div className="main-content">
                <section className="section1" id="home">

            <div className="particles-container">
            <div className="particle-dot" style={{ left: "12%", top: "8%", animationDuration: "22s", animationDelay: "0s" }}></div>
            <div className="particle-dot" style={{ left: "45%", top: "15%", animationDuration: "28s", animationDelay: "1.2s" }}></div>
            <div className="particle-dot" style={{ left: "78%", top: "5%", animationDuration: "19s", animationDelay: "2.5s" }}></div>
            <div className="particle-dot" style={{ left: "33%", top: "22%", animationDuration: "31s", animationDelay: "0.8s" }}></div>
            <div className="particle-dot" style={{ left: "91%", top: "18%", animationDuration: "25s", animationDelay: "3.1s" }}></div>
            <div className="particle-dot" style={{ left: "6%", top: "35%", animationDuration: "17s", animationDelay: "1.7s" }}></div>
            <div className="particle-dot" style={{ left: "55%", top: "28%", animationDuration: "34s", animationDelay: "4.2s" }}></div>
            <div className="particle-dot" style={{ left: "70%", top: "40%", animationDuration: "21s", animationDelay: "0.3s" }}></div>
            <div className="particle-dot" style={{ left: "25%", top: "48%", animationDuration: "27s", animationDelay: "2.8s" }}></div>
            <div className="particle-dot" style={{ left: "82%", top: "55%", animationDuration: "23s", animationDelay: "1.5s" }}></div>
            <div className="particle-dot" style={{ left: "38%", top: "62%", animationDuration: "29s", animationDelay: "3.6s" }}></div>
            <div className="particle-dot" style={{ left: "15%", top: "70%", animationDuration: "18s", animationDelay: "0.9s" }}></div>
            <div className="particle-dot" style={{ left: "63%", top: "68%", animationDuration: "32s", animationDelay: "2.1s" }}></div>
            <div className="particle-dot" style={{ left: "48%", top: "78%", animationDuration: "26s", animationDelay: "4.7s" }}></div>
            <div className="particle-dot" style={{ left: "88%", top: "75%", animationDuration: "20s", animationDelay: "1.1s" }}></div>
            <div className="particle-dot" style={{ left: "8%", top: "85%", animationDuration: "33s", animationDelay: "3.3s" }}></div>
            <div className="particle-dot" style={{ left: "42%", top: "88%", animationDuration: "24s", animationDelay: "0.5s" }}></div>
            <div className="particle-dot" style={{ left: "72%", top: "82%", animationDuration: "16s", animationDelay: "2.9s" }}></div>
            <div className="particle-dot" style={{ left: "95%", top: "90%", animationDuration: "30s", animationDelay: "4.0s" }}></div>
            <div className="particle-dot" style={{ left: "20%", top: "92%", animationDuration: "22s", animationDelay: "1.8s" }}></div>
            <div className="particle-dot" style={{ left: "58%", top: "10%", animationDuration: "27s", animationDelay: "3.8s" }}></div>
            <div className="particle-dot" style={{ left: "31%", top: "55%", animationDuration: "19s", animationDelay: "0.2s" }}></div>
            <div className="particle-dot" style={{ left: "67%", top: "32%", animationDuration: "35s", animationDelay: "2.3s" }}></div>
            <div className="particle-dot" style={{ left: "85%", top: "65%", animationDuration: "21s", animationDelay: "4.5s" }}></div>
            <div className="particle-dot" style={{ left: "3%", top: "50%", animationDuration: "28s", animationDelay: "1.4s" }}></div>
            <div className="particle-dot" style={{ left: "50%", top: "95%", animationDuration: "25s", animationDelay: "3.0s" }}></div>
            <div className="particle-dot" style={{ left: "76%", top: "3%", animationDuration: "31s", animationDelay: "0.7s" }}></div>
            <div className="particle-dot" style={{ left: "28%", top: "42%", animationDuration: "18s", animationDelay: "2.6s" }}></div>
            <div className="particle-dot" style={{ left: "60%", top: "73%", animationDuration: "33s", animationDelay: "4.9s" }}></div>
            <div className="particle-dot" style={{ left: "18%", top: "20%", animationDuration: "24s", animationDelay: "1.9s" }}></div>
            </div>

                    <div className="first-section">
                        <span className="wave">👋 Hi, I'm</span>

                        <h2> Abedoulaye Dia</h2>
                        <h2 className="color"> Web Developer</h2>
                        <p className="intro-text">I build beautiful, responsive and user-friendly
                            web applications with modern technologies</p>
                        <a className="btn" id="work" href="https://github.com/abedoulaye" target="_blank" rel="noreferrer">View my work
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                            </svg>
                        </a>
                        <a href="mailto:abedoulaye.m.dia@gmail.com" className="btn" id="contact">Contact Me
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                            </svg>
                        </a>

                        <div className="social-links">
                            <a href="https://github.com/abedoulaye" target="_blank" rel="noreferrer" className="logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.93.105-.735.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/abedoulaye-dia-550bb1380/" target="_blank" rel="noreferrer" className="logo">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>

                            <a href="" className="logo">
                                <svg id="mail" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <img src={Computer} alt="computer" />

                </section>

                  <div className="closing-tag">
                    <svg id="tag" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                        <defs>
                            <linearGradient id="tagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#4F8CFF" />
                                <stop offset="40%" stopColor="#5B7CFF" />
                                <stop offset="70%" stopColor="#6A5CFF" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#tagGradient)" d="M240-280 40-480l200-200 56 56-143 144 143 144-56 56Zm178 132-76-24 200-640 76 24-200 640Zm302-132-56-56 143-144-143-144 56-56 200 200-200 200Z" />
                    </svg>

                    <h3> Skills</h3>
                </div>


                <section className="skills-section" id="skills">
                  <div className="marquee-container">
                    <div className="marquee-track">
                      {[...techIcons, ...techIcons].map((icon, index) => (
                        <div key={index} className="marquee-item">
                          {icon.svg}
                          <span className="marquee-label">{icon.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                    
                  <div className="about-symbol">
                  
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                        <defs>
                            <linearGradient id="userGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#4F8CFF" />
                                <stop offset="40%" stopColor="#5B7CFF" />
                                <stop offset="70%" stopColor="#6A5CFF" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#userGradient)" d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z" />
                    </svg>
                  <h3>About Me</h3>
                  </div>

                <section className="about-section" id="about">
                    <div className="personal-picture">
                        <img src={profileHolder} id="pfp" alt="Profile" />
                    </div>
                      
                    
                  <div className="about">
                    <p className="about-tagline">
                      Crafting digital experiences, one hook at a time.
                    </p>
                    
                    <p className="about-text">
                      I'm <strong>Abedoulaye</strong> — a self-taught developer who loves 
                      turning ideas into real-world applications. I got into development 
                      through my love of computers and creating things. There's nothing 
                      quite like the moment an idea turns into something real and usable.
                    </p>
                    
                    <p className="about-text">
                      I focus on the front-end with <span className="highlight">React</span>, 
                      <span className="highlight"> TypeScript</span>, and modern CSS. I'm 
                      always exploring new tools that make the web faster and more delightful.
                    </p>
                    
                    <p className="about-text">
                      I find deep satisfaction in shipping work that's clean under the hood 
                      and polished on the surface. Performance, accessibility, and 
                      maintainability aren't afterthoughts — they're baked in from the start.
                    </p>
                    
                    <p className="about-text about-closing">
                      When I'm not coding, I'm spending time with loved ones and staying 
                      active in my community.
                    </p>
                  </div>

<div className="details">
    <div className="detail-item">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
              <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
          </svg>
        <div>
            <span className="detail-label">Location</span>
            <span className="detail-value">Philadelphia, Pennsylvania</span>
        </div>
    </div>

    <div className="detail-item">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
        </svg>
        <div>
            <span className="detail-label">Education</span>
            <span className="detail-value">Temple University — Comp Sci</span>
            <span className="detail-sub">Expected Graduation: 2029</span>
        </div>
    </div>

    <div className="detail-item">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
        </svg>
        <div>
            <span className="detail-label">Email</span>
            <a href="mailto:abedoulaye.m.dia@gmail.com" className="detail-value detail-link">abedoulaye.m.dia@gmail.com</a>
        </div>
    </div>
</div>
                </section>

                <div className="folder">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                        <defs>
                            <linearGradient id="folderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#4F8CFF" />
                                <stop offset="40%" stopColor="#5B7CFF" />
                                <stop offset="70%" stopColor="#6A5CFF" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#folderGradient)" d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z" />
                    </svg>

                    <h3>Featured Projects</h3>

                </div>

                <section className="projects-section" >


                </section>

                <div className="contact-section">
                    <div className="mini-container">
                        <img src={aiIcon} alt="AI Icon" />
                    </div>

                    <div className="mini-container">
                        <h3>Let's Work Together</h3>
                        <p>I'm currently open to new oppurtunities</p>
                        <p>Feel free to reach out!</p>
                    </div>

                    <div className="mini-container">
                        <a href="mailto:abedoulaye.m.dia@gmail.com">Contact Me
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </div>

        <footer>
            <p>@ Abedoulaye Dia. All rights reserved.</p>
        </footer>
        </>
    );
}

export default App
