import './App.css';
import About from './components/about/About'
import Category from './components/category/Category'
import { Route, NavLink, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <div className="navbar">
      <NavLink to='/category' >Category</NavLink>
      <NavLink to='/about' >About</NavLink>
    </div>

    <Switch>
    <Route path='/category' component={Category} />
    <Route path='/about' component={About} />
    </Switch>
    </div>
  );
}

export default App;
