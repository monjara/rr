import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import RootRoutes from './features/root/RootRoutes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootRoutes />} />
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
)
