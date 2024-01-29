import { useState } from 'react'
// import { useBoundStore } from '../store'

const useLocalStorage = () => {
  // Get Items form localStorage when component mount
  // const playerName = useBoundStore((state) => state.playerName)
  // const gameComplexity = useBoundStore((state) => state.gameComplexity)
  // const score = useBoundStore((state) => state.score)

  const localStorageValues: (string | null)[] = []
  const [value, setValue] = useState(localStorageValues)

  if (localStorage.length !== 0) {
    const keys = Object.keys(localStorage)

    keys.map((key) => {
      localStorageValues.push(localStorage.getItem(key))
    })
  }

  const updateLocalStorageValue = (storageKey: string, storageValue: {}) => {
    const newStorageValue = [...value, JSON.stringify(storageValue)]
    setValue(newStorageValue)

    localStorage.setItem(storageKey, JSON.stringify(storageValue))
    console.log('storage hook')
  }

  return [value, updateLocalStorageValue] as const

  // const value = {
  //   playerName,
  //   gameComplexity,
  //   score,
  // }

  // if (localStorage.length === 0) {
  //   return 'empty'
  // } else {
  //   const localStorageValue = JSON.stringify(value)
  //   localStorage.setItem(playerName, localStorageValue)
  //   return value
  // }
}

export default useLocalStorage
