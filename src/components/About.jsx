import "../CSS/styles.css";
import andejyLogo from "../assets/img/andejy.png";
import Andejycv from "../assets/Angelcv.pdf";
import { GrDocumentDownload } from "react-icons/gr";

export const About = () => {
  return (
    <>
      <div className="pedro"></div>
      <div className="main_backgraund">
        {" "}
        <main className="main">
          <div className="info-contend">
            <h1 className="h1">
              I'm <span>Angel</span> Jimenez{" "}
            </h1>
            <p>
              Soy un joven desarrollador web con ganas de aprender cada día más sobre este mundo de
              la programación, y aplicar mis conocimientos en mis actuales y futuros proyectos :){" "}
            </p>
            <div className="links">
              <a href="https://www.instagram.com/andejy/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/angel-de-jesus-jimenez-ramos-26193a220/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/Andejy" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=18296701805&text=Hola%2C+Me%20interesan+tus+Servicios"
                target="_blank"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <a download href={Andejycv} target="_blank">
              {" "}
              <button className="download-cv" onClick={() => alert("Gracias por descargar mi cv")}>
                {" "}
                <GrDocumentDownload className="icon"></GrDocumentDownload> Descargar Mi CV
              </button>
            </a>
          </div>
          <img src={andejyLogo} alt="Andejy Web Avatar" />
        </main>
      </div>
    </>
  );
};
