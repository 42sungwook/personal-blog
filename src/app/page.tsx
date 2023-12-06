import { getSortedPostsData } from 'lib/posts'

export default async function Home() {
  const allPostsData = await getSortedPostsData()

  return (
    <div>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </div>
  )
}
