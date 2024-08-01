import { render, screen } from '@testing-library/react'
import LoadingPage from './LoadingPage'

test('render loading text', () => {
	render(<LoadingPage />)
	expect(screen.getByText(/Loading .../)).toBeInTheDocument()
})
