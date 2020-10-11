import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { graphql, Link } from "gatsby"

const ProductTemplate = ({ data }) => {
    const { title, description: {description}, price, image: {fixed}} = data.product;
    console.log(title, description, price, fixed)
    return <Layout>
        <div>
            <h1>Product: {title}</h1>
            <Link to="/products/">back to products</Link>
        </div>
        <section className="single-product">
            <artticle>
                <Image fixed={fixed} alt={title} />
            </artticle>
            <artticle>
                <h1>{title}</h1>
                <h3>{price}</h3>
                <p>{description}</p>
                <button>Add To Cart</button>
            </artticle>
        </section>
    </Layout>
}

export const query = graphql`
query GetSingleProduct($slug:String) {
    product: contentfulTheStore(slug: {eq: $slug}) {
      title
      price
      description {
        description
      }
      image {
        fixed (width: 300) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default ProductTemplate;