import React from "react";
import "../App.css";
import styled from "styled-components";

const Pcopyright = styled.p`
  margin-top: -3rem;
`;

const ImageStyle = styled.img`
  z-index: -1;
`;

const Image = ({ title, image, imgVideo, videoLink, copyright }) => {
  return (
    <div className="content">
      <div className="picture">
        {imgVideo ? (
          <ImageStyle width="1000" alt={title} src={image}></ImageStyle>
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
        {copyright ? <Pcopyright>{"By " + copyright}</Pcopyright> : null}
      </div>
    </div>
  );
};
export default Image;
