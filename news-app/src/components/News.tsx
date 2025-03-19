import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
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

interface Props {
  pageSize: number;
  category: string;
}

function News({ pageSize, category }: Props) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=19218f55849b4da39f5a34e67b85bff9&page=${page}&pageSize=${pageSize}`
      );
      const data: NewsApiResponse = await response.json();
      if (data.articles) {
        setArticles((prev) => [...prev, ...data.articles]);
        setTotalResults(data.totalResults);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, [page]);

  const fetchMoreData = () => {
    if (articles.length < totalResults) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: "35px" }}>Breaking News</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Loader />}
      >
        <div className="container pt-4">
          <div className="row">
            {articles.map((article, index) => (
              <div className="col-md-3 mt-4" key={index}>
                <NewsItem
                  title={article.title?.slice(0, 35) || "No Title"}
                  description={
                    article.description?.slice(0, 80) ||
                    "No Description Available"
                  }
                  urlToImage={
                    article.urlToImage ||
                    "https://www.shutterstock.com/image-vector/image-icon-600nw-211642900.jpg"
                  }
                  newsUrl={article.url}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

export default News;
