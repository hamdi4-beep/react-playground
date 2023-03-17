import Aside from "./Aside"

function BlogItem({
    title,
    index
}: {
    title: string,
    index: number
}) {

    return (
        <div className='blog-wrapper'>
            <Aside>
                <span>#{index}</span>
            </Aside>

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