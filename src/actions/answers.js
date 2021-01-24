import { savePollAnswer } from '../utils'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const ADD_ANSWER = 'ADD_ANSWER'

export const addAnswer = ({ authedUser, id, answer }) => {
  return {
    type: ADD_ANSWER,
    authedUser,
    id,
    answer
  }
}

export const handleAddAnswer = (answerData) => {
  return (dispatch) => {
    dispatch(showLoading())

    savePollAnswer(answerData)
    .then(() => addAnswer(answerData))
    .then(() => hideLoading())
  }
}