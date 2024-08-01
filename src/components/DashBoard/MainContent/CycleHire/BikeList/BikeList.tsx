import { FC } from 'react'
import LoadingPage from '../../../../Generics/LoadingPage'
import ErrorPage from '../../../../Generics/ErrorPage'
import type BikeProps from './interface'
import { v4 as uuidv4 } from 'uuid'

const BikeList: FC<BikeProps> = ({ data, error, isLoading, search }) => {
    if (error) return <ErrorPage err={JSON.stringify(error)} />
    if (isLoading) return <LoadingPage />
    if (!data) return null
    if (!!search && !data?.length) return <p className='py-5 text-center h4'>No bike point found for <span className='text-danger'>{search}</span></p>
    return (
        <div className='row'>
            {data?.map?.(ele => {
                return (
                    <div className='col-6' key={uuidv4()}>
                        <section className='w-100 mb-3 border p-3'>
                            <p className='h6'>{ele.id}</p>
                            <p className='text-muted'>{`${ele?.id.slice(11)} ${ele?.commonName} (${ele?.lat}, ${ele?.lon})`}</p>
                        </section>
                    </div>
                )
            })}
        </div>
    )
}

export default BikeList
