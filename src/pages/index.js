import React from "react"
import Layout from "../components/layout"
import Background from "../../src/images/background.jpg"
import Logo from "../../src/images/logo.svg"
import { css } from "@emotion/core"
import SEO from "../components/seo"

const HomePage = () => (
  <Layout>
    <SEO title="Próximamente" />
    <div
      css={css`
        width: 100%;
        min-height: 100vh;
        background-image: url(${Background});
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        &:after {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}
    >
      <div
        css={css`
          width: 60%;
          max-width: 380px;
          position: relative;
          z-index: 2;
          img {
            width: 100%;
            height: auto;
          }
        `}
      >
        <img src={Logo} alt="Bolsas Bravo" />
      </div>
    </div>
  </Layout>
)

export default HomePage
// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Próximamente" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

// export default IndexPage
