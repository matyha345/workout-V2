const FormDataSelect = () => {
	const numberData = [
		{
			value: '',
			name: 'Выберите число подходов'
		}
	]
	for (let i = 1; i <= 20; i++) {
		numberData.push({
			value: i.toString(),
			name: i.toString()
		})
	}

	// Данные для селекта названия упражнения

	const stringData = [
		{
			value: '',
			name: 'Выберите упражнения'
		},
		{
			value: 'спина',
			name: 'Спина'
		},
		{
			value: 'Жим',
			name: 'Жим'
		},
		{
			value: 'Бицепс',
			name: 'Бицепс'
		},
		{
			value: 'Ноги',
			name: 'Ноги'
		},
		{
			value: 'хит',
			name: 'Хит'
		},
		{
			value: 'ноги',
			name: 'Ноги'
		}
	]

	return { numberData, stringData }
}

export default FormDataSelect
