import { useState } from 'react'
import React from 'react'

const Button = ({state, printedStatistics}) => {
  return (
    <button onClick={() => {
      const new_val = state.new_val(state)
      state.callback(new_val)
      Array.prototype.forEach.call(printedStatistics, element => {
        element.callback(element.new_val(element))
      })
    }}>
      {state.name}
    </button>
  )
}

const GiveFeedback = ({votableStatistics, printedStatistics}) => {
  return (<div>
    <h1>
      give feedback
    </h1>
    {votableStatistics.map((state) => (
      <React.Fragment key={state.name}>
        <Button state={state} printedStatistics={printedStatistics} />
      </React.Fragment>
    ))}
  </div>)
}

const Stat = ({statName, statVal}) => {
return (<tr>
  <td>{statName}: </td>
  <td> {statVal}</td>
</tr>)
}

const StatisticsContent = ({votableStatistics, printedStatistics, metastatistics}) => {
  if (metastatistics.total.val == 0) {
    return (<p>No feedback given</p>)
  }
  return (<p>
      {Array.prototype.concat(votableStatistics, printedStatistics).map((state) => (
        <React.Fragment key={state.name}>
          <Stat statName={state.name} statVal={state.val_ref} />
        </React.Fragment>
      ))}
  </p>)
}

const Statistics = ({votableStatistics, printedStatistics, metastatistics}) => {
  return (<div>
    <h1>
      statistics
    </h1>
    <StatisticsContent votableStatistics={votableStatistics} printedStatistics={printedStatistics} metastatistics={metastatistics}/>
  </div>)
}


const App = () => {

  const createStatistic = (name, [val_ref, callback], new_val) => {
    return { 
      name: name,
      val_ref: val_ref,
      val: val_ref,
      new_val: new_val,
      callback: callback
    }
  }

  const increase = (stat) => {
    stat.val += 1
    return stat.val
  }

  const good = createStatistic('good', useState(0), increase)
  const neutral = createStatistic('neutral', useState(0), increase)
  const bad = createStatistic('bad', useState(0), increase)  
  const all = createStatistic('all', useState(0), (stat) => good.val + neutral.val + bad.val)
  const avg = createStatistic('avg', useState(0), (stat) => (good.val - bad.val) / (good.val + neutral.val + bad.val))
  const positive = createStatistic('positive', useState(0), (stat) => (good.val) / (good.val + neutral.val + bad.val))

  const votableStatistics = [
    good,
    neutral,
    bad,
  ]

  const printedStatistics = [
    all,
    avg,
    positive
  ]

  const metastatistics = {
    total: all
  }

  return (
    <div>
      <GiveFeedback votableStatistics={votableStatistics} printedStatistics={printedStatistics}/>
      <Statistics votableStatistics={votableStatistics} printedStatistics={printedStatistics} metastatistics={metastatistics}/>
    </div>
  )
}

export default App