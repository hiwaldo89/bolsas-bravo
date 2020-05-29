import React from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Vector from "../images/vector1.svg"
import Vector2 from "../images/vector-2.svg"

const Headline = () => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(name: { eq: "bolsa-basura" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <>
      <div
        css={css`
          background-color: #009d4f;
          padding-top: 4.5rem;
        `}
      >
        <div
          className="container"
          css={css`
            text-align: center;
            color: #fff;
            h2 {
              margin-top: 0;
              margin-bottom: 2.5rem;
            }
            p {
              font-family: "Seravek Medium";
              font-size: 1.2rem;
              margin-bottom: 0;
            }
          `}
        >
          <div
            css={css`
              margin: auto;
              @media (min-width: 768px) {
                width: 70%;
              }
              @media (min-width: 992px) {
                width: 50%;
              }
            `}
          >
            <h2>Bolsas biodegradables para basura</h2>
            <p>
              Fabricamos nuestras bolsas a partir de material 100% reciclado con
              gran resistencia para diferentes desperdicios.
            </p>
          </div>
        </div>
      </div>
      <div
        css={css`
          position: relative;
        `}
      >
        <img
          src={Vector}
          alt="vector"
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            z-index: 2;
          `}
        />
        <img
          src={Vector2}
          alt="vector"
          css={css`
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: auto;
            z-index: 2;
          `}
        />
        <Img fluid={file.childImageSharp.fluid} alt="Bolsas de basura" />
      </div>
    </>
  )
}

export default Headline
