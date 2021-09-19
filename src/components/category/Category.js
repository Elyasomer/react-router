import React from 'react'
import CarModels from '../car-models/CarModels'
import ComputerModels from '../computer-models/ComputerModels'
import { Route, NavLink, Switch} from 'react-router-dom'


const Category = () => {
  return (
    <div className="category">
      <h1>Category page</h1>
      <div className="navbar">
      <NavLink to='/category/computer-models' >Computer Models</NavLink>
      <NavLink to='/category/car-models' >Car Models</NavLink>
      </div>

      <Switch>
      <Route path='/category/computer-models'  component={ComputerModels} />
      <Route path='/category/car-models' component={CarModels} />
      </Switch>

    </div>
  )
}
export default Category
