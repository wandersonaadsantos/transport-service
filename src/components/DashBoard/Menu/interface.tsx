import type { Disruption } from '../MainContent/interface'

export interface LineObj {
    id: string
    name: string
    modeName: string
    lineStatuses: Omit<Disruption, 'reason'>[]
    serviceTypes: { name: string }[]
}

interface MenuProps {
    data: LineObj[]
    handleSelected: (obj: Partial<LineObj>) => void
    selectedMenu?: Partial<LineObj>
}

export default MenuProps
