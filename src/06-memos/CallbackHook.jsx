import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    // const increment = () => {
    //     setCounter((c) => c + 1);
    // };

    const increment = useCallback(() => {setCounter((value) => value + 1);}, []);

    return (
        <>
            <h1>Callback Hook: { counter }</h1>
            <ShowIncrement increment={increment} />
        </>
    )
}
