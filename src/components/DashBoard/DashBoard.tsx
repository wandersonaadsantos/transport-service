import { FC, useState } from 'react'
import MainContent from './MainContent'
import schema from './data'
import Menu from './Menu'
import type { LineObj } from './Menu/interface'

const DashBoard: FC = () => {
    const [selectedMenu, setSelected] = useState<Partial<LineObj>>()
    const handleSelected = (obj: Partial<LineObj>) => setSelected(obj.id === selectedMenu?.id ? {} : obj)
    return (
        <section className='w-100 bg-light pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='mt-4 text-center h1'>Transport service</p>
                        <hr className='mb-0' />
                    </div>
                    <Menu data={schema} handleSelected={handleSelected} selectedMenu={selectedMenu} />
                    <MainContent mainContent={selectedMenu} />
                </div>
            </div>
        </section>
    )
}

export default DashBoard
