import { useNavigate } from 'react-router-dom'

import Layout from '../../../layout/Layout'
import { joggingData } from './data/jogging-data'

import ButtonHome from '../../../ui/button/button-home/ButtonHome'
import DietPlan from '../DietPlan'

const Jogging = () => {
	const nav = useNavigate()

	return (
		<Layout customStyle={{ height: 'auto' }} bgImage={'/bgRun.jpg'}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<ButtonHome bgLink={() => nav('/Home')} />
			</div>
			<DietPlan
				titleText={
					'Готовы начать бегать и преодолевать себя? Давайте приступим!'
				}
				planTitle={'План тренировок для новичков на первое время'}
				dataMap={joggingData}
				bottomText={
					'Помните, что успех приходит с постоянством и настойчивостью. Продолжайте тренироваться, придерживайтесь плана, и результаты обязательно придут! Удачи в вашем путешествии к беговым достижениям!'
				}
			/>
		</Layout>
	)
}

export default Jogging
