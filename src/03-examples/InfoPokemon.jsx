import React from 'react'

export const InfoPokemon = ({data}) => {
    return (
        <>
            <section className="row">
                {/* Primera columna: Movimientos  */}
                <div className="col-12 col-md-6 mb-4">
                    <h4>Movimientos</h4>
                    <ul className="list-group">
                    {data?.moves?.slice(0, 10).map((move, i) => (
                        <li key={i} className="list-group-item">
                        {move.move.name}
                        </li>
                    ))}
                    </ul>
                </div>

                {/* Segunda columna: Habilidades */}
                <div className="col-12 col-md-6 mb-4">
                    <h4>Habilidades</h4>
                    <ul className="list-group">
                        {data?.abilities?.map((ability, i) => (
                            <li key={i} className="list-group-item">
                                {ability.ability.name}
                            </li>
                        ))}
                    </ul>
                </div>     

                {/* Si quieres dejar el JSON abajo */}
                <div className="col-12">
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            </section>
            <pre>
                {
                    JSON.stringify(data, null, 2)
                }
            </pre>        
        </>
    )
}
