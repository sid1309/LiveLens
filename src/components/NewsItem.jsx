import { useState, useEffect } from 'react';

import image from '../assets/newsimage.jpg';
import mark_black from '../assets/mark-black.png';
import mark_red from '../assets/mark-red.png';
import mark_white from '../assets/mark-white.png';

import './NewsItem.css';

const NewsItem = ({ title, description, src, url, author, publishedAt, onBookmarkChange, darkMode }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const isBookmarked = bookmarks.some(bookmark => bookmark.url === url);
    setIsBookmarked(isBookmarked);
  }, [url]);

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter(bookmark => bookmark.url !== url);
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      setIsBookmarked(false);
    } else {
      const newBookmark = { title, description, src, url, author, publishedAt };
      const updatedBookmarks = [...bookmarks, newBookmark];
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      setIsBookmarked(true);
    }
    if (onBookmarkChange) onBookmarkChange();  
  };

  return (
    <div className={`card ${darkMode ? 'bg-dark text-light' : ''} mb-3 d-inline-block my-3 mx-3 px-2 py-2 `} style={{ maxWidth: "345px" }}>
      <h5 className="card-title">{title.slice(0, 60)}</h5>
      <img src={src ? src : image} style={{ height: "200px", width: "325px", marginTop: "10px", borderRadius: "15px" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{description ? description : title}</p>

        <p style={{ margin: "0px 0px 0px 0px" }}>Date: {publishedAt.slice(0, 10)}</p>
        <div className="d-flex align-items-center justify-content-between" style={{ marginTop: "10px" }}>
          <a href={url} className="btn btn-primary">Read More</a>
          <div onClick={handleBookmark} style={{ cursor: 'pointer', marginLeft: '10px' }}>
            <img
              src={isBookmarked ? mark_red : darkMode ? mark_white : mark_black}
              alt="Bookmark icon"
              style={{
                width: '30px',
                height: '30px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
