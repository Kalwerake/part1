import { useState } from 'react'

const Button = ({onClick, text}) => {
  return(
    <>
    <button onClick={onClick}> {text}</button>
    </>
  )
}

const StatisticsLine = ({text, stat}) => {
  return(
    <>
    <tr>
      <th align = "left" scope= "row">{text}</th>
      <td>{stat}</td>
      </tr>
    </>
  )
}
const Statistics = ({good, neutral, bad, total}) => {
  if (total >0 ) {
    return(
    <>
    <h1> statistics</h1>
    <table> 
      <tbody> 
      <StatisticsLine text = "good" stat = {good}></StatisticsLine>
      <StatisticsLine text = "neutral" stat = {neutral}></StatisticsLine>
      <StatisticsLine text = "bad" stat = {bad}></StatisticsLine>
      <StatisticsLine text = "all" stat = {total}></StatisticsLine>
      <StatisticsLine text = "average" stat = {((good * 1) + (bad * -1))/ total}></StatisticsLine>
      <StatisticsLine text = "positive" stat = {(good / total) * 100} ></StatisticsLine>
      </tbody>
      </table>
    </>
  )
  } return (
    <>
    <h1> statistics</h1>
    <div> No feedback given</div> 
    </>
  )
  
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)


  const handleGood = () => {
    const updatedGood = good + 1

    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }
  const handleNeutral = () => {
    const updatedNuetral= neutral + 1

    setNeutral(updatedNuetral)
    setTotal(good + updatedNuetral + bad)
  }
  const handleBad = () => {
    const updatedBad = bad + 1

    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text= "good"></Button>
      <Button onClick={handleNeutral} text= "neutral"></Button>
      <Button onClick={handleBad} text= "bad"></Button>

      <Statistics good ={good} neutral={neutral} bad={bad} total={total}></Statistics>
    </div>
  )
}

export default App