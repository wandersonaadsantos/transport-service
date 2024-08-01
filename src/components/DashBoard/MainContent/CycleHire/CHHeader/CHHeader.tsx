import { FC } from 'react'
import type CHProps from './interface'

const CHHeader: FC<CHProps> = ({ search, setSearch }) => {
    if (!setSearch) return null
    return (
        <section className='w-100'>
            <p className='h5 py-3 text-center'>Cycle hire</p>
            <div className='input-group mb-5'>
                <input
                    type='text'
                    value={search}
                    className='form-control'
                    placeholder='Type to search bikes'
                    aria-label='Search for address to find available bikes'
                    onChange={e => setSearch(e?.target?.value)}
                />
                <button
                    type='button'
                    className='btn btn-secondary'
                    onClick={() => setSearch(search)}
                >
                    Search
                </button>
            </div>
        </section>
    )
}

export default CHHeader
