import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import YouTube from "react-youtube";

function Landing({ videoUrl }) {
  const navigate = useNavigate(); // Use useNavigate hook
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    // Redirect to the homepage when the video ends
    navigate("/src/Routing/Home.jsx");
  };

  const handleClickOutside = (event) => {
    // Redirect to the homepage when the user clicks outside the video
    navigate("/src/Routing/Home.jsx");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-3xl w-full">
        <YouTube
          videoId={videoUrl} // Extract video id from YouTube URL
          opts={{
            width: "100%",
            playerVars: {
              autoplay: 1,
              controls: 1,
              loop: 0,
            },
          }}
          onEnd={handleVideoEnded}
          onClick={handleClickOutside}
          ref={videoRef}
        />
      </div>
    </div>
  );
}

export default Landing;
