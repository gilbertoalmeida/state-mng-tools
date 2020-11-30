import React, { useState, useEffect, createContext } from "react"
import { fetchFact } from "../Utils/fetchFact"

export const FactsContext = createContext()

export const FactsProvider = (props) => {
  const [facts, setfacts] = useState([])

  useEffect(() => {
    const getFirstFact = async () => {
      const fact = await fetchFact()

      setfacts([fact])
    }
    getFirstFact()
  }, [])

  return (
    <FactsContext.Provider value={[facts, setfacts]}>
      {props.children}
    </FactsContext.Provider>
  )
}