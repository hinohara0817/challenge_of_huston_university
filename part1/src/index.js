import React, { useState } from 'react';
import ReactDOM from 'react-dom'


const Header = (props) => {
  return <h1>{props.course}</h1>
}
const Button = ({plusGood, plusNeutral, plusBad}) => (
  <div>
    <button onClick={plusGood}>good</button>
    <button onClick={plusNeutral}>neutral</button>
    <button onClick={plusBad}>bad</button>
  </div>
)

const Result = (props) => {
  if (props.all === 0) {
  return(
    <div>
      <p>No feedback given</p>
    </div>
  )
  }
  else{
    return(
    <table>
      <tbody>
      <tr>
        <td>good</td>
        <td>{props.good}</td>
      </tr>
      <tr>
        <td>neutral</td>
        <td>{props.neutral}</td>
      </tr>
      <tr>
        <td>bad</td>
        <td>{props.bad}</td>
      </tr>
      <tr>
        <td>all</td>
        <td>{props.all}</td>
      </tr>
      <tr>
        <td>average</td>
        <td>{props.average / props.all}</td>
      </tr>
      </tbody>
    </table>
    )
  }

}
const App = (props) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const plusGood = () => {
    setGood(good+1)
    setAll(all+1)
    setAverage(average+1)
  }
  const plusNeutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    setAverage(average+0)
  }
  const plusBad = () => {
    setBad(bad+1)
    setAll(all+1)
    setAverage(average-1)
  }
  return (
    <div>
      <h2>give feedback</h2>
      <Button plusGood={plusGood} plusNeutral={plusNeutral} plusBad={plusBad}/>
      <h2>statisctic</h2>
      <Result good={good} bad={bad} neutral={neutral} all={all} average={average} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))