import NewCompliment from './Compliment'

export default function Home() {
  return (
    <>
      {' '}
      <main>
        <div className="complimentBox"></div>

        <div className="complimentBox">{<NewCompliment />}</div>
        <button className="genAgain ">Again, Again</button>
      </main>
    </>
  )
}
