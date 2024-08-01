import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from '../../../constants/client'
import type { LineObj, Bike } from './interface'

const transport = createApi({
    baseQuery,
    reducerPath: 'transport',
    endpoints: (builder) => ({
        getLine: builder.query<LineObj[], void>({
            query: () => 'Line/Mode/tube,overground,dlr/Status?detail=true'
        }),
        getBike: builder.query<Bike[], string>({
            query: (param) => `BikePoint/Search?query=${param}`
        })
    })
})

export const { useGetLineQuery, useLazyGetBikeQuery } = transport
export default transport
