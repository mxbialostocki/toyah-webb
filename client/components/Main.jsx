import React from 'react'
import { Link } from 'react-router-dom'

import KillkistKreydy from './KillkistKreydy'
import RaggedRobin from './RaggedRobin'

function Main () {
  return (
    <React.Fragment>
      <h2>Render the Main</h2>
      <Link to="/killkistkreydy">
        <div className="entry-frames">
        </div>
      </Link>
      <KillkistKreydy />
      <RaggedRobin />

    </React.Fragment>
  )
}

export default Main
