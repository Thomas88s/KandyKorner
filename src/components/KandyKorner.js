import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"


export const KandyKorner = () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Live Laugh Eat Kandy</small>
    
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 kandyWay</div>
        </address>

            <NavBar />
            <ApplicationViews />
    
    </>
)