import BlogItem from "./BlogItem"

function BlogList() {
    const titles = [
        'Minimalistic',
        'UI/UX',
        'Graphic Design',
        'Motion Design'
    ]

    return (
        <div className="blog-list">
            {titles.map((title, i) => (
                <BlogItem
                    title={title}
                    index={i}
                    key={i}
                />
            ))}
        </div>
    )
}

export default BlogList