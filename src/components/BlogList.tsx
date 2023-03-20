import BlogItem from "./BlogItem"
import Aside from "./Aside"
import { useDispatch } from "react-redux"
import { incrementByAmount } from "../indexSlice"


export default function BlogList() {
    const dispatch = useDispatch()

    const mouseEnterHandle = (e: React.SyntheticEvent, i: number) => dispatch(incrementByAmount(i))

    const titles = [
        'Minimalistic',
        'UI/UX',
        'Motion Design',
        'Graphic Design'
    ]

    return (
        <div className="blog-list">
            {titles.map((title: string, i: number) => (
                <BlogItem title={title} handleMouseEnter={(e) => mouseEnterHandle(e, i)} key={i}>
                    <Aside index={i + 1} />
                </BlogItem>
            ))}
        </div>
    )
}