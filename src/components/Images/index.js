import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Images = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(sort: {fields: size, order: ASC}) {
        totalCount
        nodes {
          size
          birthTime
          absolutePath
        }
      }
    }
  `)
  return (
    <>
      <h2>Images Component Query</h2>
      <p>This is an example of getting images from local folder.</p>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
  )
}

export default Images
