import React from 'react'
import { useRecoilValue, atom } from 'recoil'
import { DebugObserver } from '../../App'

const useA = () => {
  const aState = atom({
    key: 'aState',
    default: 'astate'
  })
  const a = useRecoilValue(aState)
  return a
}


const Index = () => {

  const a = useA()

  // expected: astate
  console.log(a)

  /** 
   * DebugObserver expected:
   * bState ValueLoadable {state: 'hasValue', contents: 'bstate'}
   * aState ValueLoadable {state: 'hasValue', contents: 'astate'}
   * */
  return (
    <>
      <DebugObserver />
      <a href='/test'>リンク</a>
    </>
  )
}

export default Index

