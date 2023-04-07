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

// import { Login, Layout } from "./layout/Layout";
// import { Dashboard } from './dashboard';
// import { lightTheme } from "./layout/themes";

const ffmpegIP = "172.17.11.62";
console.log("ffmpegIP:", ffmpegIP, "connected");

const App = () => (
  <Admin
    title="Admin"
    dataProvider={dataProvider}
    // dataProvider={dataProviderFactory(
    //   process.env.REACT_APP_DATA_PROVIDER || ""
    // )}
    // authProvider={authProvider}
    // dashboard={Dashboard}
    loginPage={MyLogin}
    layout={MyLayout}
    disableTelemetry
    // theme={lightTheme}
  >
    <Resource
      name="model_list"
      options={{ label: "Models" }}
      list={ModelList}
    />
    {/* <CustomRoutes>
      <Route path="/configuration" element={<Configuration />} />
      <Route path="/segments" element={<Segments />} />
    </CustomRoutes> */}
    {/* <Resource name="customers" {...visitors} />
    <Resource name="commands" {...orders} options={{ label: "Orders" }} />
    <Resource name="invoices" {...invoices} />
    <Resource name="products" {...products} />
    <Resource name="categories" {...categories} />
    <Resource name="reviews" {...reviews} /> */}
  </Admin>
);

export default App;
