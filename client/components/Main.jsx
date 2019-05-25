import React from 'react'
import { Link } from 'react-router-dom'

function Main () {
  return (
    <React.Fragment>
      <div className="main-container">
        <Link to="/killkistkreydy">
          <div className="entry-frames">
            <h1>killkist kreydy</h1>
          </div>
        </Link>
        <Link to="/raggedrobin">
          <div className="entry-frames">
            <h1>ragged robin</h1>
          </div>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Main
