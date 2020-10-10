import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Images from "../components/Images"

const Examples = ({data}) => {
  console.log(data, "from example page")
  const { title, description, author } = data.site.info;
  return (
    <Layout>
      <h1>Examples Page</h1>
      <Header />
      <HeaderStatic />
      <h2>PageQuery Example</h2>
      <p>
        This is the OLD way of setting up queries using the StaticQuery
        component.
      </p>
      <div>title: {title}</div>
      <div>desription: {description}</div>
      <div>author: {author}</div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <Images />
    </Layout>
  )
}

export const data = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default Examples
