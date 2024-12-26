import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import "../../css/MapaUNScreen.css";
import MapaGallery from "../../components/MapaGallery";

const MapaUN = () => {
  const [facultad, setFacultad] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Contenido para cada facultad
  const facultyContent = {
    Derecho: [["LA UNIVERSIDAD HA SIDO…", "Mateo Juyo Martín","https://crealoun.wordpress.com/wp-content/uploads/2024/12/mateo_juyo.jpeg"], ["SI VAS A LA U NO TE PIERDAS ESTAS ACTIVIDADES","Oriany Meller Cabrales","https://crealoun.wordpress.com/wp-content/uploads/2024/12/oriany_meller.png?w=1024"]],
    Humanas: [["YO ELIJO NO SER CUERDA","Carla Ordoñez Osorno","https://crealoun.wordpress.com/wp-content/uploads/2024/12/oriany_meller.png?w=1024"],["DONDE NADA ME MOLESTA","Jorge Rojas Cabrera","https://crealoun.wordpress.com/wp-content/uploads/2024/12/jorge_rojas.jpg"]],
    Ciencias: [["DORMIR","Luisa Tolosa Jaimes","https://crealoun.wordpress.com/wp-content/uploads/2024/12/luisa_tolosa.jpg?w=1024"], ["UNA CASA","Margarita Gómez","https://crealoun.wordpress.com/wp-content/uploads/2024/12/margarita_gomez.jpg?w=1024"]],
    Ingenieria: [["LA NACHO","Diana Carolina","https://crealoun.wordpress.com/wp-content/uploads/2024/12/diana_carolina.jpg"], ["[[SIN NOMBRE]]","Louisiana","https://crealoun.wordpress.com/wp-content/uploads/2024/12/louisiana.jpg"]],
    Artes: [["OTROS MUNDOS POSIBLES EN LA UN","Mauricio Guevara Romero","https://crealoun.wordpress.com/wp-content/uploads/2024/12/mauricio_guevara.jpeg"], ["LA UN ES…","Karina Grimaldo Rojas","https://crealoun.wordpress.com/wp-content/uploads/2024/12/karina_grimaldo.jpeg"]],
  };

  const handleSectorClick = (sectorId) => {
    setFacultad(sectorId);
    setModalIsOpen(true);
    alert(`Clic en el sector: ${sectorId}`);
  };

  const handleCloseModal = () => {
    setFacultad(null);
  };

  return (
    <div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="1080px"
        height="1080px"
        viewBox="0 0 1080 1080"
        xmlSpace="preserve"
      >
        {/* Fondo */}
        <g id="Fondo_xA0_Imagen_1_">
          <image
            style={{ overflow: "visible" }}
            width="4500"
            height="4500"
            id="Fondo_xA0_Imagen"
            name="CFA37BD6"
            xlinkHref="https://crealoun.wordpress.com/wp-content/uploads/2024/12/cfa37bd6-1.jpg?w=1024"
            transform="matrix(0.24 0 0 0.24 0 0)"
          />
        </g>

        {/* Artes */}
        <g id="Artes_xA0_Imagen_1_" onClick={() => handleSectorClick("Artes")}>
          <image
            style={{ overflow: "visible" }}
            width="831"
            height="937"
            id="Artes_xA0_Imagen"
             name="CFA37BDA"
            xlinkHref="https://crealoun.wordpress.com/wp-content/uploads/2024/12/cfa37bda.png"
            transform="matrix(0.24 0 0 0.24 712.3203 608.8799)"
          />
        </g>

        {/* Ciencias */}
        <g
          id="Ciencias_xA0_Imagen_1_"
          onClick={() => handleSectorClick("Ciencias")}
        >
          <image
            style={{ overflow: "visible" }}
            width="932"
            height="920"
            id="Ciencias_xA0_Imagen"
            name="CFA37BDD"
            xlinkHref="https://crealoun.wordpress.com/wp-content/uploads/2024/12/cfa37bdd.png"
            transform="matrix(0.24 0 0 0.24 533.52 551.5195)"
          />
        </g>

        {/* Ingeniería */}
        <g
          id="Ingenieria_xA0_Imagen_1_"
          onClick={() => handleSectorClick("Ingenieria")}
        >
          <image
            style={{ overflow: "visible" }}
            width="939"
            height="796"
            id="Ingenieria_xA0_Imagen"
            name="CFA37BDE"
           
            xlinkHref="https://crealoun.wordpress.com/wp-content/uploads/2024/12/cfa37bde.png"
            transform="matrix(0.24 0 0 0.24 609.5996 462.96)"
          />
        </g>

        {/* Humanas */}
        <g
          id="Humanas_xA0_Imagen_1_"
          onClick={() => handleSectorClick("Humanas")}
        >
          <image
            style={{ overflow: "visible" }}
            width="632"
            height="635"
            id="Humanas_xA0_Imagen"
            name="CFA37BDC"
            xlinkHref="https://crealoun.wordpress.com/wp-content/uploads/2024/12/cfa37bdc.png"
            transform="matrix(0.24 0 0 0.24 521.2798 836.1602)"
          />
        </g>

        {/* Derecho */}
        <g
          id="Derecho_xA0_Imagen_1_"
          onClick={() => handleSectorClick("Derecho")}
        >
          <image
            style={{ overflow: "visible" }}
            width="613"
            height="648"
            id="Derecho_xA0_Imagen"
              name="CFA37BDB"
            xlinkHref="https://crealoun.wordpress.com/wp-content/uploads/2024/12/cfa37bdb-1.png"
            transform="matrix(0.24 0 0 0.24 583.9199 722.4004)"
          />
        </g>
      </svg>

      {/* Ventana modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        {/* Contenido dinámico basado en la facultad seleccionada */}
        {/* {facultad && facultyContent[facultad]} */}
        <MapaGallery
          images={facultyContent[facultad]}
        />
      </Modal>
    </div>
  );
};

export default MapaUN;
