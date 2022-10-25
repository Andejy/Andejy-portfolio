import "../CSS/styles.css";
import andejy from "../assets/img/Andejylogo.png";

export const Header = () => {
  return (
    <>
      <header>
        <nav id="navbar" className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand logo " href="index.html">
              <img src={andejy} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
