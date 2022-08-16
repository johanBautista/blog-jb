import "../styles/skills.modules.css";
import {
  FaReact,
  FaGithub,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaJira,
  FaBitbucket,
  FaGitlab,
  FaSlack,
  FaTrello,
} from "react-icons/fa";
import { SiBootstrap, SiJavascript, SiPostman, SiTypescript } from "react-icons/si";

export const Skills = () => {
  return (
    <div className="back">
      <i>
        I’m a front end developer specializing in projects with technologies for build SPA’s i like the design also the
        user experience. If you knowmy last projects click here or if you know the artist behind this spectacular
        pictures for your works, please click here. Thanks!
      </i>
      <div className="contaner-skills">
        <div className="section-skills">
          <p>Estructure & layout</p>
          <div className="skills">
            <span>
              <FaHtml5 className="FaHtml5" />
            </span>
            <span>
              <FaCss3Alt className="FaCss3Alt" />
            </span>
            <span>
              <SiBootstrap className="SiBootstrap" />
            </span>
          </div>
        </div>
        {/*  */}
        <div className="section-skills">
          <p>Logic libraries & frameworks</p>
          <div className="skills">
            <span className="SiJavascript">
              <SiJavascript />
            </span>
            <span className="FaReact">
              <FaReact />
            </span>
            <span className="SiTypescript">
              <SiTypescript />
            </span>
            <span className="FaAngular">
              <FaAngular />
            </span>
          </div>
        </div>
        {/*  */}
        <div className="section-skills">
          <p>Version control</p>
          <div className="skills">
            <span className="FaGithub">
              <FaGithub />
            </span>
            <span className="FaBitbucket">
              <FaBitbucket />
            </span>
            <span className="FaGitlab">
              <FaGitlab />
            </span>
          </div>
        </div>
        {/*  */}
        <div className="section-skills">
          <p>Other development tools</p>
          <div className="skills">
            <span className="SiPostman">
              <SiPostman />
            </span>
            <span className="FaTrello">
              <FaTrello />
            </span>
            <span className="FaSlack">
              <FaSlack />
            </span>
            <span className="FaJira">
              <FaJira />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
