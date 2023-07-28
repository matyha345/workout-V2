import { useNavigate } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import styles from './ButtonHome.module.scss'

const ButtonHome = ({ bgLink = null }) => {
	const nav = useNavigate()
	return (
		<button className={styles.bgLink} onClick={bgLink}>
			<AiOutlineHome style={{marginRight: '10'}} /> Go to Home
		</button>
	)
}
export default ButtonHome
