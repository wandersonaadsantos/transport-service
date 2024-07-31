import { render, screen } from '@testing-library/react'
import MainContent from './'

describe('Tests on component MainContent', () => {
    test('should not render without props', () => {
        const { container } = render(<MainContent />)
        expect(container).toBeEmptyDOMElement()
    })
    test('render without disruptions', () => {
        render(<MainContent mainContent={{
            id: 'hammersmith-city',
            name: 'Hammersmith & City',
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
                }
            ]
        }} />)
        expect(screen.getByText(/No service disruptions/i)).toBeInTheDocument()
    })
})