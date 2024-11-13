import js from "@eslint/js";

export default function PostCard(props) {
    console.log(props);

    return (
        <div className="card">
            <div className="img">
                <img src={props.image} alt="" />
            </div>
            <div className="cardText">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                {props.tags.map((tag, index) => {
                    return <button key={index} className={tag}>{tag}</button>;
                })}
            </div>
        </div>
    )
}