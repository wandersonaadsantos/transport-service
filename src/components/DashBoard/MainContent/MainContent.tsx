import { FC } from 'react'
import type { Disruption } from './interface'
import type MainProps from './interface'
import { v4 as uuidv4 } from 'uuid'

const MainContent: FC<MainProps> = ({ mainContent }) => {
    if (!mainContent) return null
    const disruptions = mainContent.lineStatuses.filter(cv => cv.statusSeverity !== 10) as Disruption[]
    return (
        <div className='col-9'>
            <section className='w-100 h-100'>
                <p className='h5 my-5 text-center'>{!disruptions?.length ? 'No service disruptions' : 'Service currently suffering disruptions'}</p>
                {disruptions?.map?.(ele => (<p key={uuidv4()} className='text-center bg-warning p-3'>{ele?.reason}</p>))}
            </section>
        </div>
    )
}

export default MainContent
