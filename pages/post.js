export const getStaticProps = async () => {
    const res = await fetch(`https://hackmd.io/api/@ntuf/overview`);
    // const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();

    return {
        props: { data },
    };
};

const Post = ({ data }) => {
    console.log(data);
    return (
        <div>
            <h1>Posts</h1>
            {data.notes.map((post) => (
                <div key={post.id}>
                    <a>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Post;
