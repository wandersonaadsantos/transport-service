import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { REACT_APP_API_URL } from './'

const baseQuery = fetchBaseQuery({ baseUrl: REACT_APP_API_URL })

export default baseQuery
