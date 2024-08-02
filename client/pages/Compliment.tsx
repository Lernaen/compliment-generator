import { useState } from 'react'

import { adjectives } from '../compliments'
import { nouns } from '../compliments'
// import { useState } from 'react'

export function generateCompliment() {
  //Add function to get random number to use in the compliments array
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)]

  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]
  return `You are as ${randomAdjective} as ${randomNoun}`
}

export default function NewCompliment() {
  const [compliment, setCompliment] = useState('')

  const handleClick = () => {
    setCompliment(generateCompliment())
  }

  return (
    <div>
      <p className="p1">{compliment}</p>
      <button className="genAgain" onClick={handleClick}>
        <p className="p2">Generate Compliment!</p>
      </button>
    </div>
  )
}
