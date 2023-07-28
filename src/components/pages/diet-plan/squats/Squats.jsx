import { useNavigate } from 'react-router-dom'
import Layout from '../../../layout/Layout'
import styles from './Squats.module.scss'
import { squatsData } from './data/squats-data'
import ButtonHome from '../../../ui/button/button-home/ButtonHome'
import Accordion from '../../../ui/accordion/Accordion'
import { accordionData } from './data/accordion-data'
import DietPlan from '../DietPlan'

const Squats = () => {
	const nav = useNavigate()

	return (
		<Layout customStyle={{ height: 'auto' }} bgImage={'/bgList2.jpeg'}>
			<div className={styles.bgLink}>
				<ButtonHome bgLink={() => nav('/Home')} />
			</div>

			<div className={styles.wrapper}>
				<DietPlan dataMap={squatsData} />

				<div className={styles.accordion}>
					<Accordion sections={accordionData} />
				</div>
			</div>
		</Layout>
	)
}
export default Squats
