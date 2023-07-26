import Cookies from 'js-cookie'
import { TOKEN } from '../../../app.constants'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import { SlLogout } from 'react-icons/sl'
import styles from './LogoutHandler.module.scss'

const LogoutHandler = () => {
	const { setIsAuth } = useAuth()
	const nav = useNavigate()

	const logoutHandlerToken = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)

		nav('/auth')
	}

	return (
		<button className={styles.btn} onClick={logoutHandlerToken}>
			<SlLogout fontSize={30}  />
			Выход
		</button>
	)
}

export default LogoutHandler
