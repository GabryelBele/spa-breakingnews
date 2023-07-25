import { Card } from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";
import { News } from "../../Datas.js";

export default function Home() {
  return (
    <>
      <NavBar />
      {News.map((item, index) => {
        return <Card key={index} news={item} />;
      })}
    </>
  );
}
