import React from "react";
import "./Servicios.css";
import ImageGallery from "./ImageGallery";
function Servicios() {
  const serviceImages = [
    {
      id: 1,
      src: "src/assets/icons/traditional.svg",
      alt: "Tradicional",
      description: "Manicura tradicional es...",
    },
    {
      id: 2,
      src: "src/assets/icons/semipermanent.svg",
      alt: "Semipermanente",
      description: "Esmaltado semipermanente es...",
    },
    {
      id: 3,
      src: "src/assets/icons/dippowder.svg",
      alt: "Dip powder",
      description: "Dip powder es...",
    },
    {
      id: 4,
      src: "src/assets/icons/art-2.svg",
      alt: "Capping gel",
      description: "Capping gel es...",
    },
    {
      id: 5,
      src: "src/assets/icons/polygel.svg",
      alt: "Soft gel",
      description: "Soft gel es...",
    },
  ]

  return (
    <>
      <h2 className="text-center">Servicios</h2>
      <div className="my-4"></div>
      <p>
        ¿Quieres lucir unas manos y uñas espectaculares? En VG Nails
        Art Studio, te ofrecemos una experiencia de manicura excepcional que
        resaltará la belleza natural de tus manos y te llenará de confianza.
      </p>
      <p>
        Explora nuestra amplia gama de servicios de manicura, pedicura,
        esmaltado semipermanente, tratamientos para uñas y más. ¡Descubre cómo
        realzar la belleza de tus manos y uñas!
      </p>

      <div>

        <ImageGallery images={serviceImages} className={"row-cols-1 row-cols-lg-3 g-4 row-with-icons"} cardClassName={"card-with-icon"} imgClassName={"img-with-icon my-3"} />
      </div>
    </>
  );
}

export default Servicios;
