import React from "react"
import "./Product.css"




export const ProductCard = ({ product }) => (
    <section className="product">
        <div className="product__id">id: {product.id}</div> 
        <div className="product__type">Type: {product.productType.type}</div> 
        
        <div className="product__name">Name: {product.name}</div> 
         <div className="product__price">Price: {product.price}</div>  
    </section>
)