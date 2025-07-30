import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {
    const {data, hasError, isLoading} = useFetch('https://pokeapi.co/api/v2/pokemon/1')

    return (
        <>
            <h3>Información de Pokemon</h3>
            <hr />

            {isLoading && <div className="alert alert-info">Cargando...</div>}

            <pre>Info:
                {
                    JSON.stringify(data, null, 2)
                }
            </pre>
        </>
    )
}
