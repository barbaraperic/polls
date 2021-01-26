import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

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

    console.log('state',state)

  return (
    <Router>
      <div className="container">
        {loading === true
          ? null
          : <AddPoll />
        }
      </div>
    </Router>
  );
}

export default App;
