import React, { useMemo } from "react";
import { useMediaQuery, Theme } from "@mui/material";
import { subDays, startOfDay } from "date-fns";

import DashboardTitle from "./DashboardTitle";

import "./Dashboard.css";

import PendingOrders from "./livestream/LiveStream";

const styles = {
  flex: { display: "flex" },
  flexColumn: { display: "flex", flexDirection: "column" },
  leftCol: { flex: 2, marginRight: "0.5em" },
  rightCol: { flex: 1, marginLeft: "0.5em" },
  singleCol: { marginTop: "em", marginBottom: "1em" },
};

const Spacer = () => <span style={{ width: "1em" }} />;
const VerticalSpacer = () => <span style={{ height: "1em" }} />;

export const MyDashboard = () => {
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const aMonthAgo = useMemo(() => subDays(startOfDay(new Date()), 30), []);

  return isXSmall ? (
    <div>
      <div style={styles.flexColumn}>
        <DashboardTitle />
      </div>
    </div>
  ) : isSmall ? (
    <div style={styles.flexColumn}>
      <div style={styles.singleCol}>
        <DashboardTitle />
      </div>
      {/* <div style={styles.flex}>
        <MonthlyRevenue value={revenue} />
        <Spacer />
        <NbNewOrders value={nbNewOrders} />
      </div>
      <div style={styles.singleCol}>
        <OrderChart orders={recentOrders} />
      </div>
      <div style={styles.singleCol}>
        <PendingOrders orders={pendingOrders} />
      </div> */}
    </div>
  ) : (
    <>
      {/* <div style={{ backgroundColor: "#ffaf74" }}> */}
      <DashboardTitle />
      <div style={styles.flex}>
        <div style={styles.leftCol}>
          <div style={styles.flex}>
            <PendingOrders />
          </div>
        </div>
        <div style={styles.rightCol}>
          <div style={styles.flex}>
            <PendingOrders />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyDashboard;
