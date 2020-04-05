import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
//import DateChange from "./DateChange";
import Header from "./Header";
import Image from "./Image";
import Explanation from "./Explanation";
import Footer from "./Footer";

import { Spinner, UncontrolledTooltip } from "reactstrap";
//import styled from "styled-components";

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
    var today1 = yyyy + "-" + mm + "-" + dd;
    return today1;
  };
  let curDate = currentDate();

  let isImg = false;
  const [photos, setPhotos] = useState({});
  const [designedDate, setDesignedDate] = useState(curDate);
  //const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${designedDate}`
      )
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        setPhotos(response.data);
      })
      .catch((error) => console.log("the data was not returned", error));
  }, [designedDate]);

  let urlString = `${photos.url}`;
  let urlVideoString = "";

  if (photos.media_type === "image") {
    isImg = true;
  } else {
    isImg = false;
    urlVideoString =
      urlString.substring(0, urlString.length - 5) + "autoplay=1&mute=1";
    //console.log(urlVideoString);
  }
  //console.log("loading ", loading);
  const changeDate = (event) => {
    setDesignedDate(event.target.value);
  };

  return (
    <div className="App-header">
      <input
        id="UncontrolledTooltipExample"
        className="Input-date"
        type="date"
        value={photos.date}
        onChange={changeDate}
      />

      {/* <UncontrolledTooltip
        placement="right"
        target="UncontrolledTooltipExample"
      >
        Choose the date
     </UncontrolledTooltip>*/}

      {loading && (
        <Spinner
          type="grow"
          color="secondary"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      {/*<DateChange date={photos.date}/>*/}

      <Header title={photos.title} />
      <Image
        title={photos.title}
        image={photos.url}
        imgVideo={isImg}
        videoLink={urlVideoString}
        copyright={photos.copyright}
      />
      <Explanation desc={photos.explanation} />
      <Footer date={photos.date} />
    </div>
  );
}
