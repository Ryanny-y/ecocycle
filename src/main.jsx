import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';
import AdminDashboard from './pages/AdminDashboard'
import './index.css'
import App from './App'
import RecordDash from './pages/admin/RecordDash'
import AuthProvider from './utils/contexts/AuthProvider'
import DashOverview from './pages/admin/DashOverview'
import Login from './pages/auth/Login'
import ProductsDash from './pages/admin/ProductsDash'
import RecyclingLogDash from './pages/admin/RecyclingLogDash'
import ExchangeDash from './pages/admin/ExchangeDash'

const router = createBrowserRouter([
  {
    path: '/ecocycle/',
    element: <App />,
  }, {
    path: '/ecocycle/admin_login',
    element: <Login />
  }, {
    path: '/ecocycle/admin/',
    element: <AdminDashboard />,
    children: [
      {
        path: 'overview',
        element: <DashOverview />
      },
      {
        path: 'ecohub/records',
        element: <RecordDash />
      }
      // {
      //   path: 'recyclelog',
      //   element: <RecyclingLogDash />
      // },
      // {
      //   path: 'exchange',
      //   element: <ExchangeDash />
      // },
      // {
      //   path: 'products',
      //   element: <ProductsDash />
      // }
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
