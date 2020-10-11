import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProducCard from "../components/ProductCard";
import styles from "../cssmodules/product.module.css";
export const data = graphql`
  {
    allContentfulTheStore {
      nodes {
        id
        slug
        price
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Product = ({data}) => {
  const { nodes: products } = data.allContentfulTheStore;
  console.log(products, "here is your data");



const showProducts = (products) => products.map(product => <ProducCard key={product.id} {...product}/>);

  return (
    <Layout>
      <section className={styles.layout}>
        <header className={styles.header}>
          <h1>Products Page</h1>
          <p>Check out these awesome products</p>
        </header>
        <div className={styles.products}>
          {showProducts(products)}
        </div>
      </section>
    </Layout>
  )
}

export default Product;
