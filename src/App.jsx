import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
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
    <ChakraProvider>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>
)
