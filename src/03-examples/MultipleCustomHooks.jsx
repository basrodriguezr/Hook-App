import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { LoadingMessage } from './LoadingMessage';
import { ButtonPreviousNext } from './ButtonPreviousNext';
import { PokemonCard } from './PokemonCard';
import { InfoPokemon } from './InfoPokemon';

export const MultipleCustomHooks = () => {
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
                        key={data.id}
                        data={data}
                    />                  
                </>
            }    

            {isLoading && <LoadingMessage/>}
        </>
    )
}
