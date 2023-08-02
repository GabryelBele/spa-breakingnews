import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";
import { HomeBody, HomeHeader } from "./HomeStyled";
import { getAllPosts, getTopPosts } from "../../services/postsServices.js";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [topPost, setTopPost] = useState({});

  async function filterTopPost(allPosts, topPostId) {
    return allPosts.filter((post) => post.id !== topPostId);
  }

  async function findPost() {
    const postsResponse = await getAllPosts();
    setPosts(postsResponse.data.results);

    const topPostResponse = await getTopPosts();
    setTopPost(topPostResponse.data.post);

    // Filtrar a notícia do topo do array de posts
    const filteredPosts = await filterTopPost(
      postsResponse.data.results,
      topPostResponse.data.post.id
    );
    setPosts(filteredPosts);
  }

  useEffect(() => {
    findPost();
  }, []);

  return (
    <>
      <NavBar />
      <HomeHeader>
        <Card
          top={true}
          key={topPost.id}
          title={topPost.title}
          text={topPost.text}
          banner={topPost.banner}
          likes={topPost.likes}
          comments={topPost.comments}
        />
      </HomeHeader>

      <HomeBody>
        {posts.map((users) => {
          return (
            <Card
              key={users.id}
              title={users.title}
              text={users.text}
              banner={users.banner}
              likes={users.likes}
              comments={users.comments}
            />
          );
        })}
      </HomeBody>
    </>
  );
}
