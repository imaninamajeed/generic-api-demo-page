// Standard Import
import React, { useState } from 'react';

// Third Party Import
import { FileUploader } from "react-drag-drop-files";
import { Select, FormControl, FormHelperText, InputLabel, MenuItem, CardMedia, CardContent, Typography } from "@mui/material";

// Custom import
import { TestModelTitle } from "./Title";
import "./TestModel.css";
import { modelMetas } from "./GetMeta";

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
  const fileTypes = ["JPG", "PNG", "JPEG"];
  // variable for image proview
  const [previewImage, setPreviewImage] = useState(null);

  // functiond definition
  function getModelMetas() {
    return modelMetas
  }

  const modelMetaList = getModelMetas();
  console.log("modelMetaList", modelMetaList);

  const [selectedModel, setSelectedModel] = React.useState('pvbd');
  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleChange = async (file) => {
    console.log("handleChange");
    console.log("file", file);

    // Send image
    const formData = new FormData();
    formData.append('image', file);
    console.log("Send image");

    // const sendUrl = "http://localhost:5000/test/send_binary"
    const sendUrl = `http://${RECO_MODEL_API_SERVER}/${selectedModel}/predict`
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
      document.getElementById("result-card-content").textContent = JSON.stringify(responseJson, undefined, 2);
    })
      .catch((error) => {
        console.log(error)
      });

    console.log("response", response);

    // Set the preview image
    setPreviewImage(URL.createObjectURL(file));
  };


  return (
    <>
      <TestModelTitle />
      <div style={styles.flex}>
        <div style={styles.leftCol}>
          <div>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
            <CardMedia
              component="img"
              height={700}
              image={previewImage}
              alt="Image Preview"
            />

          </div>
        </div>
        <div style={styles.rightCol}>
          <div style={styles.flex}>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="model-select-label">Model</InputLabel>
              <Select
                labelId="model-select-label"
                id="model-select"
                value={selectedModel}
                label="Model"
                onChange={handleModelChange}
              >
                {modelMetaList.map(
                  (modelMeta) => {
                    return (
                      <MenuItem value={modelMeta.codename} key={modelMeta.codename}>{modelMeta.codename}</MenuItem>
                    )
                  }
                )}
              </Select>
              <FormHelperText>Choose your model</FormHelperText>
            </FormControl>

            <CardContent>
              {/* <Typography id="result-card-content" variant="body2" color="text.secondary">- None -</Typography> */}
              <pre id="result-card-content">- None -</pre>
            </CardContent>
          </div>
        </div>
      </div>
    </>
  );
};
