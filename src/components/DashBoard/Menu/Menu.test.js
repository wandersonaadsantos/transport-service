import { render, screen } from '@testing-library/react'
import Menu from './'

describe('Tests on component Menu', () => {
    test('should not render without props', () => {
        const { container } = render(<Menu />)
        expect(container).toBeEmptyDOMElement()
    })
    test('render menu options', () => {
        render(<Menu data={[{
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
        }]} />)
        expect(screen.getByText(/Northern/)).toBeInTheDocument()
    })
})