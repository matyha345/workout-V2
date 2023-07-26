import { useParams } from 'react-router-dom'
import ExerciseLogService from '../../../../services/exercise/exercise-log.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useCompleteLog } from './useCompleteLog'

export const useUpdateTime = times => {
	const { id } = useParams()

	const queryClient = useQueryClient()

	const { completeLog, errorCompleted } = useCompleteLog()

	const { mutate, error: errorChange } = useMutation(
		['update time'],
		({ timeId, body }) => ExerciseLogService.updateTime(timeId, body),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get exercise log', id]).then(() => {
					const filteredTimes = times.filter(time => time.isCompleted)

					if (filteredTimes.length === times.length - 1) {
						completeLog({ isCompleted: true })
					}
				}) 
			}
		}
	)

	return { updateTime: mutate, error: errorChange || errorCompleted }
}
