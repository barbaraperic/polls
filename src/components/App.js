import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from './Nav'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import AddPoll from './AddPoll'
import { handleInitialData } from '../actions/shared'

const App = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.authedUser === null)

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  const state = useSelector(state => state)

  return (
    <Router>
      <div className="container">
        <Nav />
        {loading === true
          ? null
          : <div>
              <Route path="/" exact>
                <Dashboard />
              </Route>
              <Route path="/leaderboard">
                <Leaderboard />
              </Route>
              <Route path="/polls">
                <AddPoll />
              </Route>

            </div>
        }
      </div>
    </Router>
  );
}

export default App;
