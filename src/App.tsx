import * as React from 'react'
import BlogList from './components/BlogList'

function App() {
    const titles = [
        'Minimalistic',
        'UI/UX',
        'Design',
        'Motion'
    ]

    return (
        <div className='App'>
            <BlogList titles={titles} />
        </div>
    )
}

export default App