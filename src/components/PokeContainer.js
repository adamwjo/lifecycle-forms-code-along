import React from 'react'


//Components
import { Card } from './Card'

export default class PokeContainer extends React.Component {

 

    render(){ 

        return(
            <>
            <div className="row ml-3">
              { this.props.pokemons.map(pokemon => <Card deletePokemon={this.props.deletePokemon} key={pokemon.id} pokemon={pokemon}/>) }
            </div>
            </>
        )
    }

}