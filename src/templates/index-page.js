import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { Container } from "@chakra-ui/react"

import Layout from "../components/Layout"
import Hero from "../components/sections/Hero"
import Contact from "../components/sections/Contact"

const IndexPage = props => {
  const { frontmatter } = props.data.markdownRemark

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Hero {...props} />
      <Container mb={8}></Container>
      <Contact />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const query = graphql`
  query IndexPageTemplateQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`
