import React from "react"
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        <address className="location__address">Address: {location.address}</address> 
         <div className="location__squareFootage">Square Footage: {location.squareFootage}</div>
        <div className="location__handicapAccessible">{location.handicapAccessible}</div>
    </section>
)