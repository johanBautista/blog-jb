import "../styles/home.modules.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const Home = () => {
  const mobile = true;
  return (
    <div className="home-view">
      <div className="home-title">
        {mobile ? (
          <i>Johan Stevens Bautista Parra</i>
        ) : (
          <i>
            I’m a front end developer specializing in projects with technologies for build SPA’s i like the design also
            the user experience. If you knowmy last projects click here or if you know the artist behind this
            spectacular pictures for your works, please click here. Thanks!
          </i>
        )}
        <h1 className="nombre">Frontend Developer</h1>
        <div className="redes">
          <FaLinkedin />
          <FaGithub />
          <FaEnvelope />
        </div>
      </div>
    </div>
  );
};
