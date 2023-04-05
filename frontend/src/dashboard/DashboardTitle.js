import * as React from "react";
import { Box, Card, CardActions, Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import { useTranslate } from "react-admin";

// import publishArticleImage from "./welcome_illustration.svg";
import Logo from "../layout/Logo";

const DashboardTitle = () => {
  const translate = useTranslate();

  return (
    <Card
      sx={{
        padding: "20px",
        marginTop: 2,
        padding: 1,
        marginBottom: "1em",
        // border: "3px solid #ffaf74",
      }}
    >
      <Typography variant="h4" component="h2" className="dashboard-title">
        LIVESTREAM
      </Typography>
    </Card>
  );
};

export default DashboardTitle;
