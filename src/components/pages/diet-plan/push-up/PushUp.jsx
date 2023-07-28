import { useNavigate } from 'react-router-dom'
import Layout from '../../../layout/Layout'
import DietPlan from '../DietPlan'

import { pushUpData } from './data/push-up-data'
import ButtonHome from '../../../ui/button/button-home/ButtonHome'

const PushUp = () => {
	const nav = useNavigate()

	return (
		<Layout bgImage={'/bgPushUp.jpg'} customStyle={{ height: 'auto' }}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<ButtonHome bgLink={() => nav('/Home')} />
			</div>
			<div>
				<DietPlan
					planTitle={'План тренировок для новичков на первое время'}
					bottomText={
						'И помните, вы — главный герой своей истории. Каждое отжимание — это шаг к вашим целям и мечтам. Вы — настоящий "Push-Up Warrior", готовый преодолевать любые преграды и добиваться успеха. Держитесь сильно, творите и двигайтесь вперед, ведь лучшие результаты ждут вас на вершине успеха!'
					}
					dataMap={pushUpData}
				/>
			</div>
		</Layout>
	)
}

export default PushUp
