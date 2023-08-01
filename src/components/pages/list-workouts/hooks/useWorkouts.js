import { useMutation, useQuery } from '@tanstack/react-query'
import WorkoutsService from '../../../../services/workout/workouts.service'
import { useNavigate } from 'react-router-dom'
import WorkoutLogService from '../../../../services/workout/workout-log.service'

export const useWorkouts = () => {
	const { data, isSuccess } = useQuery(
		['get workouts'],
		() => WorkoutsService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const nav = useNavigate()

	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation(
		['Create new workout log'],
		workoutId => WorkoutLogService.create(workoutId),
		{
			onSuccess({ data }) {
				nav(`/workout/${data.id}`)
			}
		}
	)


	return {
		data,
		isSuccess,
		mutate,
		isLoading,
		isSuccessMutate,
		error
	}
}
