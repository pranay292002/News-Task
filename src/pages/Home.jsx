import React, { useState, useEffect, lazy, Suspense } from "react";
const Card = lazy(() => import("../commonComponents/Card"));
import { newsData } from "../data/newsData";
import { useNavigate } from "react-router";
import Skeleton from "@mui/material/Skeleton";

const Home = () => {
  const [articleData, setArticleData] = useState();

  useEffect(() => {
    setArticleData(newsData);
  }, []);

  const navigate = useNavigate();

  const HandleViewDetails = (id) => {
    navigate(`/news-details/${id}`);
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
      <div className=" grid lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center p-5 mt-16 ">
        {sortedData?.map((data, key) => (
          <Suspense
            key={key}
            fallback={
              <div>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={210}
                  height={118}
                  sx={{ bgcolor: 'grey.800' }}
                />
                <Skeleton animation="wave" sx={{ bgcolor: 'grey.800' }}  />
                <Skeleton animation="wave" width="60%" sx={{ bgcolor: 'grey.800' }} />
              </div>
            }
          >
            <Card
              data={data}
              HandleViewDetails={HandleViewDetails}
              toggleFavourite={toggleFavourite}
            />
          </Suspense>
        ))}
      </div>
    </>
  );
};

export default Home;
