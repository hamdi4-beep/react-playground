import * as React from 'react'
import BlogItem from "./BlogItem"
import Aside from './Aside'
import { StateContext } from "../context/StateContext"

const BlogList = React.forwardRef<HTMLDivElement>((props, ref) => {
    const {setIndex} = React.useContext(StateContext)

    const titles = [
        'Minimalistic',
        'UI/UX',
        'Motion',
        'Blur'
    ]

    return (
        <div className="blog-list" ref={ref}>
            {titles.map((title: string, i: number) => (
                <BlogItem title={title} handleClick={(e) => setIndex(i)} key={i}>
                    <Aside index={i + 1} />
                </BlogItem>
            ))}
        </div>
    )
})

export default BlogList