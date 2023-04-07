import * as React from "react";
import { Card, CardHeader, List, CardContent } from "@mui/material";
import { useTranslate } from "react-admin";

const PendingOrders = (props) => {
  const { orders = [] } = props;
  const translate = useTranslate();

  return (
    <Card sx={{ flex: 1 }}>
      <CardHeader title={"livestream preview"} />
      <CardContent title={"preview"}>
        <div class="col-md-6">
          <div id="cvsVideo" className="canvas-stream mx-auto">
            canvas streaming
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PendingOrders;
