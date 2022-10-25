import { ClassNames } from "@emotion/react";
import "../CSS/styles.css";
import { FaGithubAlt } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Card = ({ name, img, link1, link2, info, className }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} className="img" alt="" />
      </div>
      <div className="card__title">
        <h2>{name}</h2>
        <p className="card-info">{info}</p>
      </div>

      <div className="card__projects-links">
        <a href={link1} target="_blank">
          <FaGithubAlt className="icon-portafolio" />{" "}
        </a>
        <a href={link2} target="_blank">
          <FaExternalLinkAlt className="icon-portafolio" />
        </a>
      </div>
    </div>
  );
};
