import { useCounter } from "../hooks/useCounter";

export const ButtonPreviousNext = ({counter,  data,  increment,  decrement }) => {
    return (
        <center>
            <button className='btn btn-primary btn-sm' onClick={() => counter > 1 && decrement() } disabled={counter <= 1}>Anterior</button>
            <label> Pokemon: #{data?.id} -  {data?.name}</label>
            <button className='btn btn-primary btn-sm ml-2' onClick={ increment }>Siguiente</button> 
        </center>
    )
}
