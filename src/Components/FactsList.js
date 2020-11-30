import React, { useState, useContext } from "react"
import { FactsContext } from "./FactsContext"
import { Text, Box, Divider, Button, Link } from "@chakra-ui/react"
import { fetchFact } from "../Utils/fetchFact"


const FactsList = () => {
  const [facts, setfacts] = useContext(FactsContext)
  const [fetching, setfetching] = useState(false)

  const addFactToTheList = async () => {
    setfetching(true)
    const newFact = await fetchFact()

    setfacts(previousFacts =>
      [...previousFacts, newFact]
    )
    setfetching(false)

  }

  return (
    <>
      {facts.map(fact => (
        <Box key={fact.id}>
          <Text style={{ fontWeight: 'bold' }}>
            {fact.text}
          </Text>
          <Text>
            Source: <Link href={fact.source_url} isExternal>{fact.source}</Link>
          </Text>
          <Divider />
        </Box>
      ))}
      <Button
        onClick={() => addFactToTheList()}
        isLoading={facts.length === 0 ? true : fetching}
        loadingText="fetching fact..."
      >Get new Fact</Button>
    </>
  )
}

export default FactsList