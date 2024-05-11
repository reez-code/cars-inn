import React from "react";
import Landing from "../components/Landing";

function LandingPage() {
  // Extract the video ID from the YouTube URL
  const videoId = "t9-cMiEDNyk";

  return (
    <div>
      <Landing videoUrl={videoId} />
    </div>
  );
}

export default LandingPage;
