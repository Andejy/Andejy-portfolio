import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header></Header>
    <About></About>
    <Skills></Skills>
    <Portfolio></Portfolio>
  </React.StrictMode>,
);
