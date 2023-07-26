import { useNavigate } from 'react-router-dom'
import styles from './Workout.module.scss'
import {FiCornerUpLeft} from 'react-icons/fi'

const HeaderWorkout = ({ workoutLog, isSuccess }) => {
	
	const nav = useNavigate()

	return (
		<div className={styles.headerWrapper}>
			<button onClick={() => nav('/workouts')}>
			<FiCornerUpLeft fontSize={30}/>
			</button>
			<div className={styles.headerContent}>
				{isSuccess && (
					<div className={styles.headerItem}>
						<time className={styles.headerTitle}>
							{workoutLog.minute + ' min.'}
						</time>
						<h1 className={styles.headerName}>{workoutLog.workout.name}</h1>
					</div>
				)}
			</div>
		</div>
	)
}

export default HeaderWorkout
