import { FC } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashBoard from '../components/DashBoard'

const App: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<DashBoard />} />
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
