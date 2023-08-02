import { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { NavBar } from "../../components/Navbar/Navbar";
import { getAllPosts, getTopPost } from "../../services/postsServices";
import { HomeBody, HomeHeader } from "./HomeStyled";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [topPost, setTopPost] = useState({});

  async function findPost() {
    const postsResponse = await getAllPosts();
    setPosts(postsResponse.data.results);

    const topPostResponse = await getTopPost();
    setTopPost(topPostResponse.data.post);
  }

  useEffect(() => {
    findPost();
  }, []);

  return (
    <>
      <NavBar />

      <HomeHeader>
        <Card
          top={true} // Passando o valor correto da prop 'top', neste caso, é uma booleana.
          title={topPost.title}
          text={topPost.text}
          banner={topPost.banner}
          likes={topPost.likes}
          comments={topPost.comments}
        />
      </HomeHeader>
      <HomeBody>
        {posts.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </HomeBody>
    </>
  );
}
