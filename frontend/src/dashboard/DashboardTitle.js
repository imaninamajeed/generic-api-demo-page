// import libraries
import {Card, Typography } from "@mui/material";

const DashboardTitle = () => {

  return (
    <Card
      sx={{
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
