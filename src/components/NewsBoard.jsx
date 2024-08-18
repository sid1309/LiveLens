import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import empty from '../assets/empty.png';

import './NewsBoard.css';

const NewsBoard = ({ category, darkMode }) => {

  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarkedArticles(bookmarks);
  }, []);

  const handleBookmarkChange = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarkedArticles(bookmarks);
  };

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/${category}&apiKey=2e65d824075949e8818405502520beb5`;

    fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
  }, [category]);

  return (
    <div className={`${darkMode ? 'dark-mode' : ''}`} style={{ minHeight: "100vh" }}>
      {(() => {
        if (category === "bookmark") {
          return (
            <div className={`bookmark ${darkMode ? 'dark-mode' : ''}`} style={{ display: "flex", flexWrap: "wrap" }}>
              {bookmarkedArticles.length === 0 ? (
                <div className={`book ${darkMode ? 'dark-mode' : ''}`} style={{ width: "100%", textAlign: "center", height: "100vh", paddingTop: "10vh" }}>
                  <img src={empty} style={{ height: "550px" }}  />
                </div>
              ) : (
                bookmarkedArticles.map((news, index) => (
                   <NewsItem
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                    author={news.author}
                    publishedAt={news.publishedAt}
                    darkMode={darkMode}
                    onBookmarkChange={handleBookmarkChange}
                  />              
                ))
              )}
            </div>
          );
        } else {
          return (
            <div className={`newsboard ${darkMode ? 'dark-mode' : ''}`}>
              {articles.map((news, index) => (
                <NewsItem
                  key={index}
                  title={news.title}
                  description={news.description}
                  src={news.urlToImage}
                  url={news.url}
                  author={news.author}
                  publishedAt={news.publishedAt}
                  darkMode={darkMode}
                  onBookmarkChange={handleBookmarkChange}
                />
              ))}
            </div>
          );
        }
      })()}
    </div>
  );
}

export default NewsBoard;
