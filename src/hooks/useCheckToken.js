import { useLocation } from 'react-router-dom'
import { useAuth } from './useAuth'
import { useEffect } from 'react'
import { TOKEN } from '../app.constants'
import Cookies from 'js-cookie'

export const useCheckToken = () => {
	const { setIsAuth } = useAuth()
	const { pathname } = useLocation()

	useEffect(() => {
		const token = Cookies.get(TOKEN)
		setIsAuth(!!token) 
	}, [pathname, setIsAuth])
}

// export const useCheckToken = () => {
//     const {setIsAuth, isAuth} = useAuth()
// 	const { pathname } = useLocation()

// 	useEffect(() => {
// 		const token = Cookies.get(TOKEN)
// 		if (!token) setIsAuth(false)
// 	}, [pathname, isAuth])
// }
