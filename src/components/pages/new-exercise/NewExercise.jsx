	import Layout from '../../layout/Layout'
import styles from './NewExercise.module.scss'

import NewExerciseForm from './NewExerciseInner/NewExerciseForm'
import Information from '../../layout/information/Information'

const NewExercise = () => {
	return (
		<Layout bgImage={'/startBG.jpg'} heading={<Information />}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<NewExerciseForm />
				</div>
			</div>
		</Layout>
	)
}

export default NewExercise
