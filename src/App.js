import react from "react";
import "./css/App.css";
import bgvideo from "./videos/bgvideo.mp4";
import Box from "./components/Box";


function App() {
  return (
    
      <div className="app">
      <div className="bg">
      <video className="bgvideo" autoPlay loop muted src={bgvideo} type="video/mp4"></video>
      </div>
      <Box />
      </div>
    
  );
}

export default App;
