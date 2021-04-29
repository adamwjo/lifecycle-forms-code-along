import React, { Component } from 'react'
import pokeData from '../data/pokemon'

//Components
import Navbar  from './Navbar'
import PokeContainer from './PokeContainer'
import Home from './Home'

export default class App extends Component {

  state = {
    display: "Home",
    searchText: "",
    pokemons: pokeData
  }

  changeToPokemon = () => {
    this.setState({display: "Pokemon"})
  }

  changeToHome = () => {
    this.setState({display: "Home"})
  }

  handleSearchText = (data) => {
    this.setState({
      searchText: data
    })
  }

  deletePokemon = (pokemonObj) => {
    const newPokemon= this.state.pokemons.filter(pokemon=> pokemon.id !== pokemonObj.id)
    console.log("hey");
    this.setState({
      pokemons: newPokemon
    })

  }


  render(){
   const filteredPokemon = this.state.pokemons.filter(poke => poke.name.includes(this.state.searchText))
    return (
      <div className="bg-dark">
        <Navbar handleSearchText={this.handleSearchText} display={this.state.display} changeToHome={this.changeToHome} />
        { this.state.display === "Home" ? <Home changeToPokemon={this.changeToPokemon}/> : null }
        { this.state.display === "Pokemon" ? <PokeContainer deletePokemon={this.deletePokemon} pokemons={filteredPokemon}  /> : null}
      </div>
    )
  }
}



