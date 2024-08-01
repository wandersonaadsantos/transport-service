import { render, screen, fireEvent } from '@testing-library/react'
import CHHeader from './'

describe('Tests on component CHHeader', () => {
    test('should not render without props', () => {
        const { container } = render(<CHHeader />)
        expect(container).toBeEmptyDOMElement()
    })
    test('render and check title', () => {
        render(<CHHeader handleVall={jest.fn()} />)
        expect(screen.getByText(/Cycle hire/)).toBeInTheDocument()
    })
    test('should change input value and click', async () => {
        const handleVall = jest.fn()
        const { getByPlaceholderText } = render(<CHHeader handleVall={handleVall} />)
        const searchInp = getByPlaceholderText(/Type to search bikes/i)
        fireEvent.change(searchInp, { target: { value: 'long' } })
        expect(searchInp.value).toBe('long')
        fireEvent.click(await screen.findByText(/Search/i))
        expect(handleVall).toHaveBeenCalled()
    })
})
