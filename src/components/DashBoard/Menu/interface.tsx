import type { LineObj } from '../../../store/actions/crud/interface'

interface MenuProps {
    data: LineObj[]
    handleSelected: (obj: Partial<LineObj>) => void
    selectedMenu?: Partial<LineObj>
}

export default MenuProps
