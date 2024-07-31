import { render, screen, fireEvent } from '@testing-library/react'
import Menu from './'

const data = [{
    id: 'northern',
    name: 'Northern',
    modeName: 'tube',
    lineStatuses: [
        {
            id: 0,
            statusSeverity: 10,
        }
    ],
    serviceTypes: [
        {
            name: 'Regular'
        },
        {
            name: 'Night'
        }
    ]
}]

describe('Tests on component Menu', () => {
    test('should not render without props', () => {
        const { container } = render(<Menu />)
        expect(container).toBeEmptyDOMElement()
    })
    test('render menu options', () => {
        render(<Menu data={data} handleSelected={jest.fn()} />)
        expect(screen.getByText(/Northern/)).toBeInTheDocument()
    })
    test('render with selected class and check click', async () => {
        const handleSelected = jest.fn()
        render(<Menu data={data} handleSelected={handleSelected} selectedMenu={data[0]} />)
        expect(screen.getByText(/Northern/i)).toBeInTheDocument()
        expect(await screen.findByText(/Northern/i)).toHaveClass('selected')
        fireEvent.click(await screen.findByText(/Northern/i))
        expect(handleSelected).toHaveBeenCalled()
    })
})