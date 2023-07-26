import { $axios } from '../aipS/api'

const USERS = '/users'

class UserService {
	async getProfile() {
		return $axios.get(`${USERS}/profile`)
	}
}
export default new UserService()
