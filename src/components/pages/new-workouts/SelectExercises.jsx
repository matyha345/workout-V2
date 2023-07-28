import { Controller } from 'react-hook-form'

import ReactSelect from 'react-select'
import { useListExercises } from './useListExercises'
import Loader from '../../ui/loader/Loader'

const SelectExercises = ({ control }) => {
	const { data, isLoading} = useListExercises()

	if(isLoading) return <Loader />
	return (
		<Controller
			name='exerciseIds'
			control={control}
			render={({ field: { value, onChange } }) => (


				//Стили для класса находятся в styles/index.scss classNamePrefix='select2-selection'
				
				<ReactSelect
					classNamePrefix='select2-selection'
					placeholder='Выбрать упражнения...'
					title='Exercises'
					options={data.map(exercise => ({
						value: exercise.id,
						label: exercise.name
					}))}
					value={value}
					onChange={onChange}
					isMulti
				/>
			)}
		/>
	)
}

export default SelectExercises
