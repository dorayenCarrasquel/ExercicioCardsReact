import react from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <div className="Titulo">{props.title}</div>
      <div className="Conteudo">{props.conteudo}</div>
    </div>
  );
}

export default Card;
