import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Leaderboard from './Leaderboard'
import Dashboard from './Dashboard'
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
    <div className="container">
      {loading === true
        ? null
        : <Dashboard />
      }
    </div>
  );
}

export default App;
