import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

interface Article {
  title: string;
  description: string | null;
  urlToImage: string | null;
  url: string;
}

interface NewsApiResponse {
  articles: Article[];
  totalResults: number;
}

function News() {
  const [newsData, setNewsData] = useState<NewsApiResponse>({
    articles: [],
    totalResults: 0,
  });

  const [currentPage, setPage] = useState(1);
  const pageSize = 21;

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=19218f55849b4da39f5a34e67b85bff9&page=${currentPage}&pageSize=${pageSize}`
    )
      .then((response) => response.json())
      .then((data: NewsApiResponse) => {
        if (data.articles) {
          setNewsData(data);
        }
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=19218f55849b4da39f5a34e67b85bff9&page=${
          currentPage - 1
        }&pageSize=20`
      )
        .then((response) => response.json())
        .then((data: NewsApiResponse) => {
          if (data.articles) {
            setNewsData(data);
            setPage(currentPage - 1);
          }
        })
        .catch((error) => console.error("Error fetching news:", error));
    }
  };

  const handleNextClick = () => {
    if (currentPage < Math.ceil(newsData.totalResults / 20)) {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=19218f55849b4da39f5a34e67b85bff9&page=${
          currentPage + 1
        }&pageSize=20`
      )
        .then((response) => response.json())
        .then((data: NewsApiResponse) => {
          if (data.articles) {
            setNewsData(data);
            setPage(currentPage + 1);
          }
        })
        .catch((error) => console.error("Error fetching news:", error));
    }
  };

  return (
    <>
      <h1 style={{ paddingLeft: "116px", paddingTop: "35px" }}>
        Breaking News
      </h1>
      <div className="container pt-4">
        <div className="row">
          {newsData.articles.map((element, index) => (
            <div className="col-md-3 mt-4" key={index}>
              <NewsItem
                title={element.title?.slice(0, 35) || "No Title"}
                description={
                  element.description?.slice(0, 80) ||
                  "No Description Available"
                }
                urlToImage={
                  element.urlToImage ||
                  "https://www.shutterstock.com/image-vector/image-icon-600nw-211642900.jpg"
                }
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <nav aria-label="...">
          <ul className="pagination d-flex justify-content-around">
            <li className="page-item">
              <button
                className="page-link btn btn-dark"
                disabled={currentPage == 1}
                onClick={handlePrevClick}
              >
                Previous
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link btn btn-dark"
                onClick={handleNextClick}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default News;
