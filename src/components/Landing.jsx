import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";

function Landing({ videoUrl }) {
  const navigate = useNavigate();
  const videoContainerRef = useRef(null); // Ref for the container surrounding the video

  const handleVideoEnded = () => {
    // Redirect to the homepage when the video ends
    navigate("/Home");
  };

  const handleClickOutside = (event) => {
    // Check if the clicked element is outside the video container
    if (
      videoContainerRef.current &&
      !videoContainerRef.current.contains(event.target)
    ) {
      // Redirect to the homepage when the user clicks outside the video
      navigate("/Home");
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside the video container
    document.addEventListener("click", handleClickOutside);

    // Cleanup function to remove event listener when component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-3xl w-full" ref={videoContainerRef}>
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
        />
      </div>
    </div>
  );
}

export default Landing;
