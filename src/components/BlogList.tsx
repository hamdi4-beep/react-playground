import * as React from 'react'
import BlogItem from "./BlogItem"
import { StateContext } from "../context/StateContext"
import Aside from './Aside'

export default function BlogList() {
    const {setIndex} = React.useContext(StateContext)

    const titles = [
        'Minimalistic',
        'UI/UX',
        'Motion',
        'Blur'
    ]

    return (
        <div className="blog-list">
            {titles.map((title: string, i: number) => (
                <BlogItem title={title} handleClick={e => setIndex(i)} key={i}>
                    <Aside index={i + 1} />
                </BlogItem>
            ))}
        </div>
    )
}