import Button from "../Button/Button";
export default function Card(post) {
    return (
        <div class="card">
            <img src={post.image} alt="Image" className="card-img" />
            <div class="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.image}</p>
                <p className="card-tag">{post.tags}</p>
            </div>
            <div class="card-footer">
                <Button />
            </div>
        </div>
    )
}