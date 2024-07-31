import { render, screen } from '@testing-library/react'
import CycleHire from './'

describe('Tests on component CycleHire', () => {
    test('render and check title', () => {
        render(<CycleHire />)
        expect(screen.getByText(/Cycle Hire/i)).toBeInTheDocument()
    })
})
