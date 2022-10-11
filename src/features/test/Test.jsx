import React, { useEffect } from 'react'
import { useRecoilState, atom } from 'recoil'
import { DebugObserver } from '../../App'

export const bState = atom({
  key: 'bState',
  default: 'bstate'
})

const Test = () => {
  const [b, setB] = useRecoilState(bState)

  useEffect(() => {
    setTimeout(() => {
      setB('BSTATE')
    }, 2000)
  }, [])

  // expected: 
  // bstate
  // BSTATE
  console.log(b)

  /** 
   * DebugObserver expected:
   * bState ValueLoadable {state: 'hasValue', contents: 'bstate'}
   * bState ValueLoadable {state: 'hasValue', contents: 'bstate'}
   * */
  return (
    <>
      <DebugObserver />
      <a href='/'>ホーム</a>
    </>
  )
}

export default Test


