import NewCompliment from './Compliment'

export default function Home() {
  return (
    <>
      {' '}
      <main>
        <div className="complimentBox"></div>

        <div className="complimentBox">{<NewCompliment />}</div>
      </main>
    </>
  )
}
