import React from "react";

const Header = ({ title, desc, image, date, imgVideo, videoLink }) => {
  //console.log("image ", image.substring(0, image.length - 4));
  //console.log("image ", image.length);
  //if (!{title}) return <h3>Loading...</h3>;
  return (
    <div className="content">
      <h2>{title}</h2>
      <div className="picture">
        {imgVideo ? (
          <img alt={title} src={image}></img>
        ) : (
          <iframe width="957" height="722" src={videoLink}></iframe>
        )}
      </div>
      <p>{desc}</p>
      <p>{date}</p>
    </div>
  );
};
export default Header;
//<iframe height="100vh" src={image}></iframe>
