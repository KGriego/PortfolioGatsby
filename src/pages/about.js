import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutContent = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout title={siteTitle}>
      <Seo title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            About Me
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Life is too short to not be curious and daring</figcaption>
          </figure>
          <h3 id="dynamic-styles">My name is Kevin A. Griego.</h3>
          <p>
            I am a Software Engineer who graduated from UofA. This has been a passion of mine since I dipped my toes into this.
            I've lived in a variety of different places growing up that has opened my eyes to a lot. When I'm not developing,
            I'm gardening, taking my dog to sight see, reading, or spending time with my family.
          </p>
          <p>
            I am a multi-talented developer, who can be a designer, tester, teacher and student when needed.
            I enjoy trying new things and curious to learn about anything and everything.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AboutPage = props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutContent location={props.location} data={data} {...props} />
    )}
  />
)

export default AboutPage;