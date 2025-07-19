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
            {/* <figcaption>Some comment in here</figcaption> */}
          </figure>
          <h3 id="dynamic-styles">My name is Kevin A. Griego.</h3>
          <p>
            I am a Full Stack Web Developer who graduated from UofA Coding
            Bootcamp in September 2018. I've always had a curiosity for coding.
            In high school, I took one semester of learning Python. Although I
            took interest, I never continued learning as I was a terrible
            student.
          </p>
          <p>
            I joined the UofA bootcamp not knowing what I was getting myself
            into but I found a passion for development. There's nothing more
            satisfying then being able to solve a variety of problems while
            implementing a feature or REST api.
          </p>
          <p>
            Over the course of the last few years, I've slowly learned and
            gained exprience in back end development.
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