import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image"; 
import styles from "../../cssmodules/product.module.css";

const ProductCard = ({id, title, slug, price, image: { fluid: image } }) => {
    console.log(image, "image");
    return <article className={styles.product}>
        <Image fluid={image} alt={title} />
        <h3>{title}<span> {' '}Price: ${price}</span></h3>
        <Link to={`/products/${slug}`} >
            More Info
        </Link>
    </article>
}
export default ProductCard;
