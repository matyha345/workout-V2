import { useNavigate } from 'react-router-dom'
import styles from './NotFound.module.scss'
import { useAuthPage } from '../auth-register/useAuthPage'
import Button from '../../ui/button/Button'
import {SiWebauthn} from 'react-icons/si'

const NotFound = () => {
	const { isAuth } = useAuthPage()

	const nav = useNavigate()
	return (
		<section className={styles.notFound} style={{backgroundImage: 'url(/bgBenchpress.jpg)'}}>
			<div className={styles.wrapperInner}>
				<h1 className={styles.title}>Page not found</h1>
				<Button clickHandler={() => (isAuth ? nav('/Home') : nav('/auth'))}>
					<SiWebauthn  fontSize={50}/>
				</Button>
			</div>
		</section>
	)
}
export default NotFound
