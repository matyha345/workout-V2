import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import Router from './routers/Router.jsx'
import {
	QueryClient,
	QueryClientProvider,
	useQuery
} from '@tanstack/react-query'
import AuthProvider from './providers/AuthProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
