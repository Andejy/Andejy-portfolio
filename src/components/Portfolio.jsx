import "../CSS/styles.css";
import { Card } from "./Card";
import jupe from "../assets/img/jupe.png";
import tropical from "../assets/img/tropical.png";
import weatherapp from "../assets/img/weatherapp.png";
import Bankai from "../assets/img/Bankai.png";

export const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolio-headings">
        <h2> MY Projects</h2>
        <div className="divider"></div>
      </div>

      <div className="container">
        <Card
          name="Project Jupe"
          img={jupe}
          info="Esta es una pagina wep sobre mi pastoral vuvenil"
          link1="https://github.com/Andejy/pastoral-jupe"
          link2="https://pastoraljupe.netlify.app"
        />
        <Card
          img={tropical}
          name="Tropical desserts"
          info="Esta es una pagina web sobre una pasteleria"
          link1="https://github.com/Andejy/Tropical_Desserts"
          link2="https://tropical-desserts.netlify.app"
        />
        <Card
          img={weatherapp}
          name="Weather App"
          info="Esta es una pagina wep sobre el clima"
          link1="https://github.com/Andejy/React-weatherApp/tree/master"
          link2="https://guileless-sprinkles-d3f4dc.netlify.app"
        />
        <Card
          img={Bankai}
          name="Peluqueria Bankai"
          info="Esta es una pagina web sobre una peluqueria"
          link1="https://github.com/Andejy/Bankai"
          link2="https://voluble-pegasus-b50e23.netlify.app"
        />
      </div>
    </div>
  );
};
