import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ShowData = data => {
  return (
    <>
      <h2>HeaderStatic.js Example</h2>
      <p>
        This is the OLD way of setting up queries using the StaticQuery
        component.
      </p>
      <div>title: {data.site.info.title}</div>
      <div>desription: {data.site.info.description}</div>
      <div>author: {data.site.info.author}</div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
  )
}

const HeaderStatic = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            info: siteMetadata {
              title
              description
              author
            }
          }
        }
      `}
      render={data => ShowData(data)}
    ></StaticQuery>
  )
}

export default HeaderStatic
