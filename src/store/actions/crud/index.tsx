import type { GetDefaultMiddleware } from '@reduxjs/toolkit/src/getDefaultMiddleware'
import transport from './transport'

export * from './transport'

const finalDef = {
    reducer: {
        transport: transport.reducer
    },
    middleware: (getMidDef: GetDefaultMiddleware) => getMidDef().concat(...[
        transport.middleware
    ])
}

export default finalDef
