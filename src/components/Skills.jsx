import "../CSS/styles.css";
import reactLogo from "../assets/react.svg";
import jsLogo from "../assets/icon-js.svg";
import htmlLogo from "../assets/icon-html.svg";
import cssLogo from "../assets/icon-css.svg";
import sassLogo from "../assets/icon-sass.svg";
import bootstrapLogo from "../assets/icon-bootstrap.svg";

export const Skills = () => {
  return (
    <>
      <div id="skills">
        <div className="container">
          <h2 className="skili">
            My <span>Skills</span>{" "}
          </h2>
          <div className="divider"></div>
          <div className="skills-row">
            <div className="skills-row-left">
              <div className="skills-row-left-image">
                <a href="https://developer.mozilla.org/es/docs/Web/HTML" target={"_blank"}>
                  <img className="html-logo" src={htmlLogo} alt="Html logo" />
                </a>
              </div>
              <div className="skills-row-left-text">
                <h4>HTML</h4>
              </div>
            </div>
            <div className="skills-row-right">
              <div className="skills-row-right-image">
                <a href="https://sass-lang.com" target={"_blank"}>
                  {" "}
                  <img className="sas-logo" src={sassLogo} alt="sass logo" />
                </a>
              </div>
              <div className="skills-row-right-text">
                <h4>SASS</h4>
              </div>
            </div>
          </div>
          <div className="skills-row">
            <div className="skills-row-left">
              <div className="skills-row-left-image">
                <a
                  href="https://developer.mozilla.org/es/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img className="css-logo" src={cssLogo} alt="" />
                </a>
              </div>
              <div className="skills-row-left-text">
                <h4>CSS</h4>
              </div>
            </div>
            <div className="skills-row-right">
              <div className="skills-row-right-image">
                <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img className="boos-logo" src={bootstrapLogo} alt="" />
                </a>
              </div>
              <div className="skills-row-right-text">
                <h4>Bootstrap</h4>
              </div>
            </div>
          </div>
          <div className="skills-row">
            <div className="skills-row-left">
              <div className="skills-row-left-image">
                <a href="https://www.javascript.com" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img className="js-logo" src={jsLogo} alt="" />
                </a>
              </div>
              <div className="skills-row-left-text">
                <h4>Javascript</h4>
              </div>
            </div>
            <div className="skills-row-right">
              <div className="skills-row-right-image">
                <a href="https://es.reactjs.org" target="_blank" rel="noopener noreferrer">
                  <img className="reactLogo" src={reactLogo} alt="" />
                </a>
              </div>
              <div className="skills-row-right-text">
                <h4>React.JS</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />

      <div />
    </>
  );
};
