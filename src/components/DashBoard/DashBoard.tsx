import { FC, useState } from 'react'
import type { LineObj } from '../../store/actions/crud/interface'
import { useGetLineQuery } from '../../store/actions'
import LoadingPage from '../Generics/LoadingPage'
import ErrorPage from '../Generics/ErrorPage'
import MainContent from './MainContent'
import Menu from './Menu'

const DashBoard: FC = () => {
    const [selectedMenu, setSelected] = useState<Partial<LineObj>>()
    const handleSelected = (obj: Partial<LineObj>) => setSelected(obj.id === selectedMenu?.id ? {} : obj)
    const { data, isLoading, error } = useGetLineQuery()
    if (error) return <ErrorPage err={`${JSON.stringify(error)}`} />
    if (isLoading || !data) return <LoadingPage />
    return (
        <section className='w-100 bg-light pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='mt-4 text-center h1'>Transport service</p>
                        <hr className='mb-0' />
                    </div>
                    <Menu data={[...data]?.sort((a, b) => a?.modeName?.localeCompare(b?.modeName) || a?.name?.localeCompare?.(b?.name))} handleSelected={handleSelected} selectedMenu={selectedMenu} />
                    <MainContent mainContent={selectedMenu} />
                </div>
            </div>
        </section>
    )
}

export default DashBoard
