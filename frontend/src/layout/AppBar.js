// import libraries
import { AppBar, Logout, UserMenu } from "react-admin";
import { Box } from "@mui/material";

const ConfigurationMenu = React.forwardRef((props, ref) => {
  const translate = useTranslate();
  const { onClose } = useUserMenu();

  return (
    <MenuItem
      component={Link}
      // @ts-ignore
      ref={ref}
      {...props}
      to="/configuration"
      onClick={onClose}
    >
      <ListItemIcon>
        <SettingsIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>{translate("pos.configuration")}</ListItemText>
    </MenuItem>
  );
});
const CustomUserMenu = () => (
  <UserMenu>
    <ConfigurationMenu />
    <Logout />
  </UserMenu>
);

export const MyAppBar = () => {
  return (
    <AppBar color="" elevation={1} userMenu={<CustomUserMenu />}>
      {/* <TitlePortal /> */}
      <Logo width="100px" height="50px" />
      <Box component="span" flex={1} />
      {/* {isLargeEnough && <Logo />}
      {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />} */}
    </AppBar>
  );
};
