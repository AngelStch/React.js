import { useState } from "react"

export default function Counter(props) {
    const [count, setCount] = useState(0)
    const incrementCounterHandler = () => {
        setCount(count + 1)
    }
    // if(count<0){
    //     return(
    //         <p>Invalid Count</p>
    //     )
    // }

    // let warning =null
    // if(count<0){
    //     warning =  <p>Invalid Count</p>
    // }

    
    return (
        <div>
            <h1>Counter</h1>
            {count<0 
            ? <p>Invalid Count</p>
            : <p>Valid Count</p>}

                {count == 0 && <p>please start incrementing</p>}

            <p>count: {count}</p>
            <button onClick={incrementCounterHandler}>+</button>
            <button onClick={()=> setCount(count-1)}>-</button>

        </div>
    )
}