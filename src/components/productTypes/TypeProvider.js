
    import React, { useState, createContext } from "react"

    export const TypeContext = createContext()
    
    export const TypeProvider = (props) =>  {
        const [productTypes, setTypes] = useState([])
    
        const getTypes = () => {
            return fetch("http://localhost:8088/locations?")
            .then(res => res.json())
            .then(setTypes)
        }
    
        const addType = locationObj => {
            return fetch ("http://localhost:8088/locations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(locationObj)
            })
            .then(getTypes)
        }
    
        return (
            <TypeContext.Provider value={{
                productTypes, getTypes, addType
            }}>
                {props.children}
            </TypeContext.Provider>
        )
    }