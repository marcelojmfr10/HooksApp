

import { useCounter, useFetch } from "../hooks"
import { LoadingMessage, PokemonCard } from "../03-examples";


export const Layout = () => {

  const {counter, decrement, increment} = useCounter(1);

  const { data, hasError, isloading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Información de pokemons</h1>
      <hr />

      {isloading 
      ? <LoadingMessage /> 
      : (<PokemonCard 
        id={counter} 
        name={data.name} 
        sprites={[
          data.sprites.front_default,
          data.sprites.front_shiny,
          data.sprites.back_default,
          data.sprites.back_shiny,

        ]} />)}

      {/* <h2>{data?.name}</h2> */}

      <button className="btn btn-primary mt-2" onClick={() => counter >1 ? decrement() : null}>Anterior</button>
      <button className="btn btn-primary mt-2" onClick={() => increment()}>Siguiente</button>

    </>

  )
}



