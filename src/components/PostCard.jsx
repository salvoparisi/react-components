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
                <button className={props.tags[0]}>{props.tags[0]}</button>
                <button className={props.tags[1]}>{props.tags[1]}</button>
            </div>
        </div>
    )
}