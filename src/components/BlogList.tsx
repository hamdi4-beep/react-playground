import Aside from "./Aside"
import BlogItem from "./BlogItem"

function BlogList() {
    const titles = [
        'Minimalistic',
        'UI/UX'
    ]

    return (
        <div className="blog-list">
            {titles.map((title, i) => (
                <BlogItem title={title} key={i}>
                    <Aside index={i} />
                </BlogItem>
            ))}
        </div>
    )
}

export default BlogList