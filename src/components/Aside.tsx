type Props = {
    index: number
}

function Aside({
    index
}: Props) {
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