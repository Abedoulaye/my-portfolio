import profileHolder from "../assets/IMG_7222.jpg";

export default function About() {
  return (
    <>
      <div className="about-symbol">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
        >
          <defs>
            <linearGradient id="userGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F8CFF" />
              <stop offset="40%" stopColor="#5B7CFF" />
              <stop offset="70%" stopColor="#6A5CFF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <path
            fill="url(#userGradient)"
            d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z"
          />
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
            I focus on the front-end with{" "}
            <span className="highlight">React</span>,
            <span className="highlight"> TypeScript</span>, and modern CSS. I'm
            always exploring new tools that make the web faster and more
            delightful.
          </p>

          <p className="about-text">
            I find deep satisfaction in shipping work that's clean under the
            hood and polished on the surface. Performance, accessibility, and
            maintainability aren't afterthoughts — they're baked in from the
            start.
          </p>

          <p className="about-text about-closing">
            When I'm not coding, I'm spending time with loved ones and staying
            active in my community.
          </p>
        </div>

        <div className="details">
          <div className="detail-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            <div>
              <span className="detail-label">Location</span>
              <span className="detail-value">Philadelphia, Pennsylvania</span>
            </div>
          </div>

          <div className="detail-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
            </svg>
            <div>
              <span className="detail-label">Education</span>
              <span className="detail-value">Temple University — Comp Sci</span>
              <span className="detail-sub">Expected Graduation: 2029</span>
            </div>
          </div>

          <div className="detail-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
            <div>
              <span className="detail-label">Email</span>
              <a
                href="mailto:abedoulaye.m.dia@gmail.com"
                className="detail-value detail-link"
              >
                abedoulaye.m.dia@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
