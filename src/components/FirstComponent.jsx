import React from 'react'
import styles from "./FirstComponent.module.css"

export default function FirstComponent() {
    return (
      <div className={`${styles.bgImage}`}>
        <div className={`${styles.mask}`}>
          <div
            className={`d-flex justify-content-center align-items-center h-100`}
          >
            <div className="text-white">
              <h1 className="mb-3">Music Page</h1>
              <h4 className="mb-3">
                Informacion sobre tus artistas y canciones favoritas en un solo
                click
              </h4>
              <a
                href="/#"
                className="btn btn-outline-light btn-lg"
                role="button"
              >
                Muestrame mas
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}
