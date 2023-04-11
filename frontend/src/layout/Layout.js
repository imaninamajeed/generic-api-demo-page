// import libraries
import { Layout } from "react-admin";

// import components
import { MyAppBar } from "./AppBar";
import { MyMenu } from "./Menu";

export const MyLayout = (props) => (
  <Layout {...props} appBar={MyAppBar} menu={MyMenu} />
);
