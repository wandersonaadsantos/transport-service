import { screen } from '@testing-library/react'
import { renderWithProviders } from '../utils/testutils'
import App from './App'

describe('Tests on component App', () => {
	test('render default component and check title "Transport service"', async () => {
		renderWithProviders(<App />)
		expect(screen.getByText(/Loading .../)).toBeInTheDocument()
		expect(await screen.findByText(/Transport service/)).toBeInTheDocument()
	})
})
