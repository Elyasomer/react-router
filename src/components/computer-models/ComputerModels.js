import React from 'react'
import { Route, NavLink, Switch} from 'react-router-dom'
import ModelPage from '../model-page/ModelPage'


const ComputerModels = () => {
  const comp = [
    {compBrand:'HP', id:1},
    {compBrand:'Asus', id:2},
    {compBrand:'Acer', id:3},
  ]

  return (
    <div className="category">
      <h1>Computer Models page</h1>
        <div className="navbar">
        {comp.map((comp) => (
            <NavLink to={'/category/computer-models/' + comp.id + '/' + comp.compBrand}>{comp.compBrand}</NavLink>
      ))}
      </div>
      <Route path='/category/computer-models/:id/:name' component={ModelPage} />

    </div>
  )
}
export default ComputerModels
