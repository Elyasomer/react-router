import './App.css';
import About from './components/about/About'
import Category from './components/category/Category'
import { Route, NavLink, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <div className="navbar">
      <NavLink to='/react-router/category' >Category</NavLink>
      <NavLink to='/react-router/about' >About</NavLink>
    </div>

    <Switch>
    <Route path='/react-router/category' component={Category} />
    <Route path='/react-router/about' component={About} />
    </Switch>
    </div>
  );
}

export default App;
