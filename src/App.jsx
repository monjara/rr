import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { useRecoilSnapshot, RecoilRoot } from 'recoil'

import Index from './features/index/Index'
import Test from './features/test/Test'

export const DebugObserver = () => {
  const snapshot = useRecoilSnapshot()
  useEffect(() => {
    console.debug('The following atoms were allocated:')
    for (const node of snapshot.getNodes_UNSTABLE()) {
      console.log(node.key, snapshot.getLoadable(node))
    }
  }, [snapshot])

  return null
}

const RouteA = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </RecoilRoot>
  )
}

export const RouteB = () => {
  return (
    <RecoilRoot>
      <DebugObserver />
      <Routes>
        <Route path='/' element={<Test />} />
      </Routes>
    </RecoilRoot>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/*' element={<RouteA />} />
      <Route path='/test/*' element={<RouteB />} />
    </Routes>
  )
}

export default App

