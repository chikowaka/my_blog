import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default ({ data }) => {
  const title = data.site.siteMetadata.title
  const about = data.markdownRemark.html

  return (
    <>
    <Layout title={title}>
      <div dangerouslySetInnerHTML={{ __html: about }} />
    </Layout>
    <Link to="/firstPost"></Link>
    </>
  )
}

export const aboutQuery = graphql`
  query AboutQuery {
    markdownRemark(frontmatter: { layout: { eq: "about" } }) {
      html
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
