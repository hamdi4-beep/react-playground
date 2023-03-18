import Aside from "./Aside"
import BlogItem from "./BlogItem"

function BlogList({
    titles
}: {
    titles: string[]
}) {

    return (
        <div className="blog-list">
            {titles.map((title, i) => (
                <BlogItem title={title} key={i}>
                    <Aside index={i + 1} />
                </BlogItem>
            ))}
        </div>
    )
}

export default BlogList