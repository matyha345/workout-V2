import styles from './SwiperElement.module.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import { categoriesDataSlider } from './swiper-data/categories.data'
import { Link } from 'react-router-dom'

const SwiperElement = ({dataMap, keyIndex, spaceBetweenCol, slidesPerViewCol}) => {
	return (
		<Swiper
			spaceBetween={spaceBetweenCol}
			slidesPerView={slidesPerViewCol}
			// onSlideChange={() => console.log('slide change')}
			// onSwiper={swiper => console.log(swiper)}
		>
			{dataMap.map((card, index) => (
				<SwiperSlide key={`${keyIndex}_${index}`}>
					<div className={styles.wrapper}>
						<div className={styles.card}>
							<Link to={card.link} className={styles.cardInner}>
								<img src={card.img} alt='images card' />
								<div className={styles.text}>{card.name}</div>
							</Link>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
export default SwiperElement
