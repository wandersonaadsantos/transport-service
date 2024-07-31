import { FC } from 'react'
import s from './DashBoard.module.scss'

const DashBoard: FC = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <p className='py-4 text-center h1'>Transport service</p>
                    <hr className='mb-0'/>
                </div>
                <div className='col-2'>
                    <section className={`w-100 pe-2 pt-3 h-100 ${s.borderEnd}`}>
                        <div className='d-grid gap-3'>
                            <button
                                type='button'
                                className='btn-sm btn btn-secondary'
                            >
                                Menu
                                <span className='d-block'>
                                    <span className='badge text-bg-success fw-bolder text-center'>V</span>
                                    <span className='badge text-bg-warning fw-bolder text-center ms-2'>Night</span>
                                </span>
                            </button>
                            <button
                                type='button'
                                className='btn-sm btn btn-secondary'
                            >
                                Menu
                                <span className='d-block'>
                                    <span className='badge  text-bg-danger'>X</span>
                                </span>
                            </button>
                            <button
                                type='button'
                                className='btn-sm btn btn-secondary'
                            >
                                Menu
                                <span className='d-block'>
                                    <span className='badge text-bg-success fw-bolder text-center'>V</span>
                                </span>
                            </button>
                            <button
                                type='button'
                                className='btn-sm btn btn-secondary'
                            >
                                Menu
                                <span className='d-block'>
                                    <span className='badge text-bg-success fw-bolder text-center'>V</span>
                                </span>
                            </button>
                            <button
                                type='button'
                                className='btn-sm btn btn-secondary'
                            >
                                Menu
                                <span className='d-block'>
                                    <span className='badge text-bg-success fw-bolder text-center'>V</span>
                                </span>
                            </button>
                            <button
                                type='button'
                                className='btn-sm btn btn-secondary'
                            >
                                Menu
                                <span className='d-block'>
                                    <span className='badge text-bg-success fw-bolder text-center'>V</span>
                                </span>
                            </button>
                            <button
                                type='button'
                                className='btn-sm btn btn-secondary'
                            >
                                Menu
                                <span className='d-block'>
                                    <span className='badge text-bg-success fw-bolder text-center'>V</span>
                                </span>
                            </button>
                            <button
                                type='button'
                                className='btn-sm btn btn-secondary'
                            >
                                Menu
                                <span className='d-block'>
                                    <span className='badge text-bg-success fw-bolder text-center'>V</span>
                                </span>
                            </button>
                        </div>
                    </section>
                </div>
                <div className='col-10'>
                    <p className='text-center py-5'>Main Content</p>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
