import React from "react"
import Vector from "../images/vector-5.svg"
import { css } from "@emotion/core"
import { Link } from "gatsby"
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
            margin-bottom: -1px;
          `}
        />
        <div className="bg-green">
          <div
            className="container"
            css={css`
              overflow: hidden;
              padding-bottom: 3.5rem;
            `}
          >
            <div
              css={css`
                margin-right: -30px;
                margin-left: -30px;
                display: flex;
                flex-wrap: wrap;
                .col {
                  padding-left: 30px;
                  padding-right: 30px;
                  max-width: 50%;
                  flex: 0 0 50%;
                  color: #fff;
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 3rem;
                  &:first-of-type {
                    order: 3;
                    @media (min-width: 992px) {
                      order: 0;
                    }
                  }
                  &:nth-of-type(2) {
                    order: 4;
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
                    order: 1;
                    text-align: center;
                    max-width: 100%;
                    flex: 0 0 100%;
                    @media (min-width: 992px) {
                      order: 2;
                      text-align: left;
                      flex: 0 0 20%;
                      max-width: 20%;
                    }
                  }
                  &:nth-of-type(5) {
                    order: 2;
                    max-width: 100%;
                    flex: 0 0 100%;
                    text-align: center;
                    h3 {
                      display: none;
                    }
                    @media (min-width: 992px) {
                      h3 {
                        display: block;
                      }
                      text-align: left;
                      flex: 0 0 20%;
                      max-width: 20%;
                    }
                  }
                  @media (min-width: 992px) {
                    max-width: 20%;
                    flex: 0 0 20%;
                    margin-bottom: 0;
                  }
                  .col__content {
                    margin-top: 1em;
                    margin-bottom: auto;
                  }
                  a {
                    color: #fff;
                    transition: all 0.3s ease-in-out;
                    text-decoration: none;
                    &:hover {
                      opacity: 0.7;
                    }
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
                data-sal="slide-up"
              >
                <h3>Salamanca, Gto.</h3>
                <p>Morelos 919 Col. Centro Salamanca Gto.</p>
                <a href="tel:4646480222">(464) 6480222</a> <br />
                <a href="tel:4646470970">(464) 6470970</a>
              </div>
              <div
                className="col"
                css={css`
                  text-align: center;
                `}
                data-sal="slide-up"
              >
                <h3>Querétaro, Qro.</h3>
                <p>
                  Senda del Carruaje 102 local E, Milenio III Querétaro Qro.
                </p>
                <a href="tel:4426902215">(442) 6902215</a>
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
                data-sal="slide-up"
              >
                <img src={Logo} alt="Bolsas Bravo" />
              </div>
              <div className="col" data-sal="slide-up">
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
                        margin-left: 15px;
                        @media (min-width: 992px) {
                          margin-left: 0;
                        }
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
                      <a
                        href="https://www.instagram.com/soluciones.bravo/"
                        target="_blank"
                      >
                        <img src={Instagram} alt="instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/BRAVO-Bolsas-biodegradables-107691267498532"
                        target="_blank"
                      >
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
                data-sal="slide-up"
              >
                <h3
                  css={css`
                    opacity: 0;
                  `}
                >
                  Correo
                </h3>
                <div className="col__content">
                  <a href="mailto:hola@solucionesbravo.com">
                    hola@solucionesbravo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            css={css`
              background-color: rgba(0, 0, 0, 0.2);
            `}
          >
            <div
              className="container"
              css={css`
                text-align: center;
                padding: 0.5rem;
                &,
                a {
                  color: #fff;
                  text-decoration: none;
                }
                a {
                  transition: all 0.3s ease-in-out;
                  &:hover {
                    opacity: 0.7;
                  }
                }
                span {
                  margin: 0 1rem;
                }
              `}
            >
              Bolsas Bravo <span>|</span>{" "}
              <Link to="/aviso-de-privacidad">Aviso de privacidad</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer