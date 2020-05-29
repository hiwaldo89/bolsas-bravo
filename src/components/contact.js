import React from "react"
import { css } from "@emotion/core"
import Whatsapp from "../images/whatsapp.svg"
import Facebook from "../images/facebook.svg"
import Instagram from "../images/instagram.svg"
import Vector from "../images/vector-6.svg"

const Contact = () => {
  return (
    <>
      <div
        id="contacto"
        css={css`
          position: relative;
          margin-top: -3rem;
        `}
      >
        <img
          src={Vector}
          alt="vector"
          css={css`
            width: 100%;
            height: auto;
            display: block;
          `}
        />
        <div
          css={css`
            background-color: #fff;
            padding-top: 4rem;
          `}
        >
          <div className="container">
            <div
              className="row"
              css={css`
                align-items: center;
                padding-bottom: 7rem;
              `}
            >
              <div
                css={css`
                  color: #009d4f;
                  max-width: 100%;
                  flex: 0 0 100%;
                  padding-left: 15px;
                  padding-right: 15px;
                  margin-left: auto;
                  text-align: center;
                  margin-bottom: 3rem;
                  @media (min-width: 768px) {
                    max-width: 42%;
                    flex: 0 0 42%;
                    text-align: left;
                    margin-bottom: 0;
                  }
                  h2 {
                    margin-top: 0;
                  }
                `}
              >
                <h2>¿Necesitas mayores informes?</h2>
                <p
                  css={css`
                    font-family: "Seravek Medium";
                  `}
                >
                  ¡Estamos para ayudarte!
                  <br />
                  Escríbenos y resolveremos todas tus inquietudes.
                </p>
              </div>
              <div
                css={css`
                  max-width: 100%;
                  flex: 0 0 100%;
                  margin-right: auto;
                  text-align: center;
                  @media (min-width: 768px) {
                    max-width: 33%;
                    flex: 0 0 33%;
                    text-align: right;
                  }
                  a {
                    margin-left: -10px;
                  }
                `}
              >
                <a href="#" target="_blank">
                  <img src={Whatsapp} alt="whatsapp" />
                </a>
                <a href="#" target="_blank">
                  <img src={Facebook} alt="facebook" />
                </a>
                <a href="#" target="_blank">
                  <img src={Instagram} alt="instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
