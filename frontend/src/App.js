import { useState, useEffect } from "react";
import { Admin, CustomRoutes, Resource } from "react-admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import mqtt from "mqtt/dist/mqtt";
import { MyLayout } from "./layout/Layout";
import { MyLogin } from "./layout/Login";
import { MyDashboard } from "./dashboard/Dashboard";

// import authProvider from './authProvider';
import dataProvider from "./api/dataProvider";
import { ModelList } from "./resources/ModelList";

import "@fontsource/nunito"; // Defaults to weight 400.
import "@fontsource/poppins"; // Defaults to weight 400.
// import { lightTheme } from "./layout/themes";

const ffmpegIP = "172.17.11.62";
console.log("ffmpegIP:", ffmpegIP, "connected");

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Admin
            title="Traffic Offence"
            dataProvider={dataProvider}
            dashboard={() => <MyDashboard ffmpegIP={ffmpegIP} />}
            loginPage={MyLogin}
            layout={MyLayout}
            disableTelemetry
          >
            <Resource
              name="model_list"
              options={{ label: "Models" }}
              list={ModelList}
            />
          </Admin>
        }
      />
      <Route path="/login" element={<MyLogin />} />
    </Routes>
  </BrowserRouter>
);

export default App;
