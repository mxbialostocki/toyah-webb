import React from 'react'
import { Link } from 'react-router-dom'

function Main () {
  return (
    <React.Fragment>
      <div className="tw-landing"><h1>tw.</h1></div>
      <div className="main-container">
        <Link to="/killkistkreydy">
          <div id="kk-ef" className="entry-frames grow">
            <h1>killkist kreydy</h1>
          </div>
        </Link>
        <Link to="/raggedrobin">
          <div id="rr-ef" className="entry-frames grow">
            <h1>ragged robin</h1>
          </div>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Main
