import { render, screen, fireEvent } from '@testing-library/react'
import CHHeader from './'

describe('Tests on component CHHeader', () => {
    test('should not render without props', () => {
        const { container } = render(<CHHeader />)
        expect(container).toBeEmptyDOMElement()
    })
    test('render and check title', () => {
        render(<CHHeader setSearch={jest.fn()} />)
        expect(screen.getByText(/Cycle Hire/i)).toBeInTheDocument()
    })
    test('should change input value and click', async () => {
        const setSearch = jest.fn()
        const { getByPlaceholderText } = render(<CHHeader setSearch={setSearch} />)
        const searchInp = getByPlaceholderText(/Type to search bikes/)
        fireEvent.change(searchInp, { target: { value: 'long' } })
        expect(searchInp.value).toBe('long')
        fireEvent.click(await screen.findByText(/Search/i))
        expect(setSearch).toHaveBeenCalled()
    })
})
