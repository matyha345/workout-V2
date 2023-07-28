import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './Workout.module.scss'
import Layout from '../../layout/Layout'

import WorkoutLogService from '../../../services/workout/workout-log.service'
import HeaderWorkout from './HeaderWorkout'
import Information from '../../layout/information/Information'
import Loader from '../../ui/loader/Loader'
import { Fragment } from 'react'
import ExerciseItem from './ExerciseItem'
import Button from '../../ui/button/Button'

const Workout = () => {
	const { id } = useParams()

	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(['get workout log', id], () => WorkoutLogService.getById(id), {
		select: ({ data }) => data
	})

	const nav = useNavigate()

	const { mutate } = useMutation(
		['Complete workout'],
		() => WorkoutLogService.complete(id),
		{
			onSuccess() {
				nav('/workouts')
			}
		}
	)
	return (
		<Layout bgImage={'/bgList.jpeg'}>
			<Information />
			<HeaderWorkout isSuccess={isSuccess} workoutLog={workoutLog} />

			<div className={styles.wrapper}>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapperInner}>
						{workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
							<Fragment key={exerciseLog.id}>
								<ExerciseItem exerciseLog={exerciseLog} />
								{index % 2 !== 0 &&
									index !== workoutLog.exerciseLogs.length - 1 && (
										<div className={styles.line} />
									)}
							</Fragment>
						))}
					</div>
				)}
			<div className={styles.btnButton}>
				<Button clickHandler={() => mutate()}>Завершить тренировку</Button>
			</div>
			</div>
		</Layout>
	)
}
export default Workout
