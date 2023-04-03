import React from "react";
import { Admin, CustomRoutes, Resource } from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import { Route } from "react-router";

// import authProvider from './authProvider';
import { MyLayout } from "./layout/Layout";
import { MyLogin } from "./layout/Login";

import dataProvider from "./api/dataProvider";

import { ModelList } from "./resources/ModelList";

// import { Login, Layout } from "./layout/Layout";
// import { Dashboard } from './dashboard';
// import { lightTheme } from "./layout/themes";

// import visitors from "./visitors";
// import orders from "./orders";
// import products from "./products";
// import invoices from "./invoices";
// import categories from "./categories";
// import reviews from "./reviews";
// import dataProviderFactory from "./dataProvider";
// import Configuration from "./configuration/Configuration";
// import Segments from "./segments/Segments";

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
