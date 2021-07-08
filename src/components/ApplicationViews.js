
     import React from "react"
     import { Route } from "react-router-dom"
     import { Home } from "./Home"
     import { LocationList } from "./locations/LocationList"
     import { LocationProvider } from "./locations/LocationProvider"
     import { ProductList } from "./products/ProductList"
     import { ProductProvider } from "./products/ProductProvider"
     import { TypeProvider } from "./productTypes/TypeProvider"

     
     
     export const ApplicationViews = () => {
         return (
             <>
                
                 <Route exact path="/">
                     <Home />    
                 </Route>
                 
                 <ProductProvider>
                     <TypeProvider>
                        <Route path="/products">
                            <ProductList />
                        </Route>
                     </TypeProvider>  
                 </ProductProvider>
 
                 <LocationProvider>
                    <Route exact path="/locations">
                      <LocationList />
                    </Route>
                 </LocationProvider>

                 <Route path="/productTypes">
                 </Route>

                 <Route path="/customers">
                 </Route>
             </>
         )
     }