import { render, screen, fireEvent } from '@testing-library/react'
import DashBoard from './'

describe('Tests on component DashBoard', () => {
    test('render with title "Transport service"', () => {
        render(<DashBoard />)
        expect(screen.getByText(/Transport service/i)).toBeInTheDocument()
    })
    test('click should change the presence of the selected class', () => {
        render(<DashBoard />)
        expect(screen.getByText(/Cycle Hire/)).toBeInTheDocument()
        expect(screen.getByText(/Cycle Hire/)).not.toHaveClass('selected')
        fireEvent.click(screen.getByText(/Cycle Hire/))
        expect(screen.getAllByText(/Cycle Hire/)?.[0]).toHaveClass('selected')
        fireEvent.click(screen.getAllByText(/Cycle Hire/)?.[0])
        expect(screen.getByText(/Cycle Hire/)).not.toHaveClass('selected')
    })
})
