import React, {useState} from 'react';
import ReactDOM from 'react-dom'


const Header = (props) => {
  return <h1>{props.course}</h1>
}
const Button = () => (
  <div>
    <button>good</button>
    <button>neutral</button>
    <button>bad</button>
  </div>
)

const Result = (props) =>(
  <div>
    <p>good{props.good}</p>
    <p>neutral{props.neutral}</p>
    <p>bad{props.bad}</p>
  </div>
)
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
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

  return (
    <div>
      <h2>give feedback</h2>
      <Button good={good} bad={bad} neutral={neutral}/>
      <h2>statisctic</h2>
      <Result />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))