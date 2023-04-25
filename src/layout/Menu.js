// import libraries
import Box from "@mui/material/Box";
import { DashboardMenuItem, useSidebarState } from "react-admin";

export const MyMenu = () => {
  const [open] = useSidebarState();

  return (
    <Box
      sx={{
        width: open ? 250 : 50,
        marginTop: 1,
        marginBottom: 1,
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        "&:hover": {
          background: "orange",
        },
      }}
    >
      <DashboardMenuItem
        primaryText="TestModel"
        className="menu-primary-text"
      />
    </Box>
  );
};
