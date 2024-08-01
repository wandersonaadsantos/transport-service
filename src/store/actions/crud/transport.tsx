import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from '../../../constants/client'
import type { LineObj } from './interface'

const transport = createApi({
    baseQuery,
    reducerPath: 'transport',
    endpoints: (builder) => ({
        getLine: builder.query<LineObj[], void>({
            query: () => 'Line/Mode/tube,overground,dlr/Status?detail=true'
        })
    })
})

export const { useGetLineQuery } = transport
export default transport
