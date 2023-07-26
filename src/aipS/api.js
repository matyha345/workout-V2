import axios from 'axios'
import Cookies from 'js-cookie'
import { TOKEN } from '../app.constants'

const API_URl = `${import.meta.env.VITE_SERVER_URL}/api`

export const $axios = axios.create({
	baseURL: API_URl,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get(TOKEN)
			? `Bearer ${Cookies.get(TOKEN)}`
			: 'AA Errors'
	}
})
