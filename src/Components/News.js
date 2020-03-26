import React, { Component, Fragment } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

export class News extends Component {
  state = { news: [] };

  componentDidMount() {
    axios({
      method: "GET",
      url:
        "https://gnews.io/api/v3/search?q=covid-19,india&token=1a59e6bebb56860e14cba3f15c950d66"
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
