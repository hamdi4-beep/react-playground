import { MouseEventHandler } from 'react'

function BlogItem({
    title,
    children, // aside element
    handleClick
}: {
    title: string
    children: JSX.Element
    handleClick: MouseEventHandler
}) {
    return (
        <div className='blog-wrapper' onClick={handleClick}>
            {children}

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