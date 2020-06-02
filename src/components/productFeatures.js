import React from "react"
import { css } from "@emotion/core"
import MaterialReciclado from "../images/material-reciclado.svg"
import SinPigmentos from "../images/sin-pigmentos.svg"
import MaterialResistente from "../images/material-resistente.svg"
import AceitesCoco from "../images/aceites-coco.svg"
import Biodegradable from "../images/biodegradable.svg"
import AislamientoEfectivo from "../images/aislamiento-efectivo.svg"

const ProductFeatures = () => {
  const features = [
    {
      text: "Material 100% reciclado",
      icon: MaterialReciclado,
    },
    {
      text: "Sin pigmentos añadidos",
      icon: SinPigmentos,
    },
    {
      text: "Material de gran resistencia",
      icon: MaterialResistente,
    },
    {
      text: "Con aceites de la palma del coco",
      icon: AceitesCoco,
    },
    {
      text: "Biodegradables en 18 meses",
      icon: Biodegradable,
    },
    {
      text: "Aislamiento efectivo",
      icon: AislamientoEfectivo,
    },
  ]
  return (
    <>
      <div
        id="caracteristicas"
        className="bg-green"
        css={css`
          padding-top: 7rem;
        `}
      >
        <div className="container">
          <div className="row">
            {features.map((feature, index) => (
              <div
                key={`feature-${index}`}
                css={css`
                  max-width: 100%;
                  flex: 0 0 100%;
                  padding-left: 15px;
                  padding-right: 15px;
                  display: flex;
                  align-items: center;
                  color: #fff;
                  margin-bottom: 2rem;
                  @media (min-width: 768px) {
                    max-width: 33.3333333%;
                    flex: 0 0 33.3333333%;
                  }
                `}
              >
                <div
                  css={css`
                    margin-right: 1.5rem;
                    width: 38px;
                    text-align: center;
                    img {
                      max-width: 100%;
                    }
                  `}
                >
                  <img src={feature.icon} alt={feature.text} />
                </div>
                <div>{feature.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductFeatures
