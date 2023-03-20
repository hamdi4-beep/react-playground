import * as React from 'react'

type InitialState = {
    index: number
    setIndex: React.Dispatch<React.SetStateAction<number>>
}

export const StateContext = React.createContext<InitialState>({
    index: 0,
    setIndex() {}
})