import posts from "../data/data.js"
import Card from "../components/Card/Card.jsx"

export default function AppMain() {

    return (
        <main>
            <div className="container">
                {/* <Card /> */}
                {posts.map((data, id) => <Card key={id} post={data} />)}
            </div>
        </main>
    )
}