import { useNavigate } from 'react-router-dom'
import styles from './Jogging.module.scss'
import Layout from '../../../layout/Layout'
import { joggingData } from './data/jogging-data'

import ButtonHome from '../../../ui/button/button-home/ButtonHome'

const Jogging = () => {
	const nav = useNavigate()

	const stylesDiet = { height: 'auto' }

	return (
		<Layout customStyle={stylesDiet} bgImage={'/bgRun.jpg'}>
			<div className={styles.bgLink}>
				<ButtonHome bgLink={() => nav('/Home')} />
			</div>

			<section className={styles.wrapper}>
				<div className={styles.content}>
					<h2 className={styles.titleText}>
						Готовы начать бегать и преодолевать себя? Давайте приступим!
					</h2>

					<div className={styles.plan}>
						<h1 className={styles.planTitle}>
							План тренировок для новичков на первую неделю
						</h1>
						{joggingData.map((item, index) => (
							<div className={styles.cardPlan} key={`__key${index}`}>
								<div className={styles.blokImg}>
									<img width={83} height={82} src={item.img} alt='' />
								</div>
								<div className={styles.text}>
									<h3 className={styles.blokTitle}>{item.title}</h3>
									<p className={styles.blokText}>{item.text}</p>
								</div>
							</div>
						))}

						<p className={styles.bottomText}>
							Помните, что успех приходит с постоянством и настойчивостью.
							Продолжайте тренироваться, придерживайтесь плана, и результаты
							обязательно придут! Удачи в вашем путешествии к беговым
							достижениям!
						</p>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Jogging
