import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';
import AdminDashboard from './pages/AdminDashboard'
import './index.css'
import App from './App'
import RecordDash from './pages/admin/ecohub/RecordDash'
import AuthProvider from './utils/contexts/AuthProvider'
import DashOverview from './pages/admin/DashOverview'
import Login from './pages/auth/Login'
import ProductsDash from './pages/admin/ProductsDash'
import RecordHistory from './pages/admin/history/RecordHistory'
import SwapHistory from './pages/admin/history/SwapHistory'
import CreateRecordDash from './pages/admin/ecohub/CreateRecordDash';
import UpdateRecordDash from './pages/admin/ecohub/UpdateRecordDash';

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
      },
      {
        path: 'ecohub/create_record',
        element: <CreateRecordDash />
      },
      {
        path: 'ecohub/update_record',
        element: <UpdateRecordDash />
      },
      // {
      //   path: 'recyclelog',
      //   element: <RecordHistory />
      // },
      // {
      //   path: 'exchange',
      //   element: <SwapHistory />
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
