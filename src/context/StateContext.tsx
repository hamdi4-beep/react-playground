import * as React from 'react'
const setIndex: React.Dispatch<React.SetStateAction<number>> = () => {}
export const StateContext = React.createContext({
    index: 0,
    setIndex
})