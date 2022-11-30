import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RecoilRoot>
        <HashRouter>
          <Routes>
            <Route path='/' element={<p>asdfsdf</p>} />
          </Routes>
        </HashRouter>
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>
)

