import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import { OrderContext } from "../orders/OrderProvider"
import { useHistory } from 'react-router-dom';
import "./Product.css"

export const CandyForm = () => {

    const { addOrder } = useContext(OrderContext)
    const { products } = useContext(ProductContext)
    const history = useHistory();

   
    const handleClickSaveOrder = (event) => {
    event.preventDefault()
    

    const customerId = parseInt(localStorage.getItem("gg_user"))
    const productId  = products.id

    const newOrder = {
        productId: productId,
        customerId: customerId
    }
    addOrder(newOrder)
    .then(() => history.push("/orders"))
}
    <button className="btn btn-primary" onClick={handleClickSaveOrder}>
      Purchase
         </button>

    // return  ({ product }) => (
    // <section className="product">
    //     <div className="product__id">id: {product.id}</div> 
    //     <div className="product__type">Type: {product.productType.type}</div> 
    //     <div className="product__name">Name: {product.name}</div> 
    //      <div className="product__price">Price: {product.price}</div>  
    //      <button className="btn btn-primary" onClick={handleClickSaveOrder}>
    //         Purchase
    //           </button>
    // </section>)

    
}
export const ProductCard = ({ product }) => {
   return <section className="product">
        <div className="product__id">id: {product.id}</div> 
        <div className="product__type">Type: {product.productType.type}</div> 
        <div className="product__name">Name: {product.name}</div> 
         <div className="product__price">Price: {product.price}</div>  
         <button className="btn btn-primary" >
            Purchase
              </button>
    </section>
}
