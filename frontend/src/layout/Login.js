import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { Button, Card, CardActions, CircularProgress } from "@mui/material";
import {
  Form,
  required,
  TextInput,
  useTranslate,
  useLogin,
  useNotify,
  warning,
} from "react-admin";
import Box from "@mui/material/Box";
import "./Layout.css";
import Logo from "./Logo";

export const MyLogin = () => {
  const [loading, setLoading] = useState(false);
  const translate = useTranslate();

  const notify = useNotify();
  const login = useLogin();
  const location = useLocation();

  const handleSubmit = (auth) => {
    setLoading(true);
    login(auth, location.state ? location.state.nextPathname : "/").catch(
      (error) => {
        setLoading(false);
        notify(
          typeof error === "string"
            ? error
            : typeof error === "undefined" || !error.message
            ? "ra.auth.sign_in_error"
            : error.message,
          {
            type: "error",
            messageArgs: {
              _:
                typeof error === "string"
                  ? error
                  : error && error.message
                  ? error.message
                  : undefined,
            },
          }
        );
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "flex-start",
          // background: "warning.main",
          // borderColor:"#feefe2",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Card
          sx={{
            minWidth: 350,
            marginTop: "6em",
            border: 3,
            borderColor: "text.secondary",
            borderRadius: "16px",
          }}
        >
          <Box
            sx={{
              margin: "1em",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Logo width="300px" />
          </Box>
          <Box sx={{ padding: "0 1em 1em 1em" }}>
            <Box sx={{ marginTop: "1em" }}>
              <TextInput
                autoFocus
                source="username"
                label={translate("ra.auth.username")}
                disabled={loading}
                validate={required()}
                fullWidth
              />
            </Box>
            <Box sx={{ marginTop: "1em" }}>
              <TextInput
                source="password"
                label={translate("ra.auth.password")}
                type="password"
                disabled={loading}
                validate={required()}
                fullWidth
              />
            </Box>
          </Box>
          <CardActions sx={{ padding: "0 1em 1em 1em" }}>
            <Button
              variant="contained"
              type="submit"
              color="warning"
              disabled={loading}
              fullWidth
              className="btn-layout-sign-in"
            >
              {loading && <CircularProgress size={25} thickness={2} />}
              {translate("ra.auth.sign_in")}
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Form>
  );
};

MyLogin.propTypes = {
  authProvider: PropTypes.func,
  previousRoute: PropTypes.string,
};

export default MyLogin;
