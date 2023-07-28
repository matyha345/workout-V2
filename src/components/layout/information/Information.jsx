import { useLocation, useParams } from 'react-router-dom'
import { useProfile } from '../../pages/profile/useProfile'
import Loader from '../../ui/loader/Loader'
import styles from './Information.module.scss'
import imgOne from '/svg/lifting.svg'
import { RxAvatar } from 'react-icons/rx'

const Information = ({ pageExercise }) => {
	const { id } = useParams()
	const { data, isLoading } = useProfile()
	const { pathname } = useLocation()

	

	return (
		<section className={styles.wrapper}>
			<div className={styles.text}>
				<h1 className={styles.title}>
					{pathname == `/workout/${id}` ? <RxAvatar fontSize={30}/> : 'Привет' }
					{isLoading ? <Loader /> : <span>{data?.email}</span>}
				</h1>
				{pathname !== '/new-exercise' ? (
					pathname !== '/workouts/:id'
				) : (
					<p className={styles.inner}>Давайте начнем ваш день.</p>
				)}
			</div>

			<div className={styles.img}>
				<img src={imgOne} alt='avatar Label' />
			</div>
		</section>
	)
}
export default Information
