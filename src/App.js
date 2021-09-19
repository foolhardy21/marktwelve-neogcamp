import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Area from './pages/Area'
import Hypotenuse from './pages/Hypotenuse'
import IsTriangle from './pages/IsTriangle'
import Quiz from './pages/Quiz'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/is-triangle'>
            <IsTriangle />
          </Route>
          <Route path='/quiz'>
            <Quiz />
          </Route>
          <Route path='/hypotenuse'>
            <Hypotenuse />
          </Route>
          <Route path='/area'>
            <Area />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
