import React from "react"
import Layout from "../components/layout"
import Headline from "../components/headline"
import ProductLine from "../components/productLine"
import ProductFeatures from "../components/productFeatures"
import Banner from "../components/banner"
import BannerWithImage from "../components/bannerWithImage"
import Contact from "../components/contact"
import SEO from "../components/seo"

const HomePage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Headline />
    <ProductLine />
    <ProductFeatures />
    <Banner />
    <BannerWithImage />
    <Contact />
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
