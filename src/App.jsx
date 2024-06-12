import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [pokemones, setPokemones] = useState([])

  //nos va a permitir hacer la peticion http
  useEffect(() =>{
    const getPokemones = async () => {

      //recuperamos el listado de los pokemones

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    const listaPokemones = await response.json()
    const { results } = listaPokemones

        const newPokemones = results.map( async (pokemon) => {
          //  const poke = {}

           const response = await fetch(pokemon.url)
           const poke = await response.json()

          return {
            id: poke.id,
            name: poke.name,
            img: poke.sprites.other.dream_world.front_default
          }

        })
        setPokemones(await Promise.all(newPokemones))
    }

    getPokemones ()
  }, [])

  return (
    <>
      <div className='App'>
        <h1>Pokedex</h1>

        {
          pokemones.map(pokemon => {
            return (
              <div>
                <img src={pokemon.img} alt={pokemon.name} />
                <p>{pokemon.name}</p>
                <span>{pokemon.id}</span>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default App
