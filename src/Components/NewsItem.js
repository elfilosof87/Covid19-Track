import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NewsItem = ({
  stats: { _id, source, title, description, url, image, publishedAt }
}) => {
  return (
    <div className="col-sm-12 news-box">
      <div>
        <h3 className="title">{title}</h3>
        <h4>{source.id}</h4>
        <p>
          Read more{" "}
          <a href={url} target="_blank">
            here
          </a>
        </p>
        <span>Published at {publishedAt}</span>
      </div>
      <img src={image} alt="news" className="newsimg" />

      <p>{description}</p>
    </div>
  );
};
export default NewsItem;
