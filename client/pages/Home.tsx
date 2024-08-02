import { generateCompliment } from '../components/Generator'
import newCompliment from './Compliment'

export default function Home() {
  return (
    <>
      {' '}
      <main>
        <div className="complimentBox"></div>

        <button className="complimentBox">{generateCompliment()}</button>
        <button className="genAgain ">Again, Again</button>
      </main>
    </>
  )
}
