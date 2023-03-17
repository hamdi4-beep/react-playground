import * as React from 'react'
import { StoreContext } from '../Store'

export default function User() {
    const [state, dispatch] = React.useContext(StoreContext)

    const clickHandlerIncrease = (e: React.SyntheticEvent) => {
        dispatch!({
            type: 'INCREASE'
        })
    }

    const clickHandlerDecrease = (e: React.SyntheticEvent) => {
        dispatch!({
            type: 'DECREASE'
        })
    }

    return (
        <div>
            <p>Counter: {state!.counter}</p>
            <button onClick={clickHandlerIncrease}>Increase</button>
            <button onClick={clickHandlerDecrease}>Decrease</button>
        </div>
    )
}