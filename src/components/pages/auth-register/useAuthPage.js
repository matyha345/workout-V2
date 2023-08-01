import { useMutation } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import { useForm } from 'react-hook-form'
import AuthService from '../../../services/auth.service'

export const useAuthPage = () => {
    
	const [type, setType] = useState('login')

	const nav = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isLoading } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(email, password, type),
		{
			onSuccess: () => {
				setIsAuth(true)
				reset()
			}
		}
	)

    const onSubmit = data => {
        mutate(data)
    }

	const { isAuth, setIsAuth } = useAuth()

	useEffect(() => {
		if (isAuth) {
			nav('/')
		}
	}, [isAuth])


	return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit,
            nav,
			isAuth
		}),
		[errors, isLoading]
	)
}
