import { FC } from 'react'
import s from './DashBoard.module.scss'

const DashBoard: FC = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <p className='mt-4 text-center h1'>Transport service</p>
                    <hr className='mb-0' />
                </div>
                <div className='col-3'>
                    <section className={`w-100 pe-2 pt-3 h-100 ${s.borderEnd}`}>
                        <div className='d-grid gap-3'>
                            <button
                                type='button'
                                className={`${s.btnColor} btn-sm py-2 fw-bolder`}
                            >
                                Menu
                                <span className='d-block mb-2'>
                                    <span className='badge text-bg-success fw-bolder text-center'>V</span>
                                    <span className='badge text-bg-warning fw-bolder text-center ms-2'>Night</span>
                                </span>
                            </button>
                            <button
                                type='button'
                                className={`${s.btnColor} btn-sm py-2 fw-bolder`}
                            >
                                Menu
                                <span className='d-block mb-2'>
                                    <span className='badge  text-bg-danger'>X</span>
                                    <span className='badge text-bg-warning fw-bolder text-center ms-2'>Night</span>
                                </span>
                            </button>
                            <button
                                type='button'
                                className={`${s.btnColor} btn-sm py-2 fw-bolder`}
                            >
                                Menu
                                <span className='d-block mb-2'>
                                    <span className='badge text-bg-success fw-bolder text-center'>V</span>
                                </span>
                            </button>
                            <button
                                type='button'
                                className={`${s.btnColor} btn-sm py-2 fw-bolder`}
                            >
                                Menu
                                <span className='d-block mb-2'>
                                    <span className='badge  text-bg-danger'>X</span>
                                </span>
                            </button>
                            <button
                                type='button'
                                className={`${s.btnColor} ${s.cycleColor} btn-sm py-2 fw-bolder`}
                            >
                                Cycle Hire
                            </button>
                        </div>
                    </section>
                </div>
                <div className='col-9'>
                    <section className='w-100 h-100'>
                        <p className='h5 my-5 text-center'>Service currently suffering disruptions</p>
                        <p className='text-center bg-warning p-3 border-bottom'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus necessitatibus ab error tempora quo voluptas maiores quia pariatur. Reiciendis explicabo magnam eum est minima eligendi impedit hic ipsam! Adipisci.</p>
                        <p className='text-center bg-warning p-3 border-bottom'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus necessitatibus ab error tempora quo voluptas maiores quia pariatur. Reiciendis explicabo magnam eum est minima eligendi impedit hic ipsam! Adipisci.</p>
                        <p className='text-center bg-warning p-3 border-bottom'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus necessitatibus ab error tempora quo voluptas maiores quia pariatur. Reiciendis explicabo magnam eum est minima eligendi impedit hic ipsam! Adipisci.</p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
