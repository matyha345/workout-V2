import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import workoutsService from '../../../../services/workout/workouts.service'

export const useDeleteWorkout = onSuccess => {
	const { id } = useParams()
	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['delete work'],
		id => workoutsService.delete(id),
		{
			onSuccess: () => queryClient.invalidateQueries(['get workouts'])
		}
	)

	return {
		completeDelete: mutate
	}
}
