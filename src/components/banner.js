import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import Vector from "../images/vector-3.svg"

const Banner = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(name: { eq: "banner" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
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
          position: relative;
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
            z-index: 2;
          `}
        />
        <Img fluid={file.childImageSharp.fluid} />
        <div
          css={css`
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            h2 {
              color: #fff;
              text-align: center;
              font-size: 1rem;
              @media (min-width: 768px) {
                font-size: 1.5rem;
              }
            }
          `}
        >
          <div className="container">
            <h2
              css={css`
                width: 90%;
                margin: auto;
                @media (min-width: 768px) {
                  width: 50%;
                }
              `}
            >
              Por sus diferentes presentaciones y resistencia son ideales para
              uso doméstico, industrial y escolar.
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
