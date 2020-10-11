import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import img from '../../images/3Mountains.jpg';
import Image from "gatsby-image";

const ImagesExample = () => {

  const {fixed, fluid, example  } =  useStaticQuery(graphql`
    {
      fixed: file(relativePath: {eq: "1stars.jpg"}) {
        name
        id
        childImageSharp {
          fixed (width: 200, grayscale: true) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fluid: file(relativePath: {eq: "2Mountains.jpg"}) {
        name
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      example: file(relativePath: {eq: "3Mountains.jpg"}){
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
  }
    }
  `)


  console.log(fixed, fluid, example , "SHOW")
  return (
      <section className="images">
        <article className="single-image">
          <h3>basic image</h3>
          <p>React way. Not reccomended.</p>
          <img src={img} alt="test" width="200" />
        </article>
        <article className="single-image">
          <h3>fixed image/blur</h3>
          <p>Using Gatsby GatsbyImageSharpFixed images</p>
          <Image fixed={fixed.childImageSharp.fixed} />
        </article>
        <article className="single-image" >
          <h3>fluid image/svg</h3>
          <p>Using Gatsby GatsbyImageSharpFluid images</p>
          <Image fluid={fluid.childImageSharp.fluid} />
          <div style={{width: '150px'}}>
            <Image fluid={fluid.childImageSharp.fluid} />
          </div>
          <p>Width of fluid image is controlled by the parent element.</p>
           <h3>fluid image max width example</h3>
          <p>Controls what kind of image sizew are auto generated for different screen sizes</p>
          <Image fluid={example.childImageSharp.fluid} />
        </article>
      </section>

  )
}

export default ImagesExample
