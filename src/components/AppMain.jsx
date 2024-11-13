import posts from "../data/post.js"
import Card from "../components/Card/Card.jsx"

export default function AppMain() {

    return (
        <main>
            <div className="container">
                {/* <Card /> */}
                {posts.map((post, index) => <Card key={index} post={post} />)}
            </div>
        </main>
    )
}