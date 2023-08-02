import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyled";

/* eslint-disable react/prop-types */
export function Card(props) {
  return (
    <>
      <CardContainer>
        <CardBody top={props.top}>
          <div>
            <CardHeader>
              <h1>{props.title}</h1>
              <TextLimit text={props.text} limit={120} />
            </CardHeader>

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
          </div>
          <img src={props.banner} alt="imagem" />
        </CardBody>
      </CardContainer>
    </>
  );
}
