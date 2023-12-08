import { getSortedPostsData } from 'lib/posts'

export default function LifePage({ params }: { params: { slug: string } }) {
  const allPostsData = getSortedPostsData()

  return <div>My Post: {params.slug}</div>
}

