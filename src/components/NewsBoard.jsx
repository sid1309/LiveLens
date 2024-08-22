import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import empty from '../assets/empty.png';
import './NewsBoard.css';
import loadingSpinner from '../assets/loading-spinner.gif'; // Add a loading spinner image

const NewsBoard = ({ category, darkMode }) => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    setLoading(true); // Start loading when category changes

    if (category === "bookmark") {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
      setBookmarkedArticles(bookmarks);
      setLoading(false); // Stop loading when bookmarks are set
    } else {
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'e25c615ac2msh17c20d16c6b997dp14bb96jsnfaa504c6d290',
          'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
        }
      };
      let url = `https://real-time-news-data.p.rapidapi.com/${category}&limit=52&country=US&lang=en`;

      fetch(url, options)
        .then(response => response.json())
        .then(data => {
          setArticles(data.data);
          setLoading(false); // Stop loading when data is set
        });
    }
  }, [category]);

  const handleBookmarkChange = () => {
    if (category === "bookmark") {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
      setBookmarkedArticles(bookmarks);
    }
  };

  return (
    <div className={`${darkMode ? 'dark-mode' : ''}`} style={{ minHeight: "100vh" }}>
      {loading ? (
        <div className="loading-spinner">
          <img src={loadingSpinner} alt="Loading..." />
        </div>
      ) : category === "bookmark" ? (
        <div className={`bookmark ${darkMode ? 'dark-mode' : ''}`} style={{ display: "flex", flexWrap: "wrap" }}>
          {bookmarkedArticles.length === 0 ? (
            <div className={`book ${darkMode ? 'dark-mode' : ''}`} style={{ width: "100%", textAlign: "center", height: "100vh", paddingTop: "10vh" }}>
              <img src={empty} style={{ height: "550px" }} alt="No bookmarks" />
            </div>
          ) : (
            bookmarkedArticles.map((news, index) => (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={news.src}
                url={news.url}
                author={news.author}
                publishedAt={news.publishedAt}
                darkMode={darkMode}
                onBookmarkChange={handleBookmarkChange}
              />
            ))
          )}
        </div>
      ) : (
        <div className={`newsboard ${darkMode ? 'dark-mode' : ''}`}>
          {articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.snippet}
              src={news.photo_url}
              url={news.source_url}
              author={news.author}
              publishedAt={news.published_datetime_utc}
              darkMode={darkMode}
              onBookmarkChange={handleBookmarkChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsBoard;
