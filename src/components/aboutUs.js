import React from "react"
import { css } from "@emotion/core"
import Vector from "../images/vector-7.svg"

const AboutUs = () => {
  const values = [
    {
      title: "Calidad",
      text:
        "Tenemos un compromiso con la satisfacción del cliente y la calidad excepcional en los productos que fabricamos",
    },
    {
      title: "Responsabilidad",
      text:
        "Estamos comprometidos con el cuidado de nuestro entorno y fomentamos prácticas que aporten al equilibrio de nuestro planeta",
    },
    {
      title: "Servicio",
      text:
        "Mantenemos un contacto personal y cercano con nuestros clientes brindándoles toda la información necesaria",
    },
    {
      title: "Innovación",
      text:
        "Nos mantenemos a la vanguardia en productos, servicios y procesos para brindar una mejor experiencia a nuestros clientes",
    },
  ]
  return (
    <>
      <div
        css={css`
          background-color: #fff;
        `}
      >
        <div
          className="container"
          css={css`
            text-align: center;
            padding-bottom: 4.5rem;
            p {
              color: #009d4f;
              font-size: 1rem;
              line-height: 1.5;
              margin: 0;
              font-family: "Seravek Medium";
            }
            h3 {
              color: #ffa400;
              font-size: 1.3rem;
            }
          `}
        >
          <div className="row">
            <div
              css={css`
                width: 70%;
                flex: 0 0 70%;
                margin: auto;
                margin-bottom: 3.5rem;
              `}
            >
              <p>
                Somos una empresa especializada en la fabricación de bolsas para
                basura biodegradables con el objetivo de aislar de forma
                efectiva desechos tóxicos procurando la salud de las personas y
                el cuidado del medio ambiente.
                <br />
                <br />
                Forman parte de nuestros valores:
              </p>
            </div>
          </div>
          <div className="row">
            {values.map((value, index) => (
              <div
                key={`value-${index}`}
                css={css`
                  width: 100%;
                  flex: 0 0 100%;
                  padding-left: 30px;
                  padding-right: 30px;
                  @media (min-width: 768px) {
                    width: 25%;
                    flex: 0 0 25%;
                  }
                `}
              >
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={Vector}
          alt="vector"
          css={css`
            width: 100%;
            height: auto;
            display: block;
          `}
        />
      </div>
    </>
  )
}

export default AboutUs
