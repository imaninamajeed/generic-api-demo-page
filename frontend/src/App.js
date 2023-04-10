// import libraries
import { Admin, Resource } from "react-admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import components
import { MyLogin } from "./layout/Login";
import { MyDashboard } from "./dashboard/Dashboard";

// import layout
import { MyLayout } from "./layout/Layout";
import "@fontsource/nunito"; // Defaults to weight 400.
import "@fontsource/poppins"; // Defaults to weight 400.

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
