
import { useState } from "react";
// import axios from "axios";
import { ActionButton } from "../components/ActionButton.jsx";
import { ArticleA } from "./column.jsx";
import { ArticleB } from "./column.jsx";
import { ArticleC } from "./column.jsx";
import { article_a } from "./column.jsx";
import { article_b } from "./column.jsx";
import { article_c } from "./column.jsx";



export const Article = () => {
  // 🔽 追加
  const [ArticleResult, setArticleResult] = useState("");

  // const getArticle = () => {
  //   const result = [ { article_a }, { article_b }, { article_c } ][
  //     Math.floor(Math.random() * 3)];
  //   console.log(result);
  //     // 🔽 追加
  //     setArticleResult(result);
  // };

  const getArticle = () => {
    const result = [ ArticleA(),ArticleB(), ArticleC() ][
      Math.floor(Math.random() * 3)];
    console.log(result);
      // 🔽 追加
      setArticleResult(result);
  };

  return (
    <>
      <p>おみくじの画面</p>
      {/* 🔽 編集 */}
      <ActionButton text="コラムをひく" action={getArticle} />
      {/* <p>"コラム表示"</p> */}
      <p>{ArticleResult.result}</p>
    </>
  );
};


// const success = async (position) => {


//      const { latitude, longitude } = position.coords;
//      setGeoLocation({ latitude, longitude });
//      const placeData = await axios.get(
//        `https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=`
//      );
//      console.log(placeData.data);
//      setPlace(placeData.data.display_name);
// }

