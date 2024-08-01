import { render, screen } from '@testing-library/react'
import BikeList from './'

const data = [
    {
        "id": "BikePoints_76",
        "commonName": "Longford Street, The Regent's Park",
        "lat": 51.525595,
        "lon": -0.144083
    }
]

describe('Tests on component BikeList', () => {
    test('render and check if data is present', () => {
        render(<BikeList data={data} />)
        expect(screen.getByText(/Longford Street, The Regent's Park/i)).toBeInTheDocument()
    })
    test('should return "No bike point found for" if data is an empty array', () => {
        render(<BikeList search='nomatch' data={[]} />)
        expect(screen.getByText(/No bike point found for/i)).toBeInTheDocument()
    })
    test('should not render without props', () => {
        const { container } = render(<BikeList />)
        expect(container).toBeEmptyDOMElement()
    })
    test('should render an error', () => {
        render(<BikeList search='nomatch' error='error' />)
        expect(screen.getByText('Something went wrong!!')).toBeInTheDocument()
    })
    test('should render loading', () => {
        render(<BikeList isLoading />)
        expect(screen.getByText('Loading ...')).toBeInTheDocument()
    })
})
