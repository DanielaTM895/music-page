import React from "react";
import { MdHeadset, MdNotificationsActive } from "react-icons/md";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/music-page">
          <span className="navbar-brand mb-0 h1">Music Page</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/music-page/artist"
              >
                Artistas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/songs">
                Letras de canciones
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mas opciones
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/albums">
                    Albums
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/eps">
                    EP's
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/singles">
                    Sencillos
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="discs">
                Discografias
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  <MdHeadset size={25} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  <MdNotificationsActive size={25} />
                </a>
              </li>
              <li className="nav-item dropstart">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarIzquierda"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className={styles.avatar}
                    src="https://i.imgur.com/xASbbpf.gif"
                    alt="Avatar"
                  />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarIzquierda">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Mi perfil
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/settings">
                      Ajustes
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="exit">
                      Salir
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
