// import libraries
import { Card, CardContent } from "@mui/material";

export const MyLiveStream = () => {
  return (
    <Card sx={{ flex: 1 }}>
      <CardContent title={"livestream"}>
        <div className="canvas-container">
          <div id="cvsVideo" className="canvas-stream" />
        </div>
      </CardContent>
    </Card>
  );
};
