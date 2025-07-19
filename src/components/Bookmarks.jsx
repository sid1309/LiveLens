import React, { useEffect, useState } from 'react';
import { getBookmarks } from '../api/bookmarks';
import NewsItem from './NewsItem';
import empty from '../assets/empty.png';


const Bookmarks = ({ darkMode }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const fetchBookmarks = async () => {
    try {
      const data = await getBookmarks();
      setBookmarks(data);
    } catch (error) {
      console.error("Failed to fetch bookmarks:", error);
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  return (
    <div
      className={`container-fluid min-vh-100 py-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}` }
      style={{ transition: 'all 0.3s ease',marginTop: '50px' }}
    >
      <div className="container">
      
        <div className="row justify-content-center">
          {bookmarks.length === 0 ? (
            <p className="text-center">
              <img
                src={empty}
                alt="No bookmarks"
                style={{ maxWidth: '500px', width: '100%' }}
              />
            </p>
          ) : (
            bookmarks.map((article, index) => (
              <NewsItem
                key={index}
                title={article.title}
                description={article.description}
                src={article.src}
                url={article.url}
                author={article.author}
                publishedAt={article.publishedAt}
                darkMode={darkMode}
                onBookmarkChange={fetchBookmarks} // ✅ updates after remove
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
