import { $axios } from '../../aipS/api'
import { EXERCISES } from './exercise.service'

const LOG = `${EXERCISES}/log`

class ExerciseLogService {
	async getById(id) {
		return $axios.get(`${LOG}/${id}`)
	}
	//name, times, iconPath
	async create(exerciseIds) {
		return $axios.post(`${LOG}/${exerciseIds}`)
	}
	//"weight": 10,
	// "repeat": 20,
	// "isCompleted": false,
	async updateTime(timeId, body) {
		return $axios.put(`${LOG}/time/${timeId}`, body)
	}
	// isCompleted
	async complete(id, body) {
		return $axios.patch(`${LOG}/complete/${id}`, body)
	}
}
export default new ExerciseLogService()
