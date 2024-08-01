import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type MenuProps from './interface'
import s from './Menu.module.scss'

const Menu: FC<MenuProps> = ({ data, handleSelected, selectedMenu }) => {
    if (!data?.length || !handleSelected) return null
    return (
        <div className='col-3'>
            <section className={`w-100 pe-2 pt-3 h-100 ${s.borderEnd}`}>
                <div className='d-grid gap-3'>
                    {data?.map?.(ele => {
                        const { name, serviceTypes, lineStatuses, id } = ele
                        const issues = lineStatuses.some(cv => cv.statusSeverity !== 10)
                        return (
                            <button
                                type='button'
                                key={uuidv4()}
                                onClick={() => handleSelected(ele)}
                                className={`${s.btnColor} ${selectedMenu?.id === id ? s.selected : ''} btn-sm py-2 fw-bolder`}
                            >
                                {name}
                                <span className='d-block mb-2'>
                                    <span className={`badge ${issues ? 'text-bg-danger' : 'text-bg-success'} fw-bolder text-center`}>{issues ? 'X' : 'V'}</span>
                                    {serviceTypes.some(cv => cv.name === 'Night') && <span className='badge text-bg-warning fw-bolder text-center ms-2'>Night</span>}
                                </span>
                            </button>
                        )
                    })}
                    <button
                        type='button'
                        onClick={() => handleSelected({ id: 'cyclehire' })}
                        className={`${s.btnColor} ${selectedMenu?.id === 'cyclehire' ? s.selected : s.cycleColor} btn-sm py-2 fw-bolder`}
                    >
                        Cycle Hire
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Menu
