
     import React from "react"
     import { Route } from "react-router-dom"
     import { Home } from "./Home"
     import { LocationList } from "./locations/LocationList"
     import { LocationProvider } from "./locations/LocationProvider"
     import { ProductList } from "./products/ProductList"
     import { ProductProvider } from "./products/ProductProvider"
     import { CandyForm } from "./products/ProductCard"
     import { TypeProvider } from "./productTypes/TypeProvider"
     import { TypeList } from "./productTypes/TypeList"
     import { EmployeeProvider } from "./employees/EmployeeProvider"
     import { EmployeeList } from "./employees/EmployeeList"
     import { EmployeeForm } from "./employees/EmployeeForm"
     import { OrderProvider } from "./orders/OrderProvider"
     
     
     export const ApplicationViews = () => {
         return (
             <>
                
                 <Route exact path="/">
                     <Home />    
                 </Route>
                 
                <OrderProvider>
                 <ProductProvider>
                     <TypeProvider>
                      <Route exact path="/orders/create">
                        <CandyForm />    
                      </Route>
                        <Route path="/products">
                            <ProductList />
                        </Route>
                     </TypeProvider>  
                 </ProductProvider>
 
                    </OrderProvider> 
                 <LocationProvider>
                    <Route exact path="/locations">
                      <LocationList />
                    </Route>
                 </LocationProvider>
                
                 <EmployeeProvider>
                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>

                    <LocationProvider>
                        <Route exact path="/employees/create">
                            <EmployeeForm />
                        </Route>
                    </LocationProvider>
                </EmployeeProvider>

                 <TypeProvider>
                       <Route exact path="/productTypes">
                           <TypeList />
                       </Route>
                 </TypeProvider>


                 <Route path="/customers">
                 </Route>
             </>
         )
     }