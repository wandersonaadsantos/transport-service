import { render, screen } from '@testing-library/react'
import App from './App'

test('render App component and check title "Transport service"', () => {
	render(<App />)
	expect(screen.getByText(/Transport service/i)).toBeInTheDocument()
})
