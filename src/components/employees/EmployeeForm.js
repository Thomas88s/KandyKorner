
    import React, { useContext, useEffect, useState } from "react"
    import { EmployeeContext } from "./EmployeeProvider"
    import { LocationContext } from "../locations/LocationProvider"
    import { useHistory } from 'react-router-dom';
    import "./Employee.css"
    
    export const EmployeeForm = () => {
      const { addEmployee } = useContext(EmployeeContext)
      const { locations, getLocations } = useContext(LocationContext)
     
      const [employee, setEmployee] = useState({
        name: "",
        locationId: 0,
        manager: false,
        fullTime: false,
        hourlyRate: 0
      });
    
      const history = useHistory();
    
     
      useEffect(() => {
         getLocations()
      }, [])
    
      
      const handleControlledInputChange = (event) => {
        const newEmployee = { ...employee }
        newEmployee[event.target.id] = event.target.value
        setEmployee(newEmployee)
      }
    
      const handleClickSaveEmployee = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
        
        const locationId = parseInt(employee.locationId)

        if (employee.name === "" || locationId === 0 || employee.hourlyRate === 0 ) {
          window.alert("Please fill in all fields")
        } else {
    
          const newEmployee = {
            name: employee.name,
            locationId: locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate.toFixed(2)
            
          }
          addEmployee(newEmployee)
            .then(() => history.push("/employees"))
        }
      }
    
      return (
        <form className="employeeForm">
          <h2 className="employeeForm__title">New Employee</h2>
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Employee name:</label>
              <input type="text" id="name" required autoFocus className="form-control" placeholder="Employee name" value={employee.name} onChange={handleControlledInputChange} />
            </div>
          </fieldset>
         <fieldset>
            <div className="form-group">
              <label htmlFor="location">Location: </label>
              <select name="locationId" id="locationId" className="form-control" value={employee.locationId} 
              onChange={handleControlledInputChange}>
                <option value="0">Select a location</option>
                {locations.map(location => (
                  <option key={location.id} value={location.id}>
                    {location.address}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="manager">Manager status: </label>
              <select name="manager" id="manager" className="form-control" value={employee.manager} onChange={handleControlledInputChange}>
                <option value="0">False</option>
                <option value="1">True</option> 
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="fullTime">Assign to location: </label>
              <select name="fullTime" id="fullTime" className="form-control" value={employee.fullTime} onChange={handleControlledInputChange}>
                <option value="0">False</option>
                <option value="1">True</option> 
              </select>
            </div>
          </fieldset>   
          <fieldset>
            <div className="form-group">
              <label htmlFor="hourlyRate">Hourly Rate:</label>
              <input type="text" id="hourlyRate" required autoFocus className="form-control" placeholder="HourlyRate" value={employee.hourlyRate} onChange={handleControlledInputChange} />
            </div>
          </fieldset>               
          <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
            Save Employee
              </button>
        </form>
      )
    }