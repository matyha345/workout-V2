import { useNavigate } from 'react-router-dom'
import Layout from '../../../layout/Layout'
import DietPlan from '../DietPlan'
import ButtonHome from '../../../ui/button/button-home/ButtonHome'
import { yogaData } from './data/yoga-data'

const Yoga = () => {
	const nav = useNavigate()
	return (
		<Layout bgImage={'/bgYoga.jpg'} customStyle={{ height: 'auto' }}>
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
					titleText={'Путь Йоги: Объединение Тела и Духа'}
					bottomText={
						'На этом пути йоги вы найдете равновесие и единство тела и духа. Практикуйте с любовью и вниманием к своему телу, принимая каждую асану с благодарностью. Вы становитесь одной с йогой, как лист, который плывет на волне вселенской гармонии. Держитесь на пути йоги, и пусть она наполнит вас силой, миром и радостью!'
					}
					dataMap={yogaData}
                    bgStyles={{color: '#3a7397'}}
				/>
			</div>
		</Layout>
	)
}

export default Yoga
