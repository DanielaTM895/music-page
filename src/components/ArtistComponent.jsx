import React from "react";
import styles from "./ArtistComponent.module.css";

export default function ArtistComponent() {
  return (
    <div className="container-md">
      <div className="row bg-light">
        <div className="row text-black text-center">
          <h1 className="mb-3">Artistas</h1>
        </div>
        <hr />
        <div className="row  align-items-center">
          <ul className={`${styles.artistGrid} justify-content-center`}>
            <li className={styles.artistCard}>
              <div className="col">
                <div className={`card ${styles.tam} border-dark mb-3`}>
                  <img
                    src="https://www.theaudiodb.com/images/media/artist/thumb/vifn4f1617650128.jpg"
                    alt="Foto"
                    className="card-img-top img-fluid"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Items utilizables</li>
                    <li className="list-group-item">Items utilizables</li>
                    <li className="list-group-item">Items utilizables</li>
                  </ul>
                  <div className="card-body card text-end">
                    <a
                      class="btn btn-outline-primary card-link"
                      href="/#"
                      role="button"
                    >
                      Ver mas
                    </a>
                    <a class="btn btn-outline-success" href="/#" role="button">
                      Seguir
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.artistCard}>
              <div className="col">
                <div className={`card ${styles.tam} border-dark mb-3`}>
                  <img
                    src="https://www.theaudiodb.com/images/media/artist/thumb/vifn4f1617650128.jpg"
                    alt="Foto"
                    className="card-img-top img-fluid"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Items utilizables</li>
                    <li className="list-group-item">Items utilizables</li>
                    <li className="list-group-item">Items utilizables</li>
                  </ul>
                  <div className="card-body card text-end">
                    <a
                      class="btn btn-outline-primary card-link"
                      href="/#"
                      role="button"
                    >
                      Ver mas
                    </a>
                    <a class="btn btn-outline-success" href="/#" role="button">
                      Seguir
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.artistCard}>
              <div className="col">
                <div className={`card ${styles.tam} border-dark mb-3`}>
                  <img
                    src="https://www.theaudiodb.com/images/media/artist/thumb/vifn4f1617650128.jpg"
                    alt="Foto"
                    className="card-img-top img-fluid"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Items utilizables</li>
                    <li className="list-group-item">Items utilizables</li>
                    <li className="list-group-item">Items utilizables</li>
                  </ul>
                  <div className="card-body card text-end">
                    <a
                      class="btn btn-outline-primary card-link"
                      href="/#"
                      role="button"
                    >
                      Ver mas
                    </a>
                    <a class="btn btn-outline-success" href="/#" role="button">
                      Seguir
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
