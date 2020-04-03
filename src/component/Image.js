import React from "react";
import "../App.css";
const Image = ({ title, image, imgVideo, videoLink }) => {
  return (
    <div className="content">
      <div className="picture">
        {imgVideo ? (
          <img alt={title} src={image}></img>
        ) : (
          <iframe
            width="957"
            height="722"
            src={videoLink}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          ></iframe>
        )}
      </div>
    </div>
  );
};
export default Image;
