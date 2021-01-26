import React from 'react'
import { handleAddPoll } from '../actions/polls'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const AddPoll = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const [ question, setQuestion ] = React.useState('')
  const [ options, setOptions ] = React.useState({
    a: '', b: '', c: '', d: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push('/')
    dispatch(handleAddPoll({
      question,
      ...options
    }))
  }

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setOptions({
      ...options,
      [name]: value
    })
  }

  const isDisabled = () => {
    return question === ''
    || options.a === ''
    || options.b === ''
    || options.c === ''
    || options.d === ''
  }

 return (
   <form onSubmit={handleSubmit}>
     <h3>What is your question</h3>
     <input 
      value={question}
      name="question"
      onChange={(e) => setQuestion(e.target.value)}
      type="text"
      className="input"
     />
     <h3>What are the options</h3>
     <label className="label" htmlFor="input">A.</label>
     <input 
      value={options.a}
      onChange={handleInputChange}
      name="a"
      className="input"
      type="text"
     />
     <label className="label" htmlFor="input">B.</label>
     <input 
      value={options.b}
      onChange={handleInputChange}
      name="b"
      className="input"
      type="text"
     />
     <label className="label" htmlFor="input">C.</label>
     <input 
      value={options.c}
      onChange={handleInputChange}
      name="c"
      className="input"
      type="text"
     />
     <label className="label" htmlFor="input">D.</label>
     <input 
      value={options.d}
      onChange={handleInputChange}
      name="d"
      className="input"
      type="text"
     />
     <button disabled={isDisabled()} className="btn">
       Submit
     </button>
   </form>
  
  )
}

export default AddPoll