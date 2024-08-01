import { render, screen } from '@testing-library/react'
import CHHeader from './'

describe('Tests on component CHHeader', () => {
    test('render and check title', () => {
        render(<CHHeader />)
        expect(screen.getByText(/Cycle Hire/i)).toBeInTheDocument()
    })
})
