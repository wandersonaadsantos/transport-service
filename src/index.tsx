import { createRoot } from 'react-dom/client'
import './stylesheets/index.scss'
import App from './container'

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
