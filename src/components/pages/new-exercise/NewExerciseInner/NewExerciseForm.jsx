import { Controller, useForm } from 'react-hook-form'
import { getIconPath } from './icon-path.util'
import Button from '../../../ui/button/Button'
import { useMutation } from '@tanstack/react-query'

import styles from '../NewExercise.module.scss'
import cn from 'clsx'
import ExerciseService from '../../../../services/exercise/exercise.service'
import Loader from '../../../ui/loader/Loader'
import Alert from '../../../ui/alert/Alert'
import Select from '../../../ui/select/Select'

import FormDataSelect from './form-data-select'


const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExerciseForm = () => {
	const { numberData, stringData } = FormDataSelect()

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
		['create exercise'],
		body => ExerciseService.create(body),
		{
			onSuccess: () => {
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}
	return (
		<div className={styles.exercise}>
			{error && <Alert type='error' text={error} />}
			{isSuccess && <Alert text='Exercise created' />}
			{isLoading && <Loader />}
			<form onSubmit={handleSubmit(onSubmit)}>
				<Select
					optionData={stringData}
					error={errors?.name?.message}
					name='name'
					register={register}
					options={{
						required: 'Name is required'
					}}
					type='text'
				/>

				<Select
					optionData={numberData}
					error={errors?.times?.message}
					name='times'
					register={register}
					options={{
						valueAsNumber: true,
						validate: value => value > 0 || 'Times must be number',
						required: 'Times is required'
					}}
				/>
				<h1 className={styles.titleInner}>Выберите элемент упражнения</h1>
				<Controller
					name='iconPath'
					control={control}
					render={({ field: { value, onChange } }) => (
						<div className={styles.iconPath}>
							{data.map(name => (
								<img
									key={`ex img ${name}`}
									src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(name)}`}
									alt={name}
									className={cn({
										[styles.active]: value === getIconPath(name)
									})}
									onClick={() => onChange(getIconPath(name))}
									draggable={false}
									height='45'
								/>
							))}
						</div>
					)}
				/>

				{errors?.iconPath && (
					<div className='error'>{errors?.iconPath?.message}</div>
				)}
				<div className={styles.btn}>
					<Button>Создать</Button>
				</div>
			</form>
		</div>
	)
}

export default NewExerciseForm
