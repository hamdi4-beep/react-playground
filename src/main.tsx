import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Provider } from 'react-redux'
import Store from './Store'
import App from './App'
import './sass/main.scss'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
