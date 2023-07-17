import { useState } from 'react'

const Button = ({label, callback}) => {
  return (
    <button onClick={callback}>
      {label}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [dailyAnectodeIndex, setDailyAnectodeIndex] = useState(0)

  const [votes, setVotes] = useState({
    votes: Array(anecdotes.length).fill(0),
    highestVoted: 0
  })

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[dailyAnectodeIndex]}<br/>
        Has {votes.votes[dailyAnectodeIndex]} votes.
      </p>
      <Button label='Vote' callback={() => {
        const votesCpy = {...votes.votes}
        votesCpy[dailyAnectodeIndex] += 1
        let newHighestVoted = votes.highestVoted
        if (votesCpy[dailyAnectodeIndex] > votesCpy[votes.highestVoted]) {
          newHighestVoted = dailyAnectodeIndex
        }
        const voteCpy = {
          votes: votesCpy,
          highestVoted: newHighestVoted
        }
        setVotes(voteCpy)
      }} />
      <Button label='Next' callback={() => {
        const selection = Math.floor(Math.random() * anecdotes.length)
        setDailyAnectodeIndex(selection)
      }} />
      <h1>Anecdote with most votes</h1>
      <p>
        {anecdotes[votes.highestVoted]}<br/>
        Has {votes.votes[votes.highestVoted]} votes.
      </p>
    </div>
  )
}

export default App