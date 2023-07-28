	import Layout from '../../layout/Layout'
import styles from './NewExercise.module.scss'

import NewExerciseForm from './NewExerciseInner/NewExerciseForm'
import Information from '../../layout/information/Information'
import { useNavigate } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
const NewExercise = () => {

	const nav = useNavigate()
	return (
		<Layout bgImage={'/startBG.jpg'} heading={<Information />}>
			
			<button onClick={() => nav('/new-workouts')} className={styles.bkLink}>
				<BiArrowBack fontSize={30} />
			</button>

			<div className={styles.wrapper}>
				<div className={styles.content}>
					<NewExerciseForm />
				</div>
			</div>
		</Layout>
	)
}

export default NewExercise
