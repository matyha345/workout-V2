import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from './Starting.module.scss'

const Starting = () => {
	const nav = useNavigate()
    
	return (
		<Layout bgImage={'/startBG.jpg'}>
			<section className={styles.wrapper}>
				<div className={styles.content}>
					<h2>Welcome to</h2>
					<h1>BODY GOALS WORKOUT</h1>
					<p>Achieve your body goals with us</p>
					<Button clickHandler={() => nav('/auth')}>Get Started</Button>
				</div>
			</section>
		</Layout>
	)
}
export default Starting
