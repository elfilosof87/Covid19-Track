import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Moment from "react-moment";

const NewsItem = ({
  stats: { _id, source, title, description, url, image, publishedAt },
}) => {
  return (
    <div className="col-sm-12 news-box">
      <div>
        <h3 className="title">{title}</h3>
        <h4>{source.id}</h4>
        <p></p>
        <span style={{ float: "right", paddingRight: "4%" }}>
          Published at <Moment format="YYYY/MM/DD">{publishedAt}</Moment>
        </span>
      </div>
      <div className="row">
        <div className="col-sm">
          <img src={image} alt="news" className="newsimg" />
        </div>
        <div className="col-sm" style={{ textAlign: "left" }}>
          <br />
          <br />
          <p>{description}</p>Read more{" "}
          <a href={url} target="_blank">
            here
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
