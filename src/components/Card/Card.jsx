import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter } from "./CardStyled";

/* eslint-disable react/prop-types */
export function Card(props) {
  return (
    <>
      <CardContainer>
        <CardBody>
          <div>
            <h2>{props.title}</h2>
            <img src={props.banner} alt="imagem" />
          </div>
          <TextLimit text={props.text} limit={120}/>
        </CardBody>

        <CardFooter>
          <div>
            <span>{props.likes?.length}</span>
            <i className="bi bi-hand-thumbs-up"></i>
          </div>
          <div>
            <span>{props.comments?.length}</span>
            <i className="bi bi-chat"></i>
          </div>
        </CardFooter>
      </CardContainer>
    </>
  );
}

