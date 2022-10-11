import React from 'react'
import { useRecoilState, atom } from 'recoil'
import { DebugObserver } from '../../App'

// features配下に閉じている
export const useA = () => {
  const aState = atom({
    key: 'aState',
    default: 'astate'
  })
  const [a, setA] = useRecoilState(aState)
  return {
    a,
    setA
  }
}


const Index = () => {
  const { a } = useA()

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

