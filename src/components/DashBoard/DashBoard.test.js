import { render, screen, fireEvent } from '@testing-library/react'
import DashBoard from './'

describe('Tests on component DashBoard', () => {
    test('render with title "Transport service"', () => {
        render(<DashBoard />)
        expect(screen.getByText(/Transport service/i)).toBeInTheDocument()
    })
    test('click should change the presence of the selected class', async () => {
        render(<DashBoard />)
        expect(screen.getByText(/Cycle Hire/i)).toBeInTheDocument()
        expect(await screen.findByText(/Cycle Hire/i)).not.toHaveClass('selected')
        fireEvent.click(await screen.findByText(/Cycle Hire/i))
        expect(await screen.findByText(/Cycle Hire/i)).toHaveClass('selected')
        fireEvent.click(await screen.findByText(/Cycle Hire/i))
        expect(await screen.findByText(/Cycle Hire/i)).not.toHaveClass('selected')
    })
})
