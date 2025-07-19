import API from '../api/axios';

// Add bookmark
export const addBookmark = async (article) => {
  try {
    const res = await API.post('https://livelens-backend-1.onrender.com/api/bookmarks', article);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// Get all bookmarks
export const getBookmarks = async () => {
  try {
    const res = await API.get('https://livelens-backend-1.onrender.com/api/bookmarks');
    return res.data;
  } catch (error) {
    throw error;
  }
};

// Remove bookmark by URL or ID (depending on backend)
export const removeBookmark = async (url) => {
  try {
    const res = await API.delete(`https://livelens-backend-1.onrender.com/api/bookmarks`, { data: { url } });
    return res.data;
  } catch (error) {
    throw error;
  }
};
