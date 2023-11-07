
import { useState, useEffect } from 'react';
import StarWars from './assets/StarWars.jsx';
import styles from "./App.module.css"
function App() {
  const [nums, setNums] = useState([1, 2, 3, 4, 5])
  const [count, setCount] = useState(0)
  useEffect(() => {
    // console.log("Mount conpopnent")
  }, [])

  useEffect(() => {
    // console.log(`Update conponent - ${nums.length}`)
  }, [count])

  const onclick = () => {
    setNums(oldState => oldState.slice(0, oldState.length - 1))
  }


  return (
    <div>
      <StarWars />
      <h3>Count: {count}</h3>
      <ul>
        {nums.map((number, index) =>
          <li className={styles.listItem}
            data-key={index}
            key={index}
          >
            {number * 2}
          </li>)}
      </ul>
      <button onClick={onclick}>Remove</button>
      <button onClick={() => setCount(c => c + 1)}>Add</button>
    </div>
  );
}

export default App
