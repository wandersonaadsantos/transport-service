import { LineObj } from '../Menu/interface'

export interface Disruption {
    id: number
    reason: string
    statusSeverity: number
}

interface MainProps {
    mainContent?: Partial<LineObj>
}

export default MainProps
