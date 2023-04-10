import * as React from "react";
import {Card, Typography } from "@mui/material";
const DashboardTitle = () => {

  return (
    <Card
      sx={{
        padding: "20px",
        marginTop: 2,
        padding: 1,
      }}
    >
      <Typography variant="h4" component="h2" className="dashboard-title">
        LIVESTREAM
      </Typography>
    </Card>
  );
};

export default DashboardTitle;
