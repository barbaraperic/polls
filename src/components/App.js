import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
    const state = useSelector(state => state)

    console.log('state',state)

  return (
    <div>
      <p>Polls</p>
    </div>
  );
}

export default App;
