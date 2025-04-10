import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AdminDashboard from './pages/AdminDashboard'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router';
import UserDash from './pages/admin/UserDash'
import AuthProvider from './utils/contexts/AuthProvider'
import DashOverview from './pages/admin/DashOverview'
import Login from './pages/auth/Login'

const router = createBrowserRouter([
  {
    path: '/ecocycle/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <Login />
      }
    ]
  }, {
    path: '/ecocycle/admin/',
    element: <AdminDashboard />,
    children: [
      {
        path: 'overview',
        element: <DashOverview />
      },
      {
        path: 'users',
        element: <UserDash />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
