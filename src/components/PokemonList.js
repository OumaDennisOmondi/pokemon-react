import React from 'react'

export default function PokemonList({pokemon}) {
    return (
        <div>
            <h1>PokenList</h1>
            <ul>
                { pokemon.map(p => (
                    <li key = {p}>{p}</li>
                ))}
            </ul>
        </div>
    )
}
