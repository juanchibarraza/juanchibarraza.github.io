import React from "react";
import "./CleanDesign.css"; // Importa el archivo CSS para los estilos

const CleanDesign = () => {
  return (
    <div className="container">
      <h1 className="title">Mi Portfolio</h1>
      <div className="projects">
        <div className="project">
          <img src="project1.png" alt="Proyecto 1" className="project-image" />
          <h2 className="project-title">Proyecto 1</h2>
          <p className="project-description">Descripción del proyecto 1...</p>
        </div>
        <div className="project">
          <img src="project2.png" alt="Proyecto 2" className="project-image" />
          <h2 className="project-title">Proyecto 2</h2>
          <p className="project-description">Descripción del proyecto 2...</p>
        </div>
      </div>
    </div>
  );
};

export default CleanDesign;
