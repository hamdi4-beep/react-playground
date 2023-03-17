function Aside({
    children
}: {
    children: JSX.Element
}) {
    return (
        <div className="aside">
            {children}
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
        </div>
    )
}

export default Aside