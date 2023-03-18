function Aside({
    index
}: {
    index: number
}) {
    return (
        <div className="aside">
            <span>#{index}</span>
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
        </div>
    )
}

export default Aside