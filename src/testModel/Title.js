// import libraries
import {Card, Typography } from "@mui/material";

export const TestModelTitle = () => {

  return (
    <Card
      sx={{
        marginTop: 2,
        padding: 1,
      }}
    >
      <Typography variant="h4" component="h2" className="dashboard-title">
        Internal Demo - Prototype AI App
      </Typography>
    </Card>
  );
};

