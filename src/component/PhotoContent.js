import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Header from "./Header";

export default function PhotoContent() {
  const currentDate = () => {
    var today = new Date();

    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    var today = yyyy + "-" + mm + "-" + dd;
    return today;
  };
  let curDate = currentDate();

  let isImg = false;
  const [photos, setPhotos] = useState({});
  const [designedDate, setDesignedDate] = useState(curDate);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${designedDate}`
      )
      .then(response => {
        console.log(
          "this is response: ",
          response.data.date
            .toString()
            .substring(0, response.data.date.toString().length - 1)
        );

        setPhotos(response.data);
      })
      .catch(error => console.log("the data was not returned", error));
  }, [designedDate]);
  let urlString = `${photos.url}`;
  let urlVideoString = "";
  //   console.log(
  //     "imageUrl: ",
  //     urlString.substring(0, urlString.length - 4) + "autoplay=1"
  //   );
  if (photos.media_type === "image") {
    isImg = true;
  } else {
    isImg = false;
    urlVideoString =
      urlString.substring(0, urlString.length - 5) + "autoplay=1";
    console.log(urlVideoString);
    // console.log(
    //   "image ",
    //   photos.url.toString().substring(0, photos.url.toString().length - 4)
    // );
  }
  //console.log("url: ", photos);

  return (
    <div className="App-header">
      <input
        type="date"
        value={photos.date}
        onChange={event => setDesignedDate(event.target.value)}
      />

      <Header
        title={photos.title}
        desc={photos.explanation}
        image={photos.url}
        date={photos.date}
        imgVideo={isImg}
        videoLink={urlVideoString}
      />
    </div>
  );
}
