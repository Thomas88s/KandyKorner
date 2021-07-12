import React from "react"
import "./Type.css"

export const TypeCard = ({ type }) => (
    <section className="productType">
        <address className="productType__id">id: {type.id}</address> 
         <div className="productType__type">Type: {type.type}</div>
       
    </section>
)