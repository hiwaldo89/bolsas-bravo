import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ProductLine = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "productos" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const products = [
    {
      title: "Bolsa Mediana",
      bullets: ["30 bolsas", "50 x 70 cm", "Capacidad 30 litros"],
      image: allFile.edges.filter(edge => edge.node.name === "mediana")[0].node
        .childImageSharp.fluid,
    },
    {
      title: "Bolsa Grande",
      bullets: ["15 bolsas", "60 x 90 cm", "Capacidad 53 litros"],
      image: allFile.edges.filter(edge => edge.node.name === "grande")[0].node
        .childImageSharp.fluid,
    },
    {
      title: "Bolsa Jumbo",
      bullets: ["10 bolsas", "90 x 120 cm", "Capidad 160 litros"],
      image: allFile.edges.filter(edge => edge.node.name === "jumbo")[0].node
        .childImageSharp.fluid,
    },
  ]

  const ProductCard = styled.div`
    max-width: 100%;
    flex: 0 0 100%;
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;
    margin-bottom: 1.5rem;
    @media (min-width: 768px) {
      max-width: 33.3333333%;
      flex: 0 0 33.3333333%;
      margin-bottom: 0;
    }
    .product-card__img {
      border-radius: 25px;
      overflow: hidden;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      position: relative;
      &:after {
        content: "";
        display: block;
        padding-top: 110%;
        background-color: #fff;
      }
    }
    .product-card__content {
      color: #fff;
      display: inline-block;
      h3 {
        text-align: center;
        margin-bottom: 2rem;
        margin-top: 1.8rem;
      }
      ul {
        text-align: left;
        margin: 0;
        padding: 0;
        list-style: none;
        li {
          margin-bottom: 0.5rem;
        }
      }
    }
  `
  return (
    <>
      <div
        id="presentaciones"
        css={css`
          background-color: #000;
          margin-top: -1px;
        `}
      >
        <div
          className="container"
          css={css`
            text-align: center;
            margin-bottom: 3rem;
            h2 {
              color: #ffa400;
              margin-bottom: 3rem;
              margin-top: 0;
            }
            p {
              color: #fff;
              font-size: 1.2rem;
              line-height: 1.8;
              font-family: "Seravek Medium";
            }
          `}
          data-sal="slide-up"
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
            <h2>Línea de productos</h2>
            <p>
              Nuestras bolsas biodegradables para basura cubren diferentes
              necesidades por sus prácticas presentaciones.
            </p>
          </div>
        </div>
        <div
          css={css`
            position: relative;
            &:before {
              content: "";
              display: block;
              position: absolute;
              width: 100%;
              height: 90%;
              left: 0;
              bottom: 0;
              background-color: #009d4f;
              @media (min-width: 768px) {
                height: 60%;
              }
            }
          `}
        >
          <div
            className="container"
            css={css`
              position: relative;
            `}
          >
            <div
              css={css`
                margin-left: -15px;
                margin-right: -15px;
                display: flex;
                flex-wrap: wrap;
              `}
            >
              {products.map((product, productIndex) => (
                <ProductCard
                  key={`product-${productIndex}`}
                  data-sal="slide-up"
                  data-sal-duration="150"
                >
                  <div className="product-card__img">
                    <Img
                      fluid={product.image}
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="product-card__content">
                    <h3>{product.title}</h3>
                    <ul>
                      {product.bullets.map((bullet, bulletIndex) => (
                        <li key={`product-${productIndex}-${bulletIndex}`}>
                          - {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ProductCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductLine