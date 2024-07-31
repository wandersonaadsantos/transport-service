const schema = [
    {
        id: 'bakerloo',
        name: 'Bakerloo',
        modeName: 'tube',
        lineStatuses: [
            {
                id: 0,
                lineId: 'bakerloo',
                statusSeverity: 6,
                reason: 'Bakerloo Line: Severe delays due to emergency engineering work to fix a rail. London Underground tickets will be accepted on local buses and Thameslink. ',
            }
        ],
        serviceTypes: [
            {
                name: 'Regular'
            }
        ]
    },
    {
        id: 'central',
        name: 'Central',
        modeName: 'tube',
        lineStatuses: [
            {
                id: 0,
                lineId: 'central',
                statusSeverity: 9,
                reason: 'Central Line: Minor delays between Leytonstone and Hainault via Newbury Park due to train cancellations. ',
            }
        ],
        serviceTypes: [
            {
                name: 'Regular'
            },
            {
                name: 'Night'
            }
        ]
    },
    {
        id: 'circle',
        name: 'Circle',
        modeName: 'tube',
        lineStatuses: [
            {
                id: 0,
                statusSeverity: 10,
            }
        ],
        serviceTypes: [
            {
                name: 'Regular'
            }
        ]
    },
    {
        id: 'district',
        name: 'District',
        modeName: 'tube',
        lineStatuses: [
            {
                id: 0,
                statusSeverity: 10,
            }
        ],
        serviceTypes: [
            {
                name: 'Regular'
            }
        ]
    },
    {
        id: 'dlr',
        name: 'DLR',
        modeName: 'dlr',
        lineStatuses: [
            {
                id: 0,
                statusSeverity: 10,
            }
        ],
        serviceTypes: [
            {
                name: 'Regular'
            }
        ]
    },
    {
        id: 'hammersmith-city',
        name: 'Hammersmith & City',
        modeName: 'tube',
        lineStatuses: [
            {
                id: 0,
                statusSeverity: 10,
            }
        ],
        serviceTypes: [
            {
                name: 'Regular'
            }
        ]
    },
    {
        id: 'jubilee',
        name: 'Jubilee',
        modeName: 'tube',
        lineStatuses: [
            {
                id: 0,
                statusSeverity: 10,
            }
        ],
        serviceTypes: [
            {
                name: 'Regular'
            },
            {
                name: 'Night'
            }
        ]
    },
    {
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
    },
    {
        id: 'metropolitan',
        name: 'Metropolitan',
        modeName: 'tube',
        lineStatuses: [
            {
                id: 0,
                statusSeverity: 10,
            }
        ],
        serviceTypes: [
            {
                name: 'Regular'
            }
        ]
    },
    {
        id: 'northern',
        name: 'Northern',
        modeName: 'tube',
        lineStatuses: [
            {
                id: 0,
                statusSeverity: 10,
            }
        ],
        serviceTypes: [
            {
                name: 'Regular'
            },
            {
                name: 'Night'
            }
        ]
    },
    {
        id: 'piccadilly',
        name: 'Piccadilly',
        modeName: 'tube',
        lineStatuses: [
            {
                id: 0,
                statusSeverity: 10,
            }
        ],
        serviceTypes: [
            {
                name: 'Regular'
            },
            {
                name: 'Night'
            }
        ]
    },
    {
        id: 'victoria',
        name: 'Victoria',
        modeName: 'tube',
        lineStatuses: [
            {
                id: 0,
                statusSeverity: 10,
            }
        ],
        serviceTypes: [
            {
                name: 'Regular'
            },
            {
                name: 'Night'
            }
        ]
    },
    {
        id: 'waterloo-city',
        name: 'Waterloo & City',
        modeName: 'tube',
        lineStatuses: [
            {
                id: 0,
                statusSeverity: 10,
            }
        ],
        serviceTypes: [
            {
                name: 'Regular'
            }
        ]
    }
]

export default schema
