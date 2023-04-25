// import libraries
import { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { Form, required, TextInput, useLogin, useNotify } from "react-admin";
import {
  Button,
  Card,
  CardActions,
  CircularProgress,
  Box,
} from "@mui/material";

// import styling
import "./Layout.css";
import { MyLogo } from "./Logo";

export const MyLogin = () => {
  const [loading, setLoading] = useState(false);

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
            <MyLogo width="300px" />
          </Box>
          <Box sx={{ padding: "0 1em 1em 1em" }}>
            <Box sx={{ marginTop: "1em" }}>
              <TextInput
                autoFocus
                source="username"
                label={"Username"}
                disabled={loading}
                validate={required()}
                fullWidth
              />
            </Box>
            <Box sx={{ marginTop: "1em" }}>
              <TextInput
                source="password"
                label={"Password"}
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
              {"sign in"}
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
