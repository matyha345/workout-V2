import Layout from '../../../layout/Layout'
import styles from './Register.module.scss'
import Field from '../../../ui/feild/Field'

import Button from '../../../ui/button/Button'

import { useAuthPage } from '../useAuthPage'
import Loader from '../../../ui/loader/Loader'

const Register = () => {
	const { errors, handleSubmit, isLoading, onSubmit, register, setType, nav } =
		useAuthPage()

	return (
		<Layout heading={'Зарегистрироваться'} bgImage={'/RegBg.jpg'}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.title}>
					<h1>WORKOUT</h1>
				</div>
				{isLoading && <Loader />}
				<Field
					error={errors?.email?.message}
					name='email'
					register={register}
					options={{
						required: 'Требуется указать электронную почту'
					}}
					type={'text'}
					placeholder='Enter email'
				/>
				<Field
					error={errors?.password?.message}
					name='password'
					register={register}
					options={{
						required: 'Пароль обязателен'
					}}
					type='password'
					placeholder='Enter password'
				/>

				<div className={styles.wrapperButtons}>
					<Button clickHandler={() => setType('register')}>Зарегистрироваться</Button>
				</div>

				<button className={styles.btn} onClick={() => nav('/auth')}>
				Если у вас уже есть аккаунт? <span>Войдите здесь </span>
				</button>
			</form>
		</Layout>
	)
}
export default Register
