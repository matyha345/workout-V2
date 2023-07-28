import { useNavigate } from 'react-router-dom'
import Layout from '../../../layout/Layout'
import ButtonHome from '../../../ui/button/button-home/ButtonHome'

import DietPlan from '../DietPlan'
import { benchData } from './data/bench-data'

const BenchPress = () => {
	const nav = useNavigate()

	return (
		<Layout bgImage={'./bgBenchpress.jpg'} customStyle={{ height: 'auto' }}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<ButtonHome bgLink={() => nav('/Home')} />
			</div>
			<div style={{ backdropFilter: 'blur(10px)' }}>
				<DietPlan
					fontStyles={{ fontSize: '14px' }}
					titleText={'Формат тренировок: Жим лежа: Покорение Олимпа!'}
					dataMap={benchData}
					bottomText={
						'Вам предстоит настоящее путешествие на Олимп и стать настоящим героем в мире жима лежа! Вперед, к покорению вершин, к вдохновению и к собственному преодолению. Всегда помните, что вы - настоящий чемпион!'
					}
				/>
			</div>
		</Layout>
	)
}
export default BenchPress
