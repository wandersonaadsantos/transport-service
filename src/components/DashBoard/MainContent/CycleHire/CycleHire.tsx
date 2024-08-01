import { FC, useState, useEffect } from 'react'
import { useLazyGetBikeQuery } from '../../../../store/actions'
import CHHeader from './CHHeader'
import BikeList from './BikeList'

const CycleHire: FC = () => {
    const [allValues, setAllVal] = useState({ inpSearch: '', search: '' })
    const [getBikes, { data, isLoading, error }] = useLazyGetBikeQuery()
    const handleVall = (obj: object) => setAllVal({ ...allValues, ...obj })
    const { search, inpSearch } = allValues

    useEffect(() => {
        if (!!search) getBikes(search)
    }, [search])

    return (
        <div className='col-9'>
            <CHHeader handleVall={handleVall} inpSearch={inpSearch} />
            <BikeList data={data} isLoading={isLoading} error={error} search={search} />
        </div>
    )
}

export default CycleHire
