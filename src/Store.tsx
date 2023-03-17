import * as React from 'react'

type CounterState = {
    counter: number
}

type Action = {
    type: string
}

const value: [
    CounterState?,
    React.Dispatch<Action>?
] = []

export const StoreContext = React.createContext(value)