import { MouseEventHandler } from 'react'
import { useDispatch } from 'react-redux'

function BlogItem({
    title,
    handleMouseEnter,
    children
}: {
    title: string,
    handleMouseEnter: MouseEventHandler
    children: JSX.Element
}) {
    const aside = children

    return (
        <div className='blog-wrapper' onMouseEnter={handleMouseEnter}>
            {aside}

            <div className="inner">
                <div className="header">
                    <h1>{title}</h1>
                </div>

                <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam error ipsam aut quam sit culpa cupiditate voluptates eius placeat quidem.</p>
                </div>
            </div>
        </div>
    )
}

export default BlogItem