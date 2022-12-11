import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function Counter() {

    function handleChange(event) {
        setInput(event.target.value)
    }



    const count = useSelector(state => state.count.count);
    const dispatch = useDispatch();
    const [input, setInput] = useState(0);


    function increment() {

        return dispatch({ type: 'INCREMENT' })

    }

    function decrement() {

        return dispatch({ type: 'DECREMENT' })

    }

    function incrementBy() {
        return dispatch({ type: 'INCREMENT_BY', payload: input })
    }



    return (
        <>
            <h1>{count}</h1>
            <h1> current Input {input}</h1>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement} >decrement</button>

            <input type="number" onChange={handleChange} />

            <button onClick={incrementBy}>Increment by</button>
        </>
    )
}

export default Counter;