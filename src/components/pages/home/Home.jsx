import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Information from '../../layout/information/Information'
import Button from '../../ui/button/Button'


import SwiperElement from '../../ui/swiper/SwiperElement'
import { categoriesDataSlider } from '../../ui/swiper/swiper-data/categories.data'
import styles from './Home.module.scss'
import Statistics from '../profile/statistics/Statistics'


const Home = () => {

	const nav = useNavigate()

	return (
		<Layout  heading={<Information />}>
			<section className={styles.wrapper}>
				<main className={styles.plan}>
					<div className={styles.label}>
						<h2 className={styles.title}>План тренировок</h2>
						<div className={styles.time}>6am-8am</div>
					</div>
					<div className={styles.planInner}>
						<SwiperElement
							dataMap={categoriesDataSlider}
							keyIndex={`_categor_`}
							slidesPerViewCol={2.5}
							spaceBetweenCol={22}
						/>
					</div>

					<div className={styles.categories}>
						<p className={styles.titleCat}>Статистика</p>
					<Statistics />
						{/* <SwiperElement
							dataMap={planDataSlider}
							keyIndex={`_plan`}
							slidesPerViewCol={2.5}
							spaceBetweenCol={9}
						/> */}
					</div>
					<div className={styles.btn} onClick={() => nav('/new-workouts')}>
						<Button>Новая тренировка</Button>
					</div>
				</main>
			</section>
		</Layout>
	)
}
export default Home
