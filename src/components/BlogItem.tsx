import * as React from 'react'

function BlogItem({
    title,
    children
}: {
    title: string,
    children: JSX.Element
}) {
    const aside = children
    const inputRef = React.createRef<HTMLInputElement>()

    const handleSubmit = (e: React.SyntheticEvent) => {
        const { current } = inputRef
        const title = current?.value

        if (!title) return
        console.log(title)

        e.preventDefault()
    }

    return (
        <div className='blog-wrapper'>
            {aside}

            <div className="inner">
                <div className="header">
                    <h1>{title}</h1>
                </div>

                <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam error ipsam aut quam sit culpa cupiditate voluptates eius placeat quidem.</p>
                    
                    <form onSubmit={handleSubmit}>
                        <input type="text" ref={inputRef} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BlogItem