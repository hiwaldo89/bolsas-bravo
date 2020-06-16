import React from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import BackgroundImage from "gatsby-background-image"
import Vector from "../images/vector-1.svg"
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
          position: relative;
          width: 100%;
          margin-top: -1px;
          &:after {
            @media (min-width: 768px) {
              content: "";
              display: block;
              padding-top: 80%;
            }
            @media (min-width: 992px) {
              padding-top: 60%;
            }
          }
          .bgImg {
            width: 100%;
            height: 100%;
            background-size: cover;
            position: absolute !important;
            top: 0;
            left: 0%;
            z-index: -1;
          }
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
        <div
          css={css`
            z-index: 2;
            @media (min-width: 768px) {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              margin: auto;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}
        >
          <div
            className="container"
            css={css`
              text-align: center;
            `}
          >
            <div className="row">
              <div
                css={css`
                  width: 100%;
                  flex: 0 0 100%;
                  padding-left: 30px;
                  padding-right: 30px;
                  margin: auto;
                  padding-bottom: 8rem;
                  padding-top: 3rem;
                  @media (min-width: 768px) {
                    width: 75%;
                    flex: 0 0 75%;
                    padding-bottom: 2.5rem;
                  }
                  @media (min-width: 992px) {
                    width: 60%;
                    flex: 0 0 60%;
                  }
                `}
                data-sal="slide-up"
              >
                <p
                  css={css`
                    color: #fff;
                    margin-top: 4rem;
                    margin-bottom: 2rem;
                    font-size: 1.2rem;
                    font-family: "poetsen_oneregular";
                    @media (min-width: 768px) {
                      font-size: 1.8rem;
                      margin-top: 0;
                    }
                  `}
                >
                  Fabricamos nuestras bolsas para basura a partir de material
                  100% reciclado con gran resistencia para diferentes residuos
                </p>
                <button
                  onClick={() => {
                    scrollTo("#presentaciones")
                  }}
                  css={css`
                    cursor: pointer;
                    background-color: #ffa400;
                    padding: 1rem 3rem;
                    border-radius: 100px;
                    border: 0;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    font-family: "Seravek Medium";
                    font-size: 0.8rem;
                    transform: scale(1);
                    transition: all 0.3s ease-in-out;
                    &:hover {
                      transform: scale(0.95);
                    }
                    @media (min-width: 768px) {
                      font-size: 1rem;
                    }
                  `}
                >
                  Ver presentaciones
                </button>
              </div>
            </div>
          </div>
        </div>
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
        <BackgroundImage
          Tag={`section`}
          fluid={file.childImageSharp.fluid}
          className="bgImg"
        ></BackgroundImage>
      </div>
    </>
  )
}

export default Headline
