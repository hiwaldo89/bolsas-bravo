import React from "react"
import Vector from "../images/vector-5.svg"
import { css } from "@emotion/core"
import Logo from "../images/logo.svg"
import Whatsapp from "../images/whatsapp-green.svg"
import Instagram from "../images/instagram-green.svg"
import Facebook from "../images/facebook-green.svg"

const Footer = () => {
  return (
    <>
      <div>
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
          className="bg-green"
          css={css`
            padding-bottom: 3.5rem;
          `}
        >
          <div className="container">
            <div
              className="row"
              css={css`
                .col {
                  padding-left: 15px;
                  padding-right: 15px;
                  max-width: 50%;
                  flex: 0 0 50%;
                  color: #fff;
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 3rem;
                  &:first-of-type {
                    order: 1;
                    @media (min-width: 992px) {
                      order: 0;
                    }
                  }
                  &:nth-of-type(2) {
                    order: 2;
                    @media (min-width: 992px) {
                      order: 1;
                    }
                  }
                  &:nth-of-type(3) {
                    max-width: 70%;
                    flex: 0 0 70%;
                    margin-left: auto;
                    margin-right: auto;
                    order: 0;
                    @media (min-width: 768px) {
                      max-width: 60%;
                      flex: 0 0 60%;
                    }
                    @media (min-width: 992px) {
                      order: 2;
                      max-width: 20%;
                      flex: 0 0 20%;
                      margin-left: 0;
                      margin-right: 0;
                    }
                  }
                  &:nth-of-type(4) {
                    order: 3;
                    text-align: center;
                    @media (min-width: 992px) {
                      text-align: left;
                    }
                  }
                  &:nth-of-type(5) {
                    order: 4;
                  }
                  @media (min-width: 992px) {
                    max-width: 20%;
                    flex: 0 0 20%;
                    margin-bottom: 0;
                  }
                  .col__content {
                    margin-top: auto;
                    margin-bottom: auto;
                  }
                  a {
                    color: #fff;
                  }
                  h3 {
                    font-family: "Seravek Medium";
                  }
                }
                img {
                  width: 100%;
                  height: auto;
                }
              `}
            >
              <div
                className="col"
                css={css`
                  text-align: center;
                `}
              >
                <h3>Salamanca, Gto.</h3>
                <p>Morelos 919 Col. Centro Salamanca Gto.</p>
                <a href="">(464) 6480222</a> <br />
                <a href="">(464) 6470970</a>
              </div>
              <div
                className="col"
                css={css`
                  text-align: center;
                `}
              >
                <h3>Querétaro, Qro.</h3>
                <p>
                  Senda del Carruaje 102 local E, Milenio III Querétaro Qro.
                </p>
                <a href="">(442) 6902215</a>
              </div>
              <div
                className="col"
                css={css`
                  img {
                    max-width: 200px;
                    height: auto;
                    margin: auto;
                  }
                `}
              >
                <img src={Logo} alt="Bolsas Bravo" />
              </div>
              <div className="col">
                <h3>Social</h3>
                <div className="col__content">
                  <ul
                    css={css`
                      display: flex;
                      align-items: center;
                      list-style: none;
                      padding: 0;
                      margin: 0;
                      justify-content: center;
                      @media (min-width: 992px) {
                        justify-content: flex-start;
                      }
                      li {
                        margin-right: 15px;
                      }
                      img {
                        width: 35px;
                        height: auto;
                      }
                    `}
                  >
                    <li>
                      <a href="#" target="_blank">
                        <img src={Whatsapp} alt="whatsapp" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <img src={Instagram} alt="instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <img src={Facebook} alt="facebook" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col"
                css={css`
                  text-align: center;
                `}
              >
                <h3
                  css={css`
                    opacity: 0;
                  `}
                >
                  Correo
                </h3>
                <div className="col__content">
                  <a href="">hola@solucionesbravo.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
