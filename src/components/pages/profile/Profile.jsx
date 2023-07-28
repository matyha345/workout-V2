import Layout from '../../layout/Layout'
import Information from '../../layout/information/Information'
import LogoutHandler from '../../ui/logout-handler/LogoutHandler'
import styles from './Profile.module.scss'
import Statistics from './statistics/Statistics'
import { useProfile } from './useProfile'

const Profile = () => {
	const { data, isLoading } = useProfile()
	return (
		<Layout bgImage={''} logout={<LogoutHandler />}>
			<div className={styles.wrapper}>
				<div className={styles.info}>
					<Information />
				</div>
				<div className={styles.content}>
					<div className={styles.result}>
						{data?.images?.slice().reverse().map((image) => (
							<div className={styles.resultInner} key={image}>
								<div className={styles.resultItem}>
									{/* {index === 1 ? 'Women' : 'Men'} */}
								</div>
								<img
									src={image}
									alt='image After, Before'
									draggable={false}
								/>
							</div>
						))}
					</div>
					<div className={styles.statistics}>
						<Statistics />
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default Profile
