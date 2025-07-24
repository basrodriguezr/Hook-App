// export const useCounter = (initialValue = 10) => {
//     const [counter, setCounter] = useState({
//         counter1: initialValue,
//         counter2: initialValue + 10,
//         counter3: initialValue + 20,
//     });

//     const increment = () => {
//         setCounter({
//             counter1: counter.counter1 + 1,
//             counter2: counter.counter2 + 1,
//             counter3: counter.counter3 + 1,
//         });
//     };

//     const decrement = () => {
//         setCounter({
//             counter1: counter.counter1 - 1,
//             counter2: counter.counter2 - 1,
//             counter3: counter.counter3 - 1,
//         });
//     };

//     return { ...counter, increment, decrement };
// }

import { useState } from "react"

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);     
    const reset = () => setCounter(initialValue);

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
