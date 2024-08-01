import { FC, useState } from 'react'
import CHHeader from './CHHeader'
import BikeList from './BikeList'
import data from './data'

const CycleHire: FC = () => {
    const [search, setSearch] = useState('')
    return (
        <div className='col-9'>
            <CHHeader setSearch={setSearch} search={search} />
            <BikeList data={data} />
        </div>
    )
}

export default CycleHire
