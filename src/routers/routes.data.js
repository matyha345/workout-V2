import Auth from '../components/pages/auth-register/auth/Auth'
import Home from '../components/pages/home/Home'

import Profile from '../components/pages/profile/Profile'
import Register from '../components/pages/auth-register/register/Register'

import Starting from '../components/pages/start/Starting'
import NewExercise from '../components/pages/new-exercise/NewExercise'
import NewWorkouts from '../components/pages/new-workouts/NewWorkouts'

import Workout from '../components/pages/workout/Workout'
import ListWorkouts from '../components/pages/list-workouts/ListWorkouts'
import ExerciseLog from '../components/pages/exercise-log/ExerciseLog'
import Jogging from '../components/pages/diet-plan/jogging/Jogging'


export const routes = [
	{
		path: '/start',
		component: Starting,
		isAuth: false
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/reg',
		component: Register,
		isAuth: false
	},
	//======================
	{
		path: '/home',
		component: Home,
		isAuth: true
	},
	//======================
	{
		path: '/workout/:id',
		component: Workout,
		isAuth: true
	},
	{
		path: '/workouts',
		component: ListWorkouts,
		isAuth: true
	},
	
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		isAuth: true
	},
	{
		path: '/new-workouts',
		component: NewWorkouts,
		isAuth: true
	},
	{
		path: '/exercise/:id',
		component: ExerciseLog,
		isAuth: true
	},
	//=========DIET-PLAN==========
	{
		path: '/run-page',
		component: Jogging,
		isAuth: true
	}
]
