import React from 'react';
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const [ list, setList ] = React.useState('unanswered')
  const authedUser = useSelector(state => state.authedUser)
  const polls = useSelector(state => state.polls)
  const users = useSelector(state => state.users)

  const answers = users[authedUser].answers

  const answered = answers.map((id) => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp)

  const unanswered = Object.keys(polls)
    .filter(id => !answers.includes(id))
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp)

  const questions = { answered, unanswered }

  return (
    <>
      <div className="dashboard-toggle">
        <button
          style={{
            textDecoration: list === unanswered
            ? 'underlined'
            : null
          }}
          onClick={() => setList('unanswered')}
        >
          Unanswered
        </button>
        <span>|</span>
        <button
          style={{
            textDecoration: list === answered
            ? 'underlined'
            : null
          }}
          onClick={() => setList('answered')}
        >
          Answered
        </button>
      </div>
    
    </>
  )
}

export default Dashboard