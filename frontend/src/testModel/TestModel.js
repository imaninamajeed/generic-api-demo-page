// Standard Import
import React, { useState } from 'react';

// Third Party Import
import { FileUploader } from "react-drag-drop-files";

// Custom import
import { TestModelTitle } from "./Title";
import "./TestModel.css";

const styles = {
  flex: { display: "flex" },
  flexColumn: { display: "flex", flexDirection: "column" },
  leftCol: { flex: 1, marginRight: "0.5em" },
  rightCol: { flex: 1, marginLeft: "0.5em" },
  singleCol: { marginTop: "1em", marginBottom: "1em" },
};

export const TestModel = (props) => {

  const fileTypes = ["JPG", "PNG"];

  const [droppedFiles, setDroppedFiles] = useState([]);
  const handleDrop = async (item) => {
    console.log("handleDrop");
    const formData = new FormData();
    formData.append('image', item.files[0]);
    console.log("Send image");

    const response = await fetch('http://localhost:5000/test/send_file', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const url = await response.text();
      setDroppedFiles([...droppedFiles, url]);
    }
  };

  const [previewImage, setPreviewImage] = useState(null);
  const handleChange = async (file) => {
    console.log("handleChange");
    console.log("file", file);


    // Send image
    const formData = new FormData();
    formData.append('image', file);
    console.log("Send image");

    const response = await fetch('http://localhost:5000/test/send_file', {
      method: 'POST',
      body: formData,
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
