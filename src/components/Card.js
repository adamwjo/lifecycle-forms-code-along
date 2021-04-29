

export const Card = (props) => {
    return (
        <div onClick={() => props.deletePokemon(props.pokemon)} className="card m-2 p-2">
            <img src={props.pokemon.sprite} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{props.pokemon.name}</h4>
                <p className="card-text">{props.pokemon.description}</p>
            </div>
        </div>
    )
}


