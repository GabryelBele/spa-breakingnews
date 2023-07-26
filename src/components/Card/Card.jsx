import { CardBody, CardContainer, CardFooter } from "./CardStyled";

/* eslint-disable react/prop-types */
export function Card({ news }) {
  return (
    <>
      <CardContainer>
        <CardBody>
          <div>
            <h2>{news.title}</h2>
            <p>{news.text}</p>
          </div>
          <img src={news.image} alt="imagem" />
        </CardBody>

        <CardFooter>
          <div>
            <span>{news.likes}</span>
            <i className="bi bi-hand-thumbs-up"></i>
          </div>
          <div>
            <span>{news.comment}</span>
            <i className="bi bi-chat"></i>
          </div>
        </CardFooter>
      </CardContainer>
    </>
  );
}
