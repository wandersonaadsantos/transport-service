interface Bike {
    id: string
    commonName: string
    lat: number
    lon: number
}

interface BikeProps {
    data: Bike[]
}

export default BikeProps
