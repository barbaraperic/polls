import { savePoll } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'

const addPoll = (poll) => {
  return {
    type: ADD_POLL,
    poll
  }
}

export const receivePolls = (poll) => {
  return {
    type: RECEIVE_POLLS,
    poll
  }
}

export const handleAddPoll = (poll) => {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return savePoll({
      ...poll,
      authedUser
    })
    .then(poll => dispatch(addPoll(poll)))
    .then(() => dispatch(hideLoading()))


  }
}