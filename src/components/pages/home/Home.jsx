import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Information from '../../layout/information/Information'
import Button from '../../ui/button/Button'


import SwiperElement from '../../ui/swiper/SwiperElement'
import { categoriesDataSlider } from '../../ui/swiper/swiper-data/categories.data'

import { planDataSlider } from '../../ui/swiper/swiper-data/plan.data'

import styles from './Home.module.scss'
import LogoutHandler from '../../ui/logout-handler/LogoutHandler'

const Home = () => {

	const nav = useNavigate()

	return (
		<Layout  heading={<Information />}>
			<section className={styles.wrapper}>
				<main className={styles.plan}>
					<div className={styles.label}>
						<h2 className={styles.title}>Today Workout Plan</h2>
						<div className={styles.time}>6am-8am</div>
					</div>
					<div className={styles.planInner}>
						<SwiperElement
							dataMap={categoriesDataSlider}
							keyIndex={`_categor_`}
							slidesPerViewCol={3.5}
							spaceBetweenCol={22}
						/>
					</div>

					<div className={styles.categories}>
						<p className={styles.titleCat}>Categories</p>
						<SwiperElement
							dataMap={planDataSlider}
							keyIndex={`_plan`}
							slidesPerViewCol={4.5}
							spaceBetweenCol={9}
						/>
					</div>
					<div className={styles.btn} onClick={() => nav('/new-workout')}>
						<Button>Ne Wokr</Button>
					</div>
				</main>
			</section>
		</Layout>
	)
}
export default Home
