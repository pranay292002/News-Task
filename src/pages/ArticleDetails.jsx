import React from "react";
import { useParams } from "react-router";
import { newsData } from "../data/newsData";
import moment from "moment"
import parrot from "../assets/pexels-frans-van-heerden-201846-1463295.jpg"

const ArticleDetails = () => {
  const { id } = useParams();
  const data = newsData.find((article) => id == article.id);
  console.log(data);
  return (
    <>
      <div className="w-[90vw] overflow-hidden my-2  mx-auto rounded-lg drop-shadow-lg bg-black text-white relative">
        <div className="mb-2 flex">
          <img className="w-[50%]" src={data.urlToImage ? data.urlToImage : parrot } onError={(e)=>e.target.src=parrot} alt="image" />
          <div>
            {" "}
            <h2 className="px-2 text-zinc-100 text-2xl font-bold">
              {data.title}
            </h2>
            <p className="px-2 text-zinc-400 text-[20px]">
              {data.description}{" "}
              <button className="p-1 text-[13px] text-zinc-900 bg-blue-500 rounded-lg cursor-pointer">
                <a href={data.url} target="_blank">
                  Visit Source
                </a>
              </button>
            </p>
          </div>
        </div>

        <p className="px-2 text-zinc-500 text-[15px] mb-1 mt-2">
          <span>Published at: </span> <span>{moment(data.publishedAt).format("DD/MM/YYY, h:mm:ss a")}</span>
        </p>
      </div>
    </>
  );
};

export default ArticleDetails;
