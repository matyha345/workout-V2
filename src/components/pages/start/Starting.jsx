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
					<h2>Добро пожаловать</h2>
					<h1>WORKOUT APP</h1>
					<p>Достигните своих целей с нами</p>
					<Button clickHandler={() => nav('/auth')}>Начнем</Button>
				</div>
			</section>
		</Layout>
	)
}
export default Starting
