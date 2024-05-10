import React from 'react';
import { useHistory } from 'react-router-dom'; 
import ReactPlayer from 'react-player';

const Landing = () => {
  const history = useHistory();

  const handleVideoEnd = () => {
    // Redirect to the homepage after the video ends
    history.push('./Routing/Home');
  };

  return (
    <div>
      <ReactPlayer
        url="https://youtu.be/eNFKHh_MUXY?si=kcfluCDFHi9q8po2"
        playing={true}
        controls={false}
        onEnded={handleVideoEnd}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Landing;

