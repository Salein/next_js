import Post from '@/app/components/Post'

export async function generateMetadata({params, searchParams}) {
    const post = await fetchData(params.id)
    return {
        title: post.title + ` - Статья на сайте`,
        description: post.body
    }
}

async function fetchData(id) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    const result = await response.json()
    return result
}

const Posts = async ({params: {id}}) => {
    const post = await fetchData(id)

    return (
        <div className='post'>
            <Post post={post} />
            
        </div>
    );
};

export default Posts;