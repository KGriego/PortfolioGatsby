/**
 * SEO component that queries for data with Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <html lang={lang} />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta name={"og:title"} content={title} />
      <meta name={"description"} content={metaDescription} />
      <meta name={"og:description"} content={metaDescription} />
      <meta name={"og:type"} content={"website"} />
      <meta name={"twitter:card"} content={"summary"} />
      <meta name={"twitter:creator"} content={site.siteMetadata.author} />
      <meta name={"twitter:title"} content={title} />
      <meta name={"twitter:description"} content={metaDescription} />
      <meta name={"keywords"} content={keywords.join(`, `)} />
    </>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default Seo
