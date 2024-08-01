import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type BikeProps from './interface'

const BikeList: FC<BikeProps> = ({ data }) => {
    if (!data) return null
    if (!data?.length) return <p className='py-5 text-center h4'>No bike point found</p>
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
