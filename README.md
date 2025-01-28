# LiveLens 
[live version](https://live-lens.vercel.app/)

**Discover News Like Never Before with LiveLens** 
LiveLens is a dynamic and responsive news platform that curates and delivers real-time updates across various categories. Built with React and Bootstrap, the application provides an intuitive interface and seamless user experience for staying informed on the latest news.


## Features

- **Real-Time News Updates**: Powered by the **News API**, LiveLens fetches and displays the latest articles and updates across six categories: Technology, Sports, Business, Entertainment, Science, and Health.
- **Advanced Search**: Easily find specific articles with a powerful search feature, ensuring users can access the information they need instantly.
- **Categorized Content**: News articles are organized into six distinct categories, enhancing content discoverability and improving navigation.
- **Bookmarks**: Save your favorite articles with a single click. Bookmarks are stored as a JSON array in the browser's local storage for easy access anytime.
- **Dark Mode**: A toggleable Dark Mode enhances accessibility and provides a comfortable reading experience in low-light conditions.

## Technologies Used

- **Frontend**: React.js and Bootstrap for building a responsive and visually appealing user interface.
- **API Integration**: News API for fetching real-time news updates and articles.
- **Local Storage**: Used for saving bookmarks locally in JSON format.

## Screenshots
Here are some screenshots of LiveLens in action:

Light Mode:
<br>
<img src="https://github.com/user-attachments/assets/38462ea2-3180-41b5-a240-c37300ca7306" alt="Screenshot" width="900">

Dark Mode:
<br>
<img src="https://github.com/user-attachments/assets/548a81af-47e4-41c7-9760-c92bc7268eb3" alt="Screenshot" width="900">

Search Feature : 
<br>
<img src="https://github.com/user-attachments/assets/3cc12d08-b05d-4e6a-846f-36517767dbe9" alt="Screenshot" width="900">

Bookmark's Page :
<br>
<img src="https://github.com/user-attachments/assets/b0c3f8f2-6323-4da4-99e7-7c2632dbeb92" alt="Screenshot" width="900">

## Video Demo
Check out the video demonstration of LiveLens:

https://github.com/user-attachments/assets/c041e7ae-4bf6-49f8-8546-2e2a69f5e409



## Installation

Follow these steps to set up and run LiveLens locally:

### Steps to Set Up

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sid1309/LiveLens.git
   cd LiveLens
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the project root and add your News API key:
     ```env
     VITE_API_KEY=<your-news-api-key>
     ```

4. **Run the application**:
   ```bash
   npm start
   ```

5. **Access the app**:
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Folder Structure
```
LiveLens/
├── public/         # Public assets and static files
├── src/            # Source code for the application
│   ├── components/ # Reusable React components
│   ├── pages/      # Individual page components
│   ├── utils/      # Utility functions
│   ├── App.js      # Main application file
│   ├── index.js    # Entry point
├── .env            # Environment variables
├── package.json    # Dependency manager file
├── README.md       # Project documentation
```



