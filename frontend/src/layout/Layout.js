import React from "react";
import { Layout } from "react-admin";
import AppBar from "./AppBar";
import Menu from "./Menu";

export const MyLayout = (props) => (
  <Layout {...props} appBar={AppBar} menu={Menu} />
);

export default MyLayout;
