import FancyboxDetails from '../../ui/Fancybox/Fancybox'

import styles from './DietPlan.module.scss'

const DietPlan = ({
	titleText,
	planTitle,
	bottomText,
	dataMap,
	bgStyles,
	fontStyles
}) => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.content}>
				{titleText && <h2 className={styles.titleText}>{titleText}</h2>}

				<div className={styles.plan}>
					{planTitle && <h1 className={styles.planTitle}>{planTitle}</h1>}
					{dataMap.map((item, index) => (
						<div className={styles.cardPlan} key={`__key${index}`}>
							<FancyboxDetails
								options={{
									Carousel: {
										infinite: false
									}
								}}
							>
								<div
									className={styles.blokImg}
									data-fancybox='gallery'
									href={item.img}
								>
									{item.img && (
										<img
											draggable={false}
											width={100}
											height={98}
											src={item.img}
											alt='images'
										/>
									)}
								</div>
							</FancyboxDetails>
							<div className={styles.text}>
								<h3 style={fontStyles} className={styles.blokTitle}>
									{item.title}
								</h3>
								<p style={bgStyles} className={styles.blokText}>
									{item.text}
								</p>
							</div>
						</div>
					))}
					{bottomText && <p className={styles.bottomText}>{bottomText}</p>}
				</div>
			</div>
		</section>
	)
}

export default DietPlan
