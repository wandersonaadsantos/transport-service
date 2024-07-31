import { LineObj } from '../Menu/interface'

export interface Disruption {
    id: number
    reason: string
    statusSeverity: number
}

interface MainProps {
    mainContent: LineObj
}

export default MainProps
