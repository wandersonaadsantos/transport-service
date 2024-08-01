import { FC } from 'react'
import CHHeader from './CHHeader'
import BikeList from './BikeList'
import data from './data'

const CycleHire: FC = () => {
    return (
        <div className='col-9'>
            <CHHeader />
            <BikeList data={data}/>
        </div>
    )
}

export default CycleHire
