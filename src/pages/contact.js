import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactContent = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout title={siteTitle}>
      <Seo
        title="Contact Me"
        keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
      />
      <form method="post" action="#" name={"contact"} data-netlify={true}>
        <div className="row gtr-uniform">
          <div className="col-6 col-12-xsmall">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="col-6 col-12-xsmall">
            <input type="email" name="email" placeholder="Email" />
          </div>
          {/* Break */}
          <div className="col-12">
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              rows={6}
              defaultValue={""}
            />
          </div>
          {/* Break */}
          <div className="col-12">
            <ul className="actions">
              <li style={{ margin: "auto" }}>
                <input
                  type="submit"
                  defaultValue="Send Message"
                  className="primary"
                />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const ContactPage = props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ContactContent location={props.location} props data={data} {...props} />
    )}
  />
)

export default ContactPage
