import React from 'react'
import { Route, NavLink, Switch} from 'react-router-dom'
import ModelPage from '../model-page/ModelPage'

const CarModels = () => {
  const cars = [
    {carname:'BMW', id:1},
    {carname:'Audi', id:2},
    {carname:'Mrecedes Benz', id:3},
  ]
  return (
    <div className="category">
      <h1>Car Models page</h1>

      <div className="navbar">
      {cars.map((car) => (
          <NavLink to={'/react-router/category/car-models/' + car.id + '/' + car.carname}>{car.carname}</NavLink>
    ))}
  </div>

    <Route path='/react-router/category/car-models/:id/:name' component={ModelPage} />
    </div>
  )
}
export default CarModels
