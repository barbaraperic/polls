import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Poll = () => {
  const { id } = useParams()
  const polls = useSelector(state => state.polls)
  const users = useSelector(state => state.users)

  const poll = polls[id]

  const authorAvatar = users[poll.author].avatarURL

  return (
    <div className="poll-container">
      <h1 className="question">{poll.question}</h1>
      <div className="poll-author">
        By <img src={authorAvatar} alt="Author's avatar"/>
      </div>
      <ul>
        
      </ul>
    </div>
  )
}

export default Poll