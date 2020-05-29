import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Global, css } from "@emotion/core"
import "normalize.css/normalize.css"
import "./layout.scss"

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        body {
          font-family: "Seravek";
        }
        .container {
          padding: 0 15px;
          margin: auto;
          @media (min-width: 992px) {
            width: 920px;
          }
          @media (min-width: 1200px) {
            width: 1140px;
          }
        }
        .row {
          margin-left: -15px;
          margin-right: -15px;
          display: flex;
          flex-wrap: wrap;
        }
        .bg-green {
          background-color: #009d4f;
        }
      `}
    />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import "./layout.css"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
