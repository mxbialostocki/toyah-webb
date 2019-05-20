import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import Main from './Main'
import KillkistKreydy from './KillkistKreydy'
import RaggedRobin from './RaggedRobbin'

function App () {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/killkistkreydy' component={KillkistKreydy} />
          <Route exact path='/raggedrobin' component={RaggedRobin} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
