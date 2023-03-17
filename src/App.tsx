import * as React from 'react'

function Header({ index, children }: {
    index: number,
    children: string
}) {
    return (
        <div className="header">
            <span>{index}</span>
            <h1>{children}</h1>
        </div>
    )
}

function BlogPost({
    title,
    index
 }: {
    title: string,
    index: number
}) {
    return (
        <div className="blog-wrapper">
            <Header index={index}>{title}</Header>

            <div className="content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum dolorem unde repellendus, numquam praesentium dolore totam illo architecto debitis magni.</p>
            </div>
        </div>
    )
}

function App() {
    const blogs = [
        <BlogPost title='Minimalistic' index={1} />,
        <BlogPost title='UI/UX' index={2} />,
        <BlogPost title='Design' index={3} />
    ]

    return (
        <div className="App">
            {blogs.map((blog, i) => (
                <React.Fragment key={i}>
                    {blog}
                </React.Fragment>
            ))}
        </div>
    )
}

export default App