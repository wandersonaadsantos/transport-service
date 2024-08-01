import { screen, fireEvent } from '@testing-library/react'
import { renderWithProviders } from '../../utils/testutils'
import server from '../../utils/server'
import { rest } from 'msw'
import DashBoard from './'

describe('Tests on component DashBoard', () => {
    test('handles error response', async () => {
        // force msw to return error response
        server.use(rest.get('*Line/Mode/tube,overground,dlr/Status', (_, res, ctx) => res(ctx.status(500))))
        renderWithProviders(<DashBoard />)
        expect(await screen.findByText('Something went wrong!!')).toBeInTheDocument()
    })
    test('render with title "Transport service"', async () => {
        renderWithProviders(<DashBoard />)
        expect(await screen.findByText(/Transport service/)).toBeInTheDocument()
    })
    test('click should change the presence of the selected class', async () => {
        renderWithProviders(<DashBoard />)
        expect(await screen.findByText(/Cycle Hire/)).toBeInTheDocument()
        expect(await screen.findByText(/Cycle Hire/)).not.toHaveClass('selected')
        fireEvent.click(await screen.findByText(/Cycle Hire/))
        expect(await screen.findByText(/Cycle Hire/)).toHaveClass('selected')
        fireEvent.click(await screen.findByText(/Cycle Hire/))
        expect(await screen.findByText(/Cycle Hire/)).not.toHaveClass('selected')
    })
})
