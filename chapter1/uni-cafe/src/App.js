import { useState } from 'react'

const Button = ({state}) => {
  return (
    <button onClick={() => state.callback(state)}>
      {state.name}
    </button>
  )
}

const GiveFeedback = ({statistics}) => {
  return (<div>
    <h1>
      give feedback
    </h1>
    {statistics.map((state) => (
      <>
        <Button state={state} />
        <br/>
      </>
    ))}
  </div>)
}

const Stat = ({statName, statVal}) => {
return (<>
  {statName}: {statVal}
</>)
}

const Statistics = ({statistics}) => {
  return (<div>
    <h1>
      statistics
    </h1>
    <p>
      {statistics.map((state) => (
        <>
          <Stat statName={state.name} statVal={state.val} />
          <br/>
        </>
      ))}
    </p>
  </div>)
}


const App = () => {
  const createStatistic = (name, [val, callback]) => {
    return { 
      name: name,
      val: val,
      callback: (stat) => callback(stat.val + 1)
    }
  }

  const statistics = [
    createStatistic('good', useState(0)),
    createStatistic('neutral', useState(0)),
    createStatistic('bad', useState(0))
  ]

  return (
    <div>
      <GiveFeedback statistics={statistics}/>
      <Statistics statistics={statistics}/>
    </div>
  )
}

export default App