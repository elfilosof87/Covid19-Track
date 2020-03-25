import React, { Component, Fragment } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

export class News extends Component {
  state = { news: [] };

  componentDidMount() {
    axios({
      method: "GET",
      url:
        "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=16031090f5d54fc3927b037d85ab1cf1"
    })
      .then(res => {
        this.setState({ news: res.data.articles });
        console.log(res.data.articles);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Fragment>
        <center>
          <div className="back">
            <h1 class="covid-text marg-top">Covid-19 Latest News</h1>
            <div className="container" id="white">
              <div className="row justify-content-center">
                {this.state.news.map(item => (
                  <NewsItem key={item.id} stats={item} />
                ))}
              </div>
            </div>
          </div>
        </center>
      </Fragment>
    );
  }
}

export default News;
