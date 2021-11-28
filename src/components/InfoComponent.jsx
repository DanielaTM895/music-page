import React from "react";

export default function InfoComponent({ artista }) {
  if (artista == null) {
    return <div>No hay informacion</div>;
  }

  return (
    <div>
      <h4 className="mb-3">{artista.strArtist}</h4>
      <img src={artista.strArtistThumb} alt="" className="img-fluid" />
      <p>
        {artista.intBornYear} - {artista.intDiedYear || "Presente"}
      </p>
      <p>{artista.strCountry}</p>
      <p>
        {artista.strGenre} - {artista.strStyle}
      </p>
      <p>
        <a
          className="btn btn-outline-dark"
          href={`https://${artista.strWebsite}`}
          target="_blank"
        >
          Sitio web
        </a>
      </p>
      <p>{artista.strBiographyES}</p>
    </div>
  );
}
