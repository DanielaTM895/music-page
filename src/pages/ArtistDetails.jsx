import React, { useEffect, useState } from "react";
import InfoComponent from "../components/InfoComponent";
import Search from "../components/Search";
import { useQuery } from "../hooks/useQuery";

export default function ArtistDetails() {
  const query = useQuery();
  const arp = query.get("artist"),
    sop = query.get("song");

  console.log(arp, sop);

  const [artist, setArtist] = useState([]);
  const [song, setSong] = useState("");
  const artistAPI = "https://theaudiodb.com/api/v1/json/2/search.php?s=";
  const songAPI = `https://api.lyrics.ovh/v1/`;

  useEffect(() => {
    fetch(artistAPI + arp)
      .then((result) => result.json())
      .then((data) => {
        setArtist(data.artists);
      });
  }, [arp]);

  useEffect(() => {
    fetch(songAPI + arp + "/" + sop)
      .then((result) => result.json())
      .then((data) => {
        setSong(data.lyrics);
      });
  }, [sop]);

  const dat = artist ? artist[0] : null;

  return (
    <div className="container-fluid justify-content-center">
      <div className="row text-center align-content-center">
        <h1 class="mb-3">Buscador musical</h1>
        <div class="container-sm">
          <div class="row">
            <div class="col-sm">
              <p class="mb-1">
                Este es un texto de prueba, nos sirve para maquetar y hacer la
                diferencia para notar que tan grande puede ser el texto puesto
                en este lugar.
              </p>
              <p>
                Generalmente se utilizan textos largos generados automaticamente
                por extenciones o sitios web que se dedican al relleno de
                espacios vacios con palabras.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Search />
      <hr />
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h2 className="mb-3">Informacion del artista</h2>
          <InfoComponent artista={dat} />
        </div>
        <div className="col-md-5">
          <h2 className="mb-3">Letra de la cancion</h2>
          <div className="">
            <blockquote>{song}</blockquote>
          </div>
        </div>
        <article className="error"></article>
      </div>
    </div>
  );
}
