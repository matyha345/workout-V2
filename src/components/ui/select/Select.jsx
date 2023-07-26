import styles from './Select.module.scss'

const Select = ({ optionData, register, name, options, error, ...rest }) => {
	return (
		<div className={styles.selectBox}>
			<select {...register(name, options)} {...rest} className={styles.select}>
				{optionData.map((data, index) => (
					<option key={`_sel_${index}`} value={data.value}>
						{data.name}
					</option>
				))}
			</select>
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

export default Select
