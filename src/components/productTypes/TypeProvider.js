
    import React, { useState, createContext } from "react"

    export const TypeContext = createContext()
    
    export const TypeProvider = (props) =>  {
        const [ types, setTypes] = useState([])
    
        const getTypes = () => {
            return fetch("http://localhost:8088/productTypes?")
            .then(res => res.json())
            .then(setTypes)
        }
    
        const addType = typeObj => {
            return fetch ("http://localhost:8088/productTypes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(typeObj)
            })
            .then(getTypes)
        }
    
        return (
            <TypeContext.Provider value={{
                types, getTypes, addType
            }}>
                {props.children}
            </TypeContext.Provider>
        )
    }