// import { adjectives } from './Compliments'
import { adjectives } from '../Compliments'
import { nouns } from '../Compliments'
// import { useState } from 'react'

export function generateCompliment() {
  //Add function to get random number to use in the compliments array
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)]

  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]
  return `You are a ${randomAdjective} ${randomNoun}`
}

//Return HTML element with selected compliment
