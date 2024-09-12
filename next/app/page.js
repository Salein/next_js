import Link from "next/link"

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const result = await response.json()
  return result
}

export default async function Home() {
  const posts = await fetchData()

  return (
    <div>
    <h1>Main Page</h1>
    {posts.map(el => (
      <div key={el.id} className="post">
        <h2>{el.title}</h2>
        <p>{el.body}</p>
        <Link href={`/post/` + el.id}>Details...</Link>
      </div>
    ))}
    </div>
  );
}
