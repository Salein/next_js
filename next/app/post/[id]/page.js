import Post from '@/app/components/Post'

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