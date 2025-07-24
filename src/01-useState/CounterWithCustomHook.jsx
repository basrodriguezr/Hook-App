import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    //const { counter1, counter2, counter3, increment, decrement } = useCounter(0);
    const { counter, increment, decrement, reset } = useCounter(0);


    return (
    <>
        <h1>Counter with Custom Hook</h1>
        <hr />
        <h2>Counter1: { counter }</h2>

        <button onClick={increment} className="btn btn-primary">+1</button>
        <button onClick={reset} className="btn btn-info">Reset</button>
        <button onClick={decrement} className="btn btn-primary">-1</button>
        
    </>
  )
}
