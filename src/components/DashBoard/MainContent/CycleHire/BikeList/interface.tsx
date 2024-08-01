import type { Bike } from '../../../../../store/actions/crud/interface'

interface BikeProps {
    data?: Bike[]
    isLoading?: boolean
    error?: object
    search?: string
}

export default BikeProps
