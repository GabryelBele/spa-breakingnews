import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchNews } from "../../services/postsServices";
import { Card } from "../../components/Card/Card";
import { ContainerResults, SearchNews, TextResults } from "./SearchStyled";

export function Search() {
  const { title } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [news, setNews] = useState([]);

  // eslint-disable-next-line no-unused-vars
  async function searchPost() {
    try {
      const postsApi = await searchNews(title);
      setNews(postsApi.data.results);
      console.log(postsApi.data.results);
    } catch (e) {
      console.log(e);
      setNews([]);
    }
  }

  useEffect(() => {
    searchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  return (
    <ContainerResults>
      <TextResults>
        <span>
          {news.length
            ? `Encontramos ${news.length} ${
                news.length > 1 ? "Resultados" : "Resultado"
              } para:`
            : `Não encontramos resultados para:`}
        </span>
        <h2>{title}</h2>
      </TextResults>
      <SearchNews>
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </SearchNews>
    </ContainerResults>
  );
}
