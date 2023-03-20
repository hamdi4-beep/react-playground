import { useSelector } from "react-redux"
import BlogList from "./components/BlogList"

type State = {
    index: {
        value: number
    }
}

function App() {
    const index = useSelector((state: State) => state.index.value)
    
    const imgs = [
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35271885-b64b-49da-b43d-e9aa8fa4d471/deib63r-0ab3a0f9-f527-45fc-aa28-0e2520df03fd.jpg/v1/fill/w_1920,h_1080,q_75,strp/persona_5_strikers___yellow_wallpaper_by_thetruemask_deib63r-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzM1MjcxODg1LWI2NGItNDlkYS1iNDNkLWU5YWE4ZmE0ZDQ3MVwvZGVpYjYzci0wYWIzYTBmOS1mNTI3LTQ1ZmMtYWEyOC0wZTI1MjBkZjAzZmQuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yy8iADJSfnWFmfvmqFcQFGbaDuQH0qLIVPljlsbC-FQ',
        'https://i.redd.it/vry3uc5ok9w81.png',
        'http://wallup.net/wp-content/uploads/2016/05/14/33329-Persona_series-anime-Persona_3.jpg',
        'https://www.wallpaperflare.com/static/240/421/195/persona-series-persona-wallpaper.jpg'
    ]

    return (
        <div className='App'>
            <BlogList />

            <div className="right-side">
                <div className="cover-img">
                    <img src={imgs[index]} alt="" />
                </div>
            </div>
        </div>
    )
}

export default App