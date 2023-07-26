import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routes } from './routes.data'
import NotFound from '../components/pages/not-found/NotFound'
import { useAuth } from '../hooks/useAuth'

const Router = () => {
	const { isAuth } = useAuth()

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={isAuth ? <Navigate to='/home' /> : <Navigate to='/start' />}
				/>

				{routes.map(route => {
					if (route.isAuth && !isAuth) {
						return false
					}
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
export default Router
