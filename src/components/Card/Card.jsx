/* eslint-disable react/prop-types */
export function Card({ news }) {
    return (
      <>
        <section>
          <h2>{news.title}</h2>
          <p>{news.text}</p>
          <img src={news.image} alt="imagem" />
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{news.likes}</span>
          <i className="bi bi-chat"></i>
          <span>{news.comment}</span>
        </section>
      </>
    );
  }
  