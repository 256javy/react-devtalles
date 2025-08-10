import type { CSSProperties } from "react"

const firstName: string = 'Javier'
const lastName: string = 'Villalba'

const favoriteGames: string[] = ['Assassins Creed 2', 'Need For Speed Underground 2', 'Grand Theft Auto: San Andreas', 'Counter Strike 1.6']

const isActive = true

const address = {
    zipCode: 'ABC123',
    country: 'Paraguay'
}

const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 20,
    padding: 10,
    marginTop: 30
}

export function MyAwesomeApp() {

    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>
            <h1>{isActive}</h1>

            <p style={myStyles} >{JSON.stringify(address)}</p>
        </>
    )
}