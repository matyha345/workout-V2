import styles from './ExerciseLog.module.scss'

const HeaderExerciseLog = ({ isSuccess, exerciseLog }) => {

	return (
		<div className={styles.header}>
			{isSuccess && (
				<div className={styles.heading}>
					<img
						src={
							import.meta.env.VITE_SERVER_URL + exerciseLog.exercise.iconPath
						}
						height='34'
						width='35'
						alt=''
						draggable={false}
					/>
					<h1 className={styles.headingText}>{exerciseLog.exercise.name}</h1>
				</div>
			)}
		</div>
	)
}
export default HeaderExerciseLog
