import React from "react";
import Pokecard from "./Pokecard";

Pokedex = (props) => {
    return (
        <div>
            <h1>Pokedex</h1>
            <div>
                {props.pokemon.map(p => (
                    <PokeCard
                        id={p.id}
                        name={p.name}
                        image={p.image}
                        type={p.type}
                        exp={p.base_experience}
                    />
                ))}
            </div>
        </div>
    )
}


export default Pokedex;