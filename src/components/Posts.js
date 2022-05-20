export default function Posts() {
  const posts = [
    {
      id: 1,
      text: "Hello World how is it going?",
      timestamp: "a minute ago",
      author: {
        username: "susan",
      },
    },
    {
      id: 2,
      text: "This sucks",
      timestamp: "two hours ago",
      author: {
        username: "john",
      },
    },
  ];

  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <p key={post.id}>
              <b>{post.author.username}</b> &mdash; {post.timestamp}
              <br />
              {post.text}
              <br />
            </p>
          );
        })
      ) : (
        <p>There are no posts</p>
      )}
    </>
  );
}
