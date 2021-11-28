import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export default function Search() {
  const [artistText, setArtistText] = useState("");
  const [songText, setSongText] = useState("");
  const history = useNavigate();

  const query = useQuery();
  const ar = query.get("artist"),
    so = query.get("song");

  const handleSubmit = (e) => {
    e.preventDefault();
    history("/music-page/artist/?artist=" + artistText + "&song=" + songText);
  };

  useEffect(() => {
    setArtistText(ar || "");
    setSongText(so || "");
  }, [ar || so]);

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <label htmlFor="artist">
          <input
            type="text"
            value={artistText}
            onChange={(e) => {
              setArtistText(e.target.value);
            }}
            className={styles.searchInput}
            placeholder="Artista"
            required
          />
        </label>
        <label htmlFor="artist">
          <input
            type="text"
            value={songText}
            onChange={(e) => {
              setSongText(e.target.value);
            }}
            className={styles.searchInput}
            placeholder="Cancion"
            required
          />
        </label>
      </div>
      <button className="btn btn-outline-success" type="submit">
        Buscar
      </button>
    </form>
  );
}
