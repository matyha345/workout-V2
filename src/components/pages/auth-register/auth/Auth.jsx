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
		<Layout heading='sing in' bgImage={'/authOne.jpg'}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.title}>
					<h1>BODY GOALS WORKOUT</h1>
				</div>
				{isLoading && <Loader />}
				<Field
					error={errors?.email?.message}
					name='email'
					register={register}
					options={{
						required: 'Email is required'
					}}
					type={'text'}
					placeholder='Enter email'
				/>
				<Field
					error={errors?.password?.message}
					name='password'
					register={register}
					options={{
						required: 'Password is required'
					}}
					type={'password'}
					placeholder='Enter password'
				/>

				<div className={styles.wrapperButtons}> 
				
					<Button clickHandler={() => setType('login')}>Sing in</Button>
				</div>
					
				<button className={styles.btn}  onClick={() => nav('/reg')}>
					Didn’t have any account? <span>Sign Up here</span>
				</button>
			</form>
		</Layout>
	)
}

export default Auth
