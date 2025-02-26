import React from "react";
import StarSvg from "./StarSvg";
import moment from "moment"

const Card = ({ data, HandleViewDetails, toggleFavourite}) => {
  return (
    <>
      <div className="w-[250px] overflow-hidden m-1 rounded-lg drop-shadow-lg bg-black text-white relative">
        <div className="mb-2">
          <img className="w-full h-34" src={data.urlToImage} alt="image" />
          <h2 className="px-2 text-zinc-100">{data.title}</h2>
          <p className="px-2 text-zinc-700 text-[12px]">{data.description}</p>
        </div>

        <div className="px-2 flex justify-between">
          <button
            className="p-1 text-[13px] bg-blue-500 rounded-lg cursor-pointer"
            
          >
            <a href={data.url} target="_blank">Visit Source</a>
          </button>
          <button
            className="p-1 text-[13px] bg-blue-500 rounded-lg cursor-pointer"
            onClick={()=>HandleViewDetails(data.id)}
          >
            View Details
          </button>
        </div>

        <p className="px-2 text-zinc-500 text-[10px] mb-1 mt-2">
          <span>Published at: </span> <span>{moment(data.publishedAt).format("DD/MM/YYYY")}</span>
        </p>
        <div className="absolute top-2 right-2 cursor-pointer" onClick={()=>toggleFavourite(data.id)}>
        <StarSvg fillColor={`${data.isFavourite ? "#ffeb49" : "#666"}`}/>
        </div>
        
      </div>
    </>
  );
};

export default Card;
