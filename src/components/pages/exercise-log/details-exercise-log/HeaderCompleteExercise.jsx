import styles from '../ExerciseLog.module.scss'

const HeaderCompleteExercise = () => {
	return (
		<div className={styles.row}>
			<div>
				<span>Previous</span>
			</div>
			<div>
				<span>Repeat & Weight</span>
			</div>
			<div>
				<span>Completed</span>
			</div>
		</div>
	)
}


export default HeaderCompleteExercise