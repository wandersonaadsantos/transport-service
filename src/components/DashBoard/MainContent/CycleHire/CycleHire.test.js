import { screen, fireEvent } from '@testing-library/react'
import { renderWithProviders } from '../../../../utils/testutils'
import CycleHire from './'

describe('Tests on component CycleHire', () => {
    test('render and check title', async () => {
        renderWithProviders(<CycleHire />)
        expect(await screen.findByText(/Cycle Hire/i)).toBeInTheDocument()
    })
    test('should search for "street" 2 times and will call API only the first time', async () => {
        const { getByPlaceholderText } = renderWithProviders(<CycleHire />)
        const searchInp = getByPlaceholderText(/Type to search bikes/)
        fireEvent.change(searchInp, { target: { value: 'street' } })
        expect(searchInp.value).toBe('street')
        fireEvent.click(await screen.findByText(/Search/i))
        expect(screen.getByText(/Loading .../i)).toBeInTheDocument()
        expect(await screen.findByText(/Longford Street/)).toBeInTheDocument()
        fireEvent.click(await screen.findByText(/Search/i))
        expect(await screen.findByText(/Longford Street/)).toBeInTheDocument()
    })
})
