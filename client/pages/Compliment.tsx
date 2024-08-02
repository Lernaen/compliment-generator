import { generateCompliment } from '../components/Generator'
import { useState } from 'react'

export default function newCompliment() {
  const [compliment, setCompliment] = useState('')

  const handleClick = () => {
    setCompliment(generateCompliment())
  }

  return (
    <div>
      <p>{compliment}</p>
      <button onClick={handleClick}>Generate Compliment</button>
    </div>
  )
}
