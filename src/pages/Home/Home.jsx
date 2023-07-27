import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";
import { HomeBody } from "./HomeStyled";
import { getAllPosts } from "../../services/postsServices.js";

export default function Home() {
  const [news, setNews] = useState([]);

  async function findAllPosts() {
    try {
      const response = await getAllPosts();
      setNews(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar as notícias:", error);
    }
  }

  useEffect(() => {
    findAllPosts();
  }, []);

  return (
    <>
      <NavBar />

      <HomeBody>
        {news.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes.length}
              comments={item.comments.length}
            />
          );
        })}
      </HomeBody>
    </>
  );
}
