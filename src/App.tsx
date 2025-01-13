import keaLogo from "./assets/kea-logo.svg";
import kvucLogo from "./assets/kvuc-logo.svg";
import geomaticLogo from "./assets/geomatic-logo.svg";
import clinicVonHuth from "./assets/clinic-von-huth.png";
import sqaureSpace from "./assets/lineicons_squarespace.svg";
import webLogo from "./assets/streamline_web-solid.svg";
import ilulisatPsykoterapi from "./assets/ilulissat-psykoterapi.png";
import githubLogo from "./assets/github.svg";
import linkedinLogo from "./assets/linkedin.svg";
import mailIcon from "./assets/mail2.svg";
import cssLogo from "./assets/skill-icons_css.svg";
import htmlLogo from "./assets/skill-icons_html.svg";
import jsLogo from "./assets/skill-icons_javascript.svg";

import "./App.css";

function App() {
  return (
    <>
      <h1>Mille Helbo</h1>
      <h2 className="purple">Web Developer</h2>
      <a href="https://github.com/Helbob" target="_blank">
        <img src={githubLogo} className="links" alt="React logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/siff-mille-helbo-blaaberg-a40329178/"
        target="_blank"
      >
        <img src={linkedinLogo} className="links" alt="React logo" />
      </a>
      <a href="mailto:millehelbo@outlook.dk">
        <img src={mailIcon} className="links" alt="React logo" />
      </a>
      <section>
        <h2>ABOUT ME</h2>
        <p>
          I am a 24 year old aspiring web developer with a passion for
          creativity and technology.
        </p>
        <p>
          I am nearing the end of my web development bachelors, with graduation
          planned for January 2025. After that, I am excited to apply my skills
          in real-world projects and continue growing as a developer.
        </p>
      </section>
      <section>
        <h2>EDUCATION</h2>
        <div className="split">
          <div className="split">
            <img src={keaLogo} className="logo react" alt="React logo" />
            <div>
              <h3>KEA - Copenhagen School of Design and Technology</h3>
              <p>Bachelor's Degree in Web Development</p>
            </div>
          </div>
          <div>
            <p>August 2023 - January 2025</p>
          </div>
        </div>
        <div className="split">
          <div className="split">
            <img src={keaLogo} className="logo react" alt="React logo" />
            <div>
              <h3>KEA - Copenhagen School of Design and Technology</h3>
              <p>AP Graduate in Multimedia Design</p>
            </div>
          </div>
          <div>
            <p>August 2021 - July 2023</p>
          </div>
        </div>
        <div className="split">
          <div className="split">
            <img src={kvucLogo} className="logo react" alt="React logo" />
            <div>
              <h3>KVUC Vognmagergade</h3>
              <p>Higher Preparatory Examination Programme (HF)</p>
            </div>
          </div>
          <div>
            <p>August 2019 - July 2021</p>
          </div>
        </div>
      </section>

      <section>
        <h2>EXPERIENCE</h2>
        <div className="split">
          <div className="split">
            <img src={geomaticLogo} className="logo react" alt="React logo" />
            <div>
              <h3>Geomatic A/S</h3>
              <p>Student Assistent</p>
            </div>
          </div>
          <div>
            <p>April 2023 - Now</p>
          </div>
        </div>
        <div className="split">
          <div className="split">
            <img src={geomaticLogo} className="logo react" alt="React logo" />
            <div>
              <h3>Geomatic A/S</h3>
              <p>Intern as Web Developer</p>
            </div>
          </div>
          <div>
            <p>10 weeks, August 2024 - October 2024</p>
          </div>
        </div>
        <div className="split">
          <div className="split">
            <img src={geomaticLogo} className="logo react" alt="React logo" />
            <div>
              <h3>Geomatic A/S</h3>
              <p>Intern as Multimediadesigner</p>
            </div>
          </div>
          <div>
            <p>10 weeks, January 2023 - Aprll 2023</p>
          </div>
        </div>
      </section>
      <section>
        <section>
          <h2>PROJECTS</h2>
          <div id="projects">
            <div>
              <div className="projectBox">
                <img src={clinicVonHuth} alt="" />
                <div className="padding">
                  <p>Clinic von Huth</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    rhoncus dictum leo lacinia blandit. Suspendisse sed sem
                    interdum, fringilla. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
                <div className="icons">
                  <div className="icon2">
                    <img src={sqaureSpace} alt="" />
                  </div>
                  <a
                    href="https://www.clinicvonhuth.dk/"
                    target="_blank"
                    className="icon1"
                  >
                    <img src={webLogo} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="projectBox">
                <img src={ilulisatPsykoterapi} alt="" />
                <div className="padding">
                  <p>Ilulissat Psykoterapi</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    rhoncus dictum leo lacinia blandit. Suspendisse sed sem
                    interdum, fringilla. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
                <div className="icons">
                  <div className="icon2">
                    <img src={sqaureSpace} alt="" />
                  </div>
                  <a
                    href="https://www.ilulissat-psykoterapi.dk/"
                    target="_blank"
                    className="icon1"
                  >
                    <img src={webLogo} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="projectBox">
                <img src={ilulisatPsykoterapi} alt="" />
                <div className="padding">
                  <p>Ilulissat Psykoterapi</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    rhoncus dictum leo lacinia blandit. Suspendisse sed sem
                    interdum, fringilla. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
                <div className="icons">
                  <div className="icon2">
                    <img src={htmlLogo} alt="" />
                    <img src={cssLogo} alt="" />
                    <img src={jsLogo} alt="" />
                  </div>
                  <a
                    href="https://www.ilulissat-psykoterapi.dk/"
                    target="_blank"
                    className="icon1"
                  >
                    <img src={webLogo} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section id="skills">
        <h2>SKILLS</h2>
        <div className="">
          <div className="flex">
            <p>HTML/CSS</p>
            <p>React</p>
            <p>Next.js</p>
            <p>JavaScript</p>
            <p>Node.js</p>
            <p>Python</p>
            <p>PHP</p>
            <p>Tailwind CSS</p>
            <p>SASS</p>
            <p>Webflow</p>
            <p>Squarespace</p>
            <p>ArangoDB</p>
            <p>Postgres</p>
            <p>MySQL</p>
            <p>Docker</p>
            <p>Design Thinking</p>
            <p>Adobe XD</p>
            <p>Figma</p>
            <p>Illustrator</p>
            <p>Bottle</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
