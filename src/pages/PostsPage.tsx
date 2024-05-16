import { useGetPostsQuery } from '../store/apis/postsApi';

function PostsPage(): JSX.Element {
    const { data } = useGetPostsQuery();

    return (
        <div className="m-4">
            {data?.map((post) => (
                <article
                    className="my-4"
                    key={post.id}>
                    <h2 className="font-bold text-2xl">
                        {post.title.slice(0, 16)}...
                    </h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </div>
    );
}

export default PostsPage;
