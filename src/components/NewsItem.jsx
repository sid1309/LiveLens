import { useState, useEffect } from 'react';
import image from '../assets/newsimage.jpg';
import mark_black from '../assets/mark-black.png';
import mark_red from '../assets/mark-red.png';
import mark_white from '../assets/mark-white.png';
import './NewsItem.css';

import { addBookmark, removeBookmark, getBookmarks } from '../api/bookmarks';

const NewsItem = ({ title, description, src, url, author, publishedAt, onBookmarkChange, darkMode }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const checkBookmark = async () => {
      try {
        const bookmarks = await getBookmarks();
        const found = bookmarks.some(bookmark => bookmark.url === url);
        setIsBookmarked(found);
      } catch (err) {
        console.error("Error fetching bookmarks:", err);
      }
    };
    checkBookmark();
  }, [url]);

  const handleBookmark = async () => {
    const article = { title, description, src, url, author, publishedAt };
    try {
      if (isBookmarked) {
        await removeBookmark(url);
        setIsBookmarked(false);
      } else {
        await addBookmark(article);
        setIsBookmarked(true);
      }
      if (onBookmarkChange) onBookmarkChange();
    } catch (err) {
      if (err.response?.status === 401) {
        alert("Please login to use bookmarks.");
      } else {
        alert("Failed to update bookmark.");
        console.error(err);
      }
    }
  };

  return (
    <div className={`card ${darkMode ? 'bg-dark text-light' : ''} mb-3 d-inline-block my-3 mx-3 px-2 py-2 `} style={{ maxWidth: "345px" }}>
      <h5 className="card-title">{title ? title.slice(0, 60) : 'No Title'}</h5>
      <img src={src ? src : image} style={{ height: "200px", width: "325px", marginTop: "10px", borderRadius: "15px" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{description ? description : title}</p>
        <p style={{ margin: "0px 0px 0px 0px" }}>Date: {publishedAt?.slice(0, 10)}</p>
        <div className="d-flex align-items-center justify-content-between" style={{ marginTop: "10px" }}>
          <a href={url} className="btn btn-primary">Read More</a>
          <div onClick={handleBookmark} style={{ cursor: 'pointer', marginLeft: '10px' }}>
            <img
              src={isBookmarked ? mark_red : darkMode ? mark_white : mark_black}
              alt="Bookmark icon"
              style={{ width: '30px', height: '30px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
