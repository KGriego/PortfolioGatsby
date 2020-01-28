import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
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
            {/* <figcaption>Some comment in here</figcaption> */}
          </figure>
          <h3 id="dynamic-styles">My name is Kevin A. Griego.</h3>
          <p>I am a Full Stack Web Developer who graduated from UofA Coding Bootcamp in September 2018. I've always had a curiosity for coding. In high school, I took one semester of learning Python. Although I took interest, I never continued learning as I was a terrible student.
          </p>
          <p>
            I joined the UofA bootcamp not knowing what I was getting myself into but I needed something to focus on. And overtime, I found a passion for development. I enjoy being able to give the guest of a website an amazing experience. There's nothing more irritating to me than trying to navigate a website for one thing and having to jump through a bunch of hoops to get it.
          </p>
          <p>
            Backend is an exciting area of development. There's so many ways to implement one thing. 
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

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
