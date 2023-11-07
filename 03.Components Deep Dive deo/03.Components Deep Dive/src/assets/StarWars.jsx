import { useState, useEffect } from "react"

export default function StarWars(props) {
    const [caracters, setCharacter] = useState([])
    // console.log(caracters)
    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then((responce) => responce.json())
            .then((data) => {
                setCharacter(data.results)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <h1>Star Wars caracters</h1>
            <ul>
                {caracters.map((character) => <li key={character.url}>{character.name}</li>)}
            </ul>
        </div>
    )
}