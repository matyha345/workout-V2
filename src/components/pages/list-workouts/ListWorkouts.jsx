import Layout from '../../layout/Layout'
import Alert from '../../ui/alert/Alert'
import Loader from '../../ui/loader/Loader'
import WorkoutItem from './WorkoutItem'
import { useWorkouts } from './useWorkouts'
import styles from './ListWorkouts.module.scss'

const ListWorkouts = () => {
	const { data, error, isLoading, isSuccess, isSuccessMutate, mutate } =
		useWorkouts()
	return (
		<Layout  heading={'Список тренировок'}>

            <div className={styles.bgImages}>
                <img src="listWork.jpg" alt="" />
            </div>
			<div>
				{error && <Alert type='error' text={error} />}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map(workout => (
							<WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
						))}
					</div>
				)}
			</div>
			{isSuccess && data?.length === 0 && (
				<Alert type='warning' text='Workouts not found' />
			)}
		</Layout>
	)
}
export default ListWorkouts
