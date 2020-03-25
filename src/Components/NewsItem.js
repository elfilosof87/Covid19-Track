import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NewsItem = ({
  stats: {
    _id,
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content
  }
}) => {
  return (
    <div className="col-sm-12 news-box">
      <div>
        <h3 className="title">{title}</h3>
        <h4>{source.id}</h4>
        <footer class="blockquote-footer">
          By <cite title="Source Title"> {author}</cite>
        </footer>

        <span>Published at {publishedAt}</span>
      </div>
      <img src={urlToImage} alt="news" className="newsimg" />
      <p>
        <em>{description}</em>
      </p>
      <p>{content}</p>
    </div>
  );
};
export default NewsItem;
