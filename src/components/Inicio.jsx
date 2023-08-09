// Inicio.jsx
import React from "react";
import Button from "./Button";
import "./Inicio.css"; // Assuming you have a separate CSS file for Inicio styles.
import ReadMore from "./ReadMore";
import Paragraph from "./Paragraph";

const Inicio = () => {
  return (
    <div className="home-section-container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-50">
          <div>
            <h1>Bienvenidos a Nail Art Studio</h1>
            <ReadMore>
              <Paragraph>
                En nombre de VG Nails Art Studio, me destaco a resaltar la belleza
                natural de tus manos y uñas mientras te brindo una experiencia
                relajante y revitalizante. Me encuentro comprometida con la
                excelencia y la creatividad, asegurando que cada visita sea única
                y satisfactoria.
              </Paragraph>
              <Paragraph>
                ¿Qué nos hace especiales? Mi pasión por el arte de la manicura y
                la atención al detalle. Cada uno de mis servicios es realizado con
                precisión y cuidado para lograr resultados excepcionales.
                Utilizando productos de la más alta calidad, respetuosos con tus
                uñas y el medio ambiente, para que puedas lucir unas manos
                saludables y hermosas.
              </Paragraph>
            </ReadMore>
          </div>

          {/* <Button className="btn btn-primary">Read More</Button> */}
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img
            src="src/assets/nails-art-studio.jpg"
            alt="Nails Art Studio"
            className="rounded-circle show-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
