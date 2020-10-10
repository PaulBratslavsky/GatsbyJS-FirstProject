import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
   query GetHeader {
      site {
        info: siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const { site: { info: { title, description, author } }} = data

  return (
    <>
      <h2>Header.js Example</h2>
      <p>This is the new way of setting up queries using the useStaticQuery hook.</p>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <div>title: {title}</div>
      <div>desription: {description}</div>
      <div>author: {author}</div>
    </>
  )
}

export default Header
