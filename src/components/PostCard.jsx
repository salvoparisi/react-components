export default function PostCard(props) {
    console.log(props);


    return (
        <div className="card">
            <div className="img">
                600x400
            </div>
            <div className="cardText">
                <h3>Titolo del Post</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere ducimus animi cupiditate rerum magnam est iste incidunt porro illo fugit accusantium sit provident, rem cumque consectetur, explicabo, velit quod. Repellat ipsa, debitis animi et ut numquam alias sapiente modi aliquid id beatae quidem, fugiat ullam, velit minima veritatis ex.</p>
                <button>Leggi di piu</button>
            </div>
        </div>
    )
}