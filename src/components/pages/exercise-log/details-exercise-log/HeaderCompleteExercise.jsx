import styles from '../ExerciseLog.module.scss'

const HeaderCompleteExercise = () => {
	return (
		<div className={styles.row}>
			<div>
				<span>Предыдущая</span>
			</div>
			<div>
				<span>Повторы & вес</span>
			</div>
			<div>
				<span>Завершено</span>
			</div>
		</div>
	)
}


export default HeaderCompleteExercise