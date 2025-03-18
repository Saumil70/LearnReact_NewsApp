interface Article {
  title: string;
  description: string | null;
  urlToImage: string | null;
  newsUrl: string;
}

function NewsItem(props: Article) {
  let { title, description, urlToImage, newsUrl } = props;
  return (
    <div className="card" style={{ height: "415px" }}>
      <img
        className="card-img-top"
        src={
          urlToImage
            ? urlToImage
            : "https://www.shutterstock.com/image-vector/image-icon-600nw-211642900.jpg"
        }
        alt="Card image cap"
        style={{ height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title : ""}...</h5>
        <p className="card-text" style={{ height: "72px" }}>
          {description ? description : ""}...
        </p>
        <a href={newsUrl} target="_blank" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
