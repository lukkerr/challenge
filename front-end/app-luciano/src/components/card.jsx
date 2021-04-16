const Card = (props) =>
    <div className="card">
        <img src={process.env.PUBLIC_URL + props.data.image} alt="" />
        <p className="produto-name">{props.data.name}</p>
        <p>R$ {props.data.price.toFixed(2)}</p>
    </div>

export default Card