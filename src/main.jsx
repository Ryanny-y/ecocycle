import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';
import AdminDashboard from './pages/AdminDashboard'
import './index.css'
import App from './App'

// ADMIN
import Login from './pages/auth/Login'
import DashOverview from './pages/admin/DashOverview'
import CreateRecordDash from './pages/admin/ecohub/CreateRecordDash';
import EarnPoints from './pages/admin/ecohub/EarnPoints';
import RecordDash from './pages/admin/ecohub/RecordDash'
import EcoSwap from './pages/admin/EcoSwap';
import GreenPages from './pages/admin/GreenPages';
import ProductsDash from './pages/admin/ProductsDash'
import RecordHistory from './pages/admin/history/RecordHistory'
import SwapHistory from './pages/admin/history/SwapHistory'

// MAIN PAGE
import MainEcohub from './pages/main/MainEcohub';
import MainEcoswap from './pages/main/MainEcoswap';
import Landing from './pages/main/Landing';

// PROVIDERS
import AuthProvider from './utils/contexts/AuthProvider'
import ProductProvider from './utils/contexts/ProductProvider';
import NotFound404 from './pages/NotFound404';
import Materials from './pages/admin/Materials';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Landing />
      },
      {
        path: 'ecohub',
        element: <MainEcohub />
      },
      {
        path: 'ecoswap',
        element: <MainEcoswap />
      },
    ],
  }, {
    path: '/admin_login',
    element: <Login />
  }, {
    path: '/admin/',
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
        path: 'ecohub/earn_points',
        element: <EarnPoints />
      },
      {
        path: 'ecoswap',
        element: <EcoSwap />
      },
      {
        path: 'green_pages',
        element: <GreenPages />
      },
      {
        path: 'history/records',
        element: <RecordHistory />
      },
      {
        path: 'history/swap',
        element: <SwapHistory />
      },
      {
        path: 'products',
        element: <ProductsDash />
      },
      {
        path: 'materials',
        element: <Materials />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound404 />
  }
])

createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <ProductProvider>
        <RouterProvider router={router}/>
      </ProductProvider>
    </AuthProvider>
  </>,
)
