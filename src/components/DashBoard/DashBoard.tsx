import { FC } from 'react'
import MainContent from './MainContent'
import schema from './data'
import Menu from './Menu'

const DashBoard: FC = () => {
    return (
        <section className='w-100 bg-light pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='mt-4 text-center h1'>Transport service</p>
                        <hr className='mb-0' />
                    </div>
                    <Menu data={schema} />
                    <MainContent mainContent={schema[7]} />
                </div>
            </div>
        </section>
    )
}

export default DashBoard
