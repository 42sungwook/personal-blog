import { type Post, allPosts } from 'contentlayer/generated'

export default async function Home() {
  return (
    <div>
      <ul>
        {allPosts.map((post: Post) => (
          <li key={post.title}></li>
        ))}
      </ul>
    </div>
  )
}
