import Layout from '../../../layout/Layout'
import styles from './Auth.module.scss'
import Button from '../../../ui/button/Button'
import Field from '../../../ui/feild/Field'

import Loader from '../../../ui/loader/Loader'
import { useAuthPage } from '../useAuthPage'

const Auth = () => {
	const { errors, handleSubmit, isLoading, onSubmit, register, setType, nav } =
		useAuthPage()

	return (
		<Layout heading='Авторизация' bgImage={'/authOne.jpg'}>
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
					type={'password'}
					placeholder='Enter password'
				/>

				<div className={styles.wrapperButtons}>
					<Button clickHandler={() => setType('login')}>Войти</Button>
				</div>

				<button className={styles.btn} onClick={() => nav('/reg')}>
					У вас нет аккаунта? <span>Зарегистрируйтесь здесь</span>
				</button>
			</form>
		</Layout>
	)
}

export default Auth
