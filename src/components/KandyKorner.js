import React from "react"
// import "./Kandy.css"
import { LocationList } from "./locations/LocationProvider"

export const KandyKorner = () => (
    <>
        <h2>Kandy Korner</h2>
        <address>
            <div>204 Kandy Kane Way</div>
        </address>

        <h2>Locations</h2>
        <article className="locations">
            <LocationList />
        </article>
    </>
)