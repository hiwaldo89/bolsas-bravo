import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Vector from "../images/vector-4.svg"

const BannerWithImage = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(name: { eq: "amigable-medio-ambiente" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          .col {
            max-width: 100%;
            flex: 0 0 100%;
            @media (min-width: 992px) {
              max-width: 50%;
              flex: 0 0 50%;
            }
          }
        `}
      >
        <div
          className="col"
          css={css`
            background-color: #ffa400;
            color: #fff;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          `}
        >
          <img
            src={Vector}
            alt="vector"
            css={css`
              position: absolute;
              width: 100%;
              height: auto;
              top: 0;
              left: 0;
              transform: translateY(calc(-100% + 1px));
            `}
          />
          <div
            css={css`
              width: 60%;
              margin: auto;
            `}
          >
            <h2>Amigable con el medio ambiente</h2>
            <p
              css={css`
                font-family: "Seravek Medium";
                font-size: 1.3rem;
              `}
            >
              Te protegemos a ti, y protegemos al medio ambiente de desechos y
              contaminantes
            </p>
          </div>
        </div>
        <div className="col">
          <Img fluid={file.childImageSharp.fluid} />
        </div>
      </div>
    </>
  )
}

export default BannerWithImage
