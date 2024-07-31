import { render, screen } from '@testing-library/react'
import App from './App'

describe('Tests on component App', () => {
	test('render default component and check title "Transport service"', () => {
		render(<App />)
		expect(screen.getByText(/Transport service/i)).toBeInTheDocument()
	})
})
