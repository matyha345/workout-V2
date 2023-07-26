import Layout from '../../layout/Layout'

import styles from './ExerciseLog.module.scss'
import HeaderExerciseLog from './HeaderExerciseLog'
import Information from '../../layout/information/Information'
import { BiArrowBack } from 'react-icons/bi'
import { useExerciseLog } from './hooks/useExerciseLog'
import Row from './details-exercise-log/Row'
import HeaderCompleteExercise from './details-exercise-log/HeaderCompleteExercise'
import Alert from '../../ui/alert/Alert'
import Loader from '../../ui/loader/Loader'
import ExerciseError from './ExerciseError'
import { useUpdateTime } from './hooks/useUpdateTime'
import { useCompleteLog } from './hooks/useCompleteLog'

const ExerciseLog = () => {
	const {
		exerciseLog,
		isSuccess,
		isLoading,
		nav,
		times,
		setTimes,
		btnOnChangeState,
		getTimeValue,
		error,
		toggleTime,
		getState
	} = useExerciseLog()

	

	return (
		<Layout>
			<Information />
			<div className={styles.wrapper}>
				<button
					className={styles.bgLink}
					onClick={() =>
						nav(isSuccess ? `/workout/${exerciseLog.workoutLogId}` : '/workouts')
					}
				>
					<BiArrowBack fontSize={30} />
				</button>

				<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
				<ExerciseError errors={[error]} />
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.content}>
						<HeaderCompleteExercise />
						{exerciseLog?.times.map(item => (
							<Row getState={getState} 
                                btnOnChangeState={btnOnChangeState}
                                toggleTime={toggleTime}
                            item={item} key={item.id} />
						))}
					</div>
				)}
			</div>

			{isSuccess && exerciseLog?.times?.length === 0 && (
				<Alert type='warning' text='Times not found' />
			)}
		</Layout>
	)
}

export default ExerciseLog
