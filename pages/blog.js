// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
function Blog({
    posts
}) {
    return ( <
        ul > {
            posts.map((post) => ( <
                li > {
                    post.title
                } {
                    post.summary
                } <
                /li>
            ))
        } <
        /ul>
    )
}

// This function gets called at build time
export async function getStaticProps() {

    const posts = [{
            title: "a",
            summary: "あ"
        },
        {
            title: "b",
            summary: "びー"
        },
        {
            title: "c",
            summary: "しー"
        }
    ]
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}

export default Blog