import React from 'react'
import { Link } from 'react-router-dom'

function Main () {
  return (
    <React.Fragment>
      <h2>Render the Main</h2>
      <Link to="/killkistkreydy">
        <div className="entry-frames">
        </div>
      </Link>
      <Link to="/raggedrobin">
        <div className="entry-frames">
        </div>
      </Link>
    </React.Fragment>
  )
}

export default Main
