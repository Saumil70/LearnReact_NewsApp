function NewsItem(props: any) {
  let { title, description, urlToImage, newsUrl } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={urlToImage} alt="Card image cap" style={{height: "200px"}} />
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} target="_blank" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
