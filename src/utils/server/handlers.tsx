import { rest } from 'msw'

const handlers = [
    rest.get(`*Line/Mode/tube,overground,dlr/Status`, (_, res, ctx) => res(ctx.json([
        {
            "id": "bakerloo",
            "name": "Bakerloo",
            "modeName": "tube",
            "lineStatuses": [
                {
                    "id": 0,
                    "lineId": "bakerloo",
                    "statusSeverity": 6,
                    "reason": "Bakerloo Line: Severe delays due to emergency engineering work to fix a rail. London Underground tickets will be accepted on local buses and Thameslink. ",
                }
            ],
            "serviceTypes": [
                {
                    "name": "Regular"
                }
            ]
        },
        {
            "id": "central",
            "name": "Central",
            "modeName": "tube",
            "lineStatuses": [
                {
                    "id": 0,
                    "lineId": "central",
                    "statusSeverity": 10,
                }
            ],
            "serviceTypes": [
                {
                    "name": "Regular"
                },
                {
                    "name": "Night"
                }
            ]
        },
    ])))
]

export default handlers
