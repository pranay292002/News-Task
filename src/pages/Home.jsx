import React, { useState, useEffect } from "react";
import Card from "../commonComponents/Card";
import { newsData } from "../data/newsData";
import { useNavigate } from "react-router";
import { memo } from "react";

const Home = () => {
  const [articleData, setArticleData] = useState();

  useEffect(() => {
    setArticleData(newsData);
  }, []);

  const navigate = useNavigate();

  const HandleViewDetails = (id) => {
    navigate(`/${id}`);
  };

  const toggleFavourite = (id) => {
    const newData = articleData.map((article) => {
      if (id == article.id) {
        return { ...article, isFavourite: !article.isFavourite };
      } else {
        return article;
      }
    });

    setArticleData(newData);
  };

  const sortedData = articleData?.sort(
    (a1, a2) => a2.isFavourite - a1.isFavourite
  );

  return (
    <>
      <div className="grid lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center p-5">
        {sortedData?.map((data, key) => (
          <Card
            key={key}
            data={data}
            HandleViewDetails={HandleViewDetails}
            toggleFavourite={toggleFavourite}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
