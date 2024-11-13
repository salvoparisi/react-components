export default function PostCard(props) {
    const placeholderImage = "/600x400.svg";

    return (
        <div className="card">
            <div className="img">
                <img
                    src={props.image || placeholderImage}
                    onError={(e) => {
                        e.target.src = placeholderImage;
                    }}
                />
            </div>
            <div className="cardText">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                {props.tags.map((tag, index) => (
                    <button key={index} className={tag}>{tag}</button>
                ))}
            </div>
        </div>
    );
}
