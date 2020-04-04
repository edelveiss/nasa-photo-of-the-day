import React from "react";
import "../App.css";
import styled from "styled-components";

const Pcopyright = styled.p`
  margin-top: -3rem;
`;

const ImageStyle = styled.img`
  margin-top: -3rem;
  z-index: -1;
`;

const Image = ({ title, image, imgVideo, videoLink, copyright }) => {
  return (
    <div className="content">
      <div className="picture">
        {imgVideo ? (
          <ImageStyle alt={title} src={image}></ImageStyle>
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
        <Pcopyright>{copyright}</Pcopyright>
      </div>
    </div>
  );
};
export default Image;
