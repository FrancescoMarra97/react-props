import Button from "../Button/Button";
export default function Card({ post }) {

    return (
        <div className="card">
            <img src={post.image} alt="Image" className="card-img" />
            <div class="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <p className="card-tag">[{post.tags.join(", ")}] </p>
            </div>
            <div class="card-footer">
                <Button />
            </div>
        </div>
    )
}