import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";

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

interface props {
  pageSize: number;
  category: string;
}

function News(props: props) {
  var pageSize = props.pageSize;
  var category = props.category;
  const [newsData, setNewsData] = useState<NewsApiResponse>({
    articles: [],
    totalResults: 0,
  });

  const [currentPage, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=19218f55849b4da39f5a34e67b85bff9&page=${currentPage}&pageSize=${pageSize}`
    )
      .then((response) => response.json())
      .then((data: NewsApiResponse) => {
        if (data.articles) {
          setNewsData(data);
          setLoading(false);
        }
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  const handlePrevClick = () => {
    setLoading(true);
    if (currentPage > 1) {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=19218f55849b4da39f5a34e67b85bff9&page=${
          currentPage - 1
        }&pageSize=${pageSize}`
      )
        .then((response) => response.json())
        .then((data: NewsApiResponse) => {
          if (data.articles) {
            setNewsData(data);
            setPage(currentPage - 1);
            setLoading(false);
          }
        })
        .catch((error) => console.error("Error fetching news:", error));
    }
  };

  const handleNextClick = () => {
    setLoading(true);
    if (currentPage < Math.ceil(newsData.totalResults / pageSize)) {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=19218f55849b4da39f5a34e67b85bff9&page=${
          currentPage + 1
        }&pageSize=${pageSize}`
      )
        .then((response) => response.json())
        .then((data: NewsApiResponse) => {
          if (data.articles) {
            setNewsData(data);
            setPage(currentPage + 1);
            setLoading(false);
          }
        })
        .catch((error) => console.error("Error fetching news:", error));
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: "35px" }}>Breaking News</h1>
      {loading && <Loader />}
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
                disabled={
                  currentPage >= Math.ceil(newsData.totalResults / pageSize)
                }
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
