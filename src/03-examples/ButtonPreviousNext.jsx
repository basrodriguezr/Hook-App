import { useLayoutEffect, useRef } from "react";
import { useCounter } from "../hooks/useCounter";

export const ButtonPreviousNext = ({counter,  data,  increment,  decrement }) => {
    const labelRef = useRef();

    useLayoutEffect(() => {
        const { height, width } = labelRef.current.getBoundingClientRect();

        console.log(height, width);
    }, [data.name]);
    return (
        <center>
            <button className='btn btn-primary btn-sm' onClick={() => counter > 1 && decrement() } disabled={counter <= 1}>Anterior</button>
            <label ref={labelRef} > Pokemon: #{data?.id} -  {data?.name}</label>
            <button className='btn btn-primary btn-sm ml-2' onClick={ increment }>Siguiente</button> 
        </center>
    )
}
