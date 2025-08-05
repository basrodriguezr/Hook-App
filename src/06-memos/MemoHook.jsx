import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos...');
    }
    return `${iterationNumber} iteraciones realizadas`;
}


export const MemoHook = () => {
    const { counter, increment } = useCounter(1);
    const [show, setShow] = useState(true);

    const memorizedCounter = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter: <small>{ counter }</small></h1>
            <hr />
            <h4>{ memorizedCounter }</h4> 
            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>
            <button
                className="btn btn-primary"
                onClick={() => setShow(!show)}
            >
                True/False {JSON.stringify(show)}
            </button>
        </>
    )
}
