import React from "react"
import './BackLink.css'

const BackLink = () => {
    return(
      <div className="back-link">
        <a href="http://localhost:3000/" className="f6 link dim black db pointer" data-testid="backlink"
        >Back</a>
      </div>
    )
}

export default BackLink