import React, { useState } from "react"
import { css } from "@emotion/core"
import Logo from "../images/logo-bravo.svg"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = () => {
  const [active, setActive] = useState(false)
  const menuOptions = ["Presentaciones", "Características", "Contacto"]

  return (
    <>
      <header
        css={css`
          background-color: #009d4f;
          padding: 1.5rem 0;
        `}
      >
        <div
          className="container"
          css={css`
            display: flex;
            align-items: center;
            nav {
              margin-left: auto;
            }
          `}
        >
          <div
            css={css`
              width: 50%;
              max-width: 200px;
              h1 {
                display: none;
              }
              img {
                width: 100%;
                height: auto;
              }
            `}
          >
            <h1>Bolsas Bravo</h1>
            <img src={Logo} alt="Bolsas Bravo" />
          </div>
          <button
            className={`hamburger hamburger--collapse${
              active ? " is-active" : ""
            }`}
            type="button"
            css={css`
              margin-left: auto;
              background-color: transparent;
              border: none;
              z-index: 1500;
              @media (min-width: 768px) {
                display: none;
              }
            `}
            onClick={() => setActive(!active)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <nav
            css={css`
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              min-height: 100vh;
              background-color: #009d4f;
              z-index: 100;
              transform: translateX(-100%);
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.3s ease-in-out;
              &.menu-open {
                transform: translateX(0);
              }
              @media (min-width: 768px) {
                position: relative;
                width: auto;
                min-height: auto;
                background-color: transparent;
                transform: translateX(0);
                display: block;
              }
            `}
            className={active ? "menu-open" : ""}
          >
            <ul
              css={css`
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                align-items: center;
                flex-direction: column;
                @media (min-width: 768px) {
                  flex-direction: row;
                }
              `}
            >
              {menuOptions.map((option, index) => (
                <li
                  key={`menu-item-${index}`}
                  css={css`
                    margin-bottom: 1rem;
                    @media (min-width: 768px) {
                      margin-left: 2rem;
                      margin-bottom: 0;
                    }
                  `}
                >
                  <button
                    css={css`
                      font-family: "poetsen_oneregular";
                      color: #fff;
                      text-decoration: none;
                      font-size: 1.5rem;
                      background-color: transparent;
                      border: none;
                      cursor: pointer;
                      @media (min-width: 768px) {
                        font-size: 1rem;
                      }
                    `}
                    onClick={() => {
                      scrollTo(
                        `#${option
                          .toLowerCase()
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")}`
                      )
                      setActive(false)
                    }}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import React from "react"

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
