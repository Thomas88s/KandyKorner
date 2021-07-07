
     import React from "react"
     import { Route } from "react-router-dom"
     import { Home } from "./Home"
     import { LocationCard } from "./location/LocationCard"
     import { LocationList } from "./location/LocationList"
     import { LocationProvider } from "./location/LocationProvider"
    //  import { LocationCard } from "./location/LocationCard"
    //  import { LocationCard } from "./location/LocationCard"
    //  import { LocationCard } from "./location/LocationCard"
     
     
     export const ApplicationViews = () => {
         return (
             <>
                
                 <Route exact path="/">
                     <Home />    
                 </Route>

                 <Route path="/products">
                 </Route>
                 
                 <Route path="/locations">
                     <LocationCard />
                 </Route>
 
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