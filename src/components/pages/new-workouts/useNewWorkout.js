import { useMemo } from 'react'
import WorkoutsService from '../../../services/workout/workouts.service'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'

export const useNewWorkout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create workout'],
		body => WorkoutsService.create(body),
		{
			onSuccess: () => {
				reset({
					name: '',
					exerciseIds: ''
				})
			}
		}
	)

	const onSubmit = data => {
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map(exercise => exercise.value)
		})
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
            errors,
			control,
			isSuccess,
			error,
			isLoading,
            onSubmit
		}),
		[errors, error, isLoading, isSuccess]
	)
}
