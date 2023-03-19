import * as React from 'react'
import Aside from "./Aside"
import BlogItem from "./BlogItem"

function BlogList({
    children
}: {
    children: JSX.Element
}) {

    return (
        <div className="blog-list">
            {children}
        </div>
    )
}

export default BlogList