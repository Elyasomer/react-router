import React from 'react'
import CarModels from '../car-models/CarModels'
import ComputerModels from '../computer-models/ComputerModels'
import { Route, NavLink, Switch} from 'react-router-dom'


const Category = () => {
  return (
    <div className="category">
      <h1>Category page</h1>
      <div className="navbar">
      <NavLink to='/react-router/category/computer-models' >Computer Models</NavLink>
      <NavLink to='/react-router/category/car-models' >Car Models</NavLink>
      </div>

      <Switch>
      <Route path='/react-router/category/computer-models'  component={ComputerModels} />
      <Route path='/react-router/category/car-models' component={CarModels} />
      </Switch>

    </div>
  )
}
export default Category
