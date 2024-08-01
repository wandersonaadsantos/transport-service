import { FC } from 'react'

const CHHeader: FC = () => {
    return (
        <section className='w-100'>
            <p className='h5 py-3 text-center'>Cycle Hire</p>
            <div className='input-group mb-5'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Type to search bikes'
                    aria-label='Search for address to find available bikes'
                />
                <button
                    type='button'
                    className='btn btn-secondary'
                >
                    Search
                </button>
            </div>
        </section>
    )
}

export default CHHeader
