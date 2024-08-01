export interface Disruption {
    id: number
    reason?: string
    statusSeverity: number
}

export interface LineObj {
    id: string
    name: string
    modeName: string
    lineStatuses: Disruption[]
    serviceTypes: { name: string }[]
}

export interface Bike {
    id: string
    commonName: string
    lat: number
    lon: number
}