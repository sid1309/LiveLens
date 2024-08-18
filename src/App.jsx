import { useState } from "react"
import Navbar from "./components/Navbar.jsx"
import NewsBoard from "./components/NewsBoard.jsx"
import "./App.css";


import "./App.css"
const App= ()=>{
  const[category,setCategory]=useState("top-headlines?country=in&category=general");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`full ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar category={category} setCategory={setCategory} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <NewsBoard category={category} darkMode={darkMode}  />
      
 
    </div>
  )
} 
export default App;