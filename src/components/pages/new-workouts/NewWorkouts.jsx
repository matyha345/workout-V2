import Field from '../../ui/feild/Field'
import styles from './NewWorkouts.module.scss'
import { useNewWorkout } from './useNewWorkout'
import { Link } from 'react-router-dom'
import SelectExercises from './SelectExercises'
import Button from '../../ui/button/Button'
import Layout from '../../layout/Layout'
import Loader from '../../ui/loader/Loader'
import Alert from '../../ui/alert/Alert'
import { FiArrowRight } from 'react-icons/fi'

const NewWorkouts = () => {
	const {
		control,
		error,
		errors,
		handleSubmit,
		isLoading,
		isSuccess,
		onSubmit,
		register
	} = useNewWorkout()
	return (
		<>
			<Layout bgImage={'newWorkouts.jpg'}>
				<div className={styles.wrapper}>
					{error && <Alert type='error' text={error} />}
					{isSuccess && <Alert text='Workout created' />}
					{isLoading && <Loader />}
					<h1 className={styles.title}>Создать новую тренировку</h1>
					<form
						className={styles.formAndSelect}
						onSubmit={handleSubmit(onSubmit)}
					>
						<Field
							error={errors?.name?.message}
							name='name'
							register={register}
							options={{
								required: 'Name is required'
							}}
							type='text'
							placeholder='Названия упражнения'
						/>

						<Link className={styles.link} to={'/new-exercise'}>
							Добавить новое упражнение <FiArrowRight fontSize={30}/>
						</Link>
						<div className={styles.select}>
							<SelectExercises control={control} />
						</div>

						{errors?.iconPath && (
							<div className='error'>{errors?.iconPath?.message}</div>
						)}
						<div className={styles.btn}>
							<Button>Создать</Button>
						</div>
					</form>
				</div>
			</Layout>
		</>
	)
}
export default NewWorkouts
