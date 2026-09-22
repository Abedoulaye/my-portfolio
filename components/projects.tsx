import diariatas_fabrics from "../assets/diariatas_fabrics.png";
import nexus from "../assets/nexus-screenshot.png";
import coinsight from "../assets/coinsight-screenshot.png";

export default function Projects() {
  return (
    <>
      <div className="folder">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
        >
          <defs>
            <linearGradient
              id="folderGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#4F8CFF" />
              <stop offset="40%" stopColor="#5B7CFF" />
              <stop offset="70%" stopColor="#6A5CFF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <path
            fill="url(#folderGradient)"
            d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"
          />
        </svg>

        <h3>Featured Projects</h3>
      </div>

      <section className="projects-section" id="projects">
        <div className="project-card">
          <img src={diariatas_fabrics} alt="Metrica Dashboard projects" />
          <h4>Diariata's Fabrics</h4>
          <p>
            A full-stack e-commerce platform for my self-employed mother who
            sells west african clothes, customers can purchase her products
            fully online and have them shipped, this is a project that covers
            all the main features an e-commerce platform would have
          </p>

          <div className="tags">
            <div className="tag react">React</div>
            <div className="tag typescript">Go</div>
            <div className="tag postgres">PostgreSQL</div>
            <a
              href="https://github.com/Abedoulaye/perle-d-afrique"
              target="_blank"
              rel="noopener noreferrer"
              className="open-in-a-new-tab-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={nexus} alt="Nexus AI project" />
          <h4>AI Agent</h4>
          <p>
            an AI coding and debugging Agent that can write and execute code to
            fix issues using OpenAI's function-calling API
          </p>

          <div className="tags">
            <div className="tag python">Python</div>
            <div className="tag open-ai">OpenAI</div>

            <a
              href="https://github.com/Abedoulaye/Agent"
              target="_blank"
              rel="noopener noreferrer"
              className="open-in-a-new-tab-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={coinsight} alt="Coinsight project" />
          <h4>Coinsight</h4>
          <p>
            AI-integrated Real-time cryptocurrency dashboard, with price
            tracking, interactive charts, and an investment calculator. Powered
            by the CoinGecko API.
          </p>
          <div className="tags">
            <div className="tag react">React</div>
            <div className="tag typescript">TypeScript</div>
            <div className="tag css">CSS</div>

            <a
              href="https://github.com/abedoulaye/coin-sight"
              target="_blank"
              rel="noopener noreferrer"
              className="open-in-a-new-tab-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
