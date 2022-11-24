import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<p>asdf</p>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)

