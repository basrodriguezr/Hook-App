import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { LoadingMessage, ButtonPreviousNext, PokemonCard } from '../03-examples';

export const Layout = () => {
    const { counter, increment, decrement } = useCounter(1);
    const url = `https://pokeapi.co/api/v2/pokemon/${ counter }`;

    const {data, isLoading} = useFetch(url);

    return (
        <>
            <h3>Información de Pokemon</h3>
            <hr />

            {
                !isLoading && 
                <>
                    <ButtonPreviousNext 
                        key={data.id}
                        data={data}
                        counter={counter}
                        increment={increment}
                        decrement={decrement}
                    />
                    <hr />
                    <PokemonCard
                        key={data.name + data.id}
                        data={data}
                    />                  
                </>
            }    

            {isLoading && <LoadingMessage/>}
        </>
    )
}
