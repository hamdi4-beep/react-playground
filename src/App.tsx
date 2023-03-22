import * as React from 'react'
import { motion } from 'framer-motion'
import { StateContext } from "./context/StateContext"
import BlogList from "./components/BlogList"

function App() {
    const [index, setIndex] = React.useState(0)
    const [height, setHeight] = React.useState(0)
    const blogListRef = React.createRef<HTMLDivElement>()

    const imgs = [
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35271885-b64b-49da-b43d-e9aa8fa4d471/deib63r-0ab3a0f9-f527-45fc-aa28-0e2520df03fd.jpg/v1/fill/w_1920,h_1080,q_75,strp/persona_5_strikers___yellow_wallpaper_by_thetruemask_deib63r-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzM1MjcxODg1LWI2NGItNDlkYS1iNDNkLWU5YWE4ZmE0ZDQ3MVwvZGVpYjYzci0wYWIzYTBmOS1mNTI3LTQ1ZmMtYWEyOC0wZTI1MjBkZjAzZmQuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yy8iADJSfnWFmfvmqFcQFGbaDuQH0qLIVPljlsbC-FQ',
        'https://i.redd.it/vry3uc5ok9w81.png',
        'https://uploads-ssl.webflow.com/6074f6263548834cc1229762/63040b070806156a1fa88877_07.jpg',
        'https://i.pinimg.com/originals/50/54/5e/50545e40f9d985da117eb9aed395bdf8.jpg'
    ]

    const animation = {
        opacity: [0, .2, .4, 1],
        x: ['-80%', '0%', '0%'],
        height: ['0px', (height / 2) + 'px', `${height}px`]
    }

    React.useEffect(() => {
        if (blogListRef.current) {
            const { current } = blogListRef
            setHeight(current.clientHeight)
        }
    }, [])

    return (
        <div className='App'>
            <div className="container">
                <StateContext.Provider value={{index, setIndex}}>
                    <BlogList ref={blogListRef} />
                </StateContext.Provider>

                <div className="right-side">
                    <motion.div animate={animation} key={index} layout className="cover-img">
                        <img  src={imgs[index]} alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default App