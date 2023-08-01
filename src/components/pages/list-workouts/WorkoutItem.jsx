import styles from './ListWorkouts.module.scss'
import { AiFillDelete } from 'react-icons/ai'
const WorkoutItem = ({ workout, mutate, onDelete }) => {
	return (
		<>
			<div className={styles.wrapperInner}>
				<div className={styles.item}>
					<button
						className={styles.btnOne}
						aria-label='Create new workout'
						onClick={() => mutate(workout.id)}
					>
						<span>{workout.name}</span>
					</button>
					<button aria-label='remove' onClick={() => onDelete(workout.id)}>
						<AiFillDelete fontSize={20} color='#616AEE' />
					</button>
				</div>
			</div>
		</>
	)
}

export default WorkoutItem
