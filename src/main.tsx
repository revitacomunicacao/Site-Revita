import ReactDOM from 'react-dom/client'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from 'virtual:generated-pages-react'
import './index.css'
import { Header } from './components/Layout/Header'
import { Footer } from './components/Layout/Footer'

function App() {
  return useRoutes(routes)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/desenvolvimento/revita">
    <Header />
    <App />
    <Footer />
  </BrowserRouter>
)
