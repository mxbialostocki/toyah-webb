import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from './Main'
import KillkistKreydy from './KillkistKreydy'
import RaggedRobin from './RaggedRobin'

function App () {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/killkistkreydy' component={KillkistKreydy} />
        <Route exact path='/raggedrobin' component={RaggedRobin} />
      </Switch>
    </React.Fragment>
  )
}

export default App
