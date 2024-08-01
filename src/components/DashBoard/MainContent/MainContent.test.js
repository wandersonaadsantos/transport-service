import { render, screen } from '@testing-library/react'
import MainContent from './'

const mainContent = {
    id: 'london-overground',
    name: 'London Overground',
    modeName: 'overground',
    lineStatuses: [
        {
            id: 0,
            lineId: 'london-overground',
            statusSeverity: 5,
            reason: 'LONDON OVERGROUND: Saturday 20 July to Sunday 4 August, no service between Hackney Downs and Chingford. Replacement bus service L3 operates between Hackney Downs and Chingford via Clapton, St James Street, Walthamstow Central, Wood Street and Highams Park.',
        },
        {
            id: 0,
            lineId: 'london-overground',
            statusSeverity: 5,
            reason: 'LONDON OVERGROUND: Saturday 20 July to Sunday 4 August, no service between Hackney Downs and Chingford. Replacement bus service L3 operates between Hackney Downs and Chingford via Clapton, St James Street, Walthamstow Central, Wood Street and Highams Park.',
        },
        {
            id: 0,
            lineId: 'london-overground',
            statusSeverity: 5,
            reason: 'LONDON OVERGROUND: Saturday 20 July to Sunday 4 August, no service between Hackney Downs and Chingford. Replacement bus service L3 operates between Hackney Downs and Chingford via Clapton, St James Street, Walthamstow Central, Wood Street and Highams Park.',
        },
    ],
    serviceTypes: [
        {
            name: 'Regular'
        },
        {
            name: 'Night'
        }
    ]
}

describe('Tests on component MainContent', () => {
    test('should not render without props', () => {
        const { container } = render(<MainContent />)
        expect(container).toBeEmptyDOMElement()
    })
    test('render with disruptions', () => {
        render(<MainContent mainContent={mainContent} />)
        expect(screen.getByText(/Service currently suffering disruptions/i)).toBeInTheDocument()
    })
    test('render without disruptions', () => {
        render(<MainContent mainContent={{
            ...mainContent,
            lineStatuses: [
                {
                    id: 0,
                    statusSeverity: 10,
                }
            ]
        }} />)
        expect(screen.getByText(/No service disruptions/i)).toBeInTheDocument()
    })
})