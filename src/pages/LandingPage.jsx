import React from "react";
import FirstComponent from "../components/FirstComponent";
import SecondComponent from "../components/SecondComponent";
import ArtistComponent from "../components/ArtistComponent";
import styles from "./LandingPage.module.css";


export default function LandingPage() {
  return (
    <div>
      <FirstComponent />
      <hr />
      <SecondComponent />
      <hr />
      <ArtistComponent />
      <hr />
      <SecondComponent />
      <hr />
      <FirstComponent />
      <hr />
    </div>
  );
}
