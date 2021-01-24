import React from 'react'
import { useSelector } from 'react-redux'

const Leaderboard = () => {

  const users = useSelector(state => state.users)
  const sorted = Object.keys(users)
  .map((id) => {
    const { name, avatarURL, polls, answers } = users[id]

    return {
      id,
      name,
      avatarURL,
      polls: polls.length,
      answers: answers.length
    }
  }).sort((a,b) => (b.polls + b.answers) - (a.polls + a.answers))

  return (
    <ul>
      {sorted.map(user => (
        <li className="user" key={user.name}>
          <img src={user.avatarURL} alt={`Avatar for ${user.name}`}/>
        <div>
          <h1>{user.name}</h1>
          <p>{user.polls} Polls</p>
          <p>{user.answers} Answers</p>
        </div>
        </li>
      ))}
    </ul>
  )
}

export default Leaderboard