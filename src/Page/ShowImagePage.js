import React, { useState, useEffect } from "react";
import ShowImage from "../Components/ShowImage";
import Button from "../Components/Button";
import "./style.css";

const ShowImagePage = () => {
  const fetchNewImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setFetchTrigger(data.message); // Assuming the API returns an object with an imageUrl property
    } catch (error) {
      console.error("Error fetching new image:", error);
    }
  };
  const [fetchTrigger, setFetchTrigger] = useState(false);
  useEffect(() => {
    fetchNewImage();
  }, [fetchTrigger]);

  return (
    <>
      <div className="image-container">
        <ShowImage src={fetchTrigger} />
        <Button
          text="New Image"
          className="btn button-primary"
          onClickEvent={() => setFetchTrigger()}
        />
      </div>
    </>
  );
};

export default ShowImagePage;
