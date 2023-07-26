import { Card } from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";
import { News } from "../../Datas.js";
import { HomeBody } from "./HomeStyled";

export default function Home() {
  return (
    <>
      <NavBar />

      <HomeBody>
        {News.map((item, index) => {
          return <Card key={index} news={item} />;
        })}
      </HomeBody>
    </>
  );
}
