import { useNavigate } from 'react-router-dom'
import cn from 'clsx'
import styles from './Workout.module.scss'


const ExerciseItem = ({ exerciseLog }) => {

	const nav = useNavigate()

	return (
		<div
			className={cn(styles.item, {
				[styles.completed]: exerciseLog.isCompleted
			})}
		>
			<button
				aria-label='Move to exercise'
				onClick={() => nav(`/exercise/${exerciseLog.id}`)}
			>
				<span>{exerciseLog.exercise.name}</span>
				<img
					src={import.meta.env.VITE_SERVER_URL + exerciseLog.exercise.iconPath}
					height='34'
					width='34'
					alt=''
					draggable={false}
				/>
			</button>
		</div>
	)
}

export default ExerciseItem