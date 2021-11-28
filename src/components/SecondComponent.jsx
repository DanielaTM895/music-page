import React from "react";

export default function SecondComponent() {
  return (
    <div className="container-md">
      <div className="row text-center">
        <div className="text-black">
          <h1 className="mb-3">Sobre nosotros...</h1>
        </div>
        <div className="container-sm">
          <div className="col-md">
            <p className="mb-2">
              Este es un texto de prueba, nos sirve para maquetar y hacer la
              diferencia para notar que tan grande puede ser el texto puesto en
              este lugar.
            </p>
            <p className="mb-2">
              Generalmente se utilizan textos largos generados automaticamente
              por extenciones o sitios web que se dedican al relleno de espacios
              vacios con palabras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
