// Standard Import
import React, { useState } from 'react';

// Third Party Import
import { FileUploader } from "react-drag-drop-files";

// Custom import
import { TestModelTitle } from "./Title";
import "./TestModel.css";

// variable definition
const styles = {
  flex: { display: "flex" },
  flexColumn: { display: "flex", flexDirection: "column" },
  leftCol: { flex: 1, marginRight: "0.5em" },
  rightCol: { flex: 1, marginLeft: "0.5em" },
  singleCol: { marginTop: "1em", marginBottom: "1em" },
};

export const TestModel = (props) => {

  // variable definition
  // const RECO_MODEL_API_SERVER = "172.17.10.83:18183";
  const RECO_MODEL_API_SERVER = "localhost:18183";
  const fileTypes = ["JPG", "PNG"];
  // variable for image proview
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = async (file) => {
    console.log("handleChange");
    console.log("file", file);

    // Send image
    const formData = new FormData();
    formData.append('image', file);
    console.log("Send image");

    // const sendUrl = "http://localhost:5000/test/send_binary"
    const sendUrl = `http://${RECO_MODEL_API_SERVER}/pvbd/predict`
    console.log("sendUrl", sendUrl);

    // const response = await fetch("http://localhost:5000/test/send_binary", {
    const response = await fetch(sendUrl, {
      method: 'POST',
      body: file,
      headers: {
        "Content-Type": "image/png"
      },
    }).then(async (res) => {
      // Do something with the response
      let responseJson = await res.json();
      console.log("responseJson", responseJson);
    })
      .catch((error) => {
        console.log(error)
      });

    console.log("response", response);

    if (response.ok) {
      const url = await response.text();
      setPreviewImage(URL.createObjectURL(file));
    }
  };


  return (
    <>
      <TestModelTitle />
      <div style={styles.flex}>
        <div style={styles.leftCol}>
          <div>
            <img style={{ width: "300px", height: "300px" }} src={previewImage} alt="Image Preview" />
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />

          </div>
        </div>
        <div style={styles.rightCol}>
          <div style={styles.flex}></div>
        </div>
      </div>
    </>
  );
};
