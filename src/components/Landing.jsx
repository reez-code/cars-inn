import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

function Landing() {
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
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black">
      <div className="w-85 h-85" ref={videoContainerRef}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=MlubS7KX0YQ&ab_channel=Creativeflipp"
          width="90vw"
          height="90vh"
          controls={false}
          playing={true}
          onEnded={handleVideoEnded}
        />
      </div>
    </div>
  );
}

export default Landing;
