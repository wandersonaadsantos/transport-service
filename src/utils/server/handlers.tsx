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
    ]))),
    rest.get(`*BikePoint/Search`, (_, res, ctx) => res(ctx.json([
        {
            "id": "BikePoints_76",
            "commonName": "Longford Street, The Regent's Park",
            "lat": 51.525595,
            "lon": -0.144083
        },
        {
            "id": "BikePoints_114",
            "commonName": "Park Road (Baker Street), The Regent's Park",
            "lat": 51.524517,
            "lon": -0.158963
        },
        {
            "id": "BikePoints_247",
            "commonName": "St. John's Wood Church, The Regent's Park",
            "lat": 51.530529,
            "lon": -0.167515
        },
        {
            "id": "BikePoints_271",
            "commonName": "London Zoo,  The Regent's Park",
            "lat": 51.535836,
            "lon": -0.156285
        },
        {
            "id": "BikePoints_315",
            "commonName": "The Tennis Courts, The Regent's Park",
            "lat": 51.525367,
            "lon": -0.153463
        },
        {
            "id": "BikePoints_329",
            "commonName": "Prince Albert Road, The Regent's Park",
            "lat": 51.535892,
            "lon": -0.160854
        },
        {
            "id": "BikePoints_343",
            "commonName": "London Zoo Car Park, The Regent's Park",
            "lat": 51.536922,
            "lon": -0.150181
        },
        {
            "id": "BikePoints_540",
            "commonName": "Albany Street, The Regent's Park",
            "lat": 51.528302,
            "lon": -0.144466
        },
        {
            "id": "BikePoints_553",
            "commonName": "Regent's Row , Haggerston",
            "lat": 51.535678,
            "lon": -0.062546
        }
    ])))
]

export default handlers
