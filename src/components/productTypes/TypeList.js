
    import React, { useContext, useEffect } from "react"
    import { TypeContext } from "./TypeProvider"
    import { TypeCard } from "./TypeCard"
    import "./Type.css"
    
    export const TypeList = () => {
      // This state changes when `getLocations()` is invoked below
      const { types, getTypes } = useContext(TypeContext)
      //useEffect - reach out to the world for something
      useEffect(() => {
       
        getTypes()
      }, [])
    
    
      return (
        <div className="productTypes">
          
          {
          
            types.map(type => {
              return <TypeCard  key={type.id}  type={type} />
            })
          }
        </div>
      )
    }