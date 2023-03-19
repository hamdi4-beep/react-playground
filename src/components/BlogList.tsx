import * as React from 'react'
import Aside from "./Aside"
import BlogItem from "./BlogItem"

function BlogList() {
    const [titles, dispatch] = React.useReducer((titles: string[], action: {
        type: string,
        value: string
    }) => {
        const title = action.value

        switch (action.type) {
            case 'add':
                return [
                    ...titles,
                    title
                ]

            default:
                throw Error('Unknown type action')
        }
    }, [
        'Minimalistic',
        'UI/UX',
        'Motion Blur',
        'Graphic Design'
    ])

    return (
        <div className="blog-list">
            {titles.map((title: string, i: number) => (
                <BlogItem title={title} key={i}>
                    <Aside index={i + 1} />
                </BlogItem>
            ))}
        </div>
    )
}

export default BlogList