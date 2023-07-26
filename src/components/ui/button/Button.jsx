import styles from './Button.module.scss'

const Button = ({ children, clickHandler = null }) => {
	return (
		<button onClick={clickHandler} className={styles.btn}>
			{children}
		</button>
	)
}

export default Button
