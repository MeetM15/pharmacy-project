import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "320px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "75px 25px",
    borderRadius: "10px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: "50px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn() {
  const [phone, setPhone] = useState();
  const classes = useStyles();

  const handlePhone = (value) => {
    setPhone(value);
  };

  return (
    <Paper className={classes.paper} elevation={10}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
        <PhoneInput
          country="in"
          onlyCountries={["in"]}
          value={phone}
          onChange={handlePhone}
          disableCountryCode={true}
          placeholder="Enter Phone No."
          inputStyle={{ width: "100%" }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item>
            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
