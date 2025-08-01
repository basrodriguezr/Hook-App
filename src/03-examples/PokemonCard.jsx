import React from 'react'
import { InfoPokemon } from './InfoPokemon'

export const PokemonCard = ({data}) => {
    return (
        <>
            <section style={{height: 100}} className="text-center p-0 m-0 d-flex justify-content-center align-items-center">
                <div className='d-flex justify-content-center align-items-center'>
                    <img height={100} src={data?.sprites?.other?.dream_world?.front_default} alt={data?.name} />                
                </div>            
            </section>
            <section>
                <InfoPokemon data={data} /> 
            </section>  
        </>

    )
}
