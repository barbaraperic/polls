import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/" style={{ marginRight: '8px'}}>Dashboard</Link>
      <Link to="/leaderboard" style={{ marginRight: '8px'}}>Leaderboard</Link>
      <Link to="/polls">Polls</Link>
    </div>
  )
}

export default Nav