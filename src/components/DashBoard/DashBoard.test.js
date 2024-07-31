import { render, screen } from '@testing-library/react'
import DashBoard from './'

describe('Tests on component DashBoard', () => {
    test('render with title "Transport service"', () => {
        render(<DashBoard />)
        expect(screen.getByText(/Transport service/i)).toBeInTheDocument()
    })
})
