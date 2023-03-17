type ColorsProp = {
    colors: string[]
}

function ColorList({ colors }: ColorsProp) {
    return (
        <div className='flex gap-2 mt-6 flex-wrap border-t border-slate-300 pt-6 justify-center'>
            {colors.map((color: string, i: number) => (
                <div className='relative w-10 h-10 rounded-full cursor-pointer' style={{backgroundColor: color}} key={i}></div>
            ))}
        </div>
    )
}

export default ColorList