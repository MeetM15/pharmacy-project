import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "320px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 25px",
    borderRadius: "10px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: "30px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  field: {
    margin: "15px 0px"
  }
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={10}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          autoComplete="fname"
          name="firstName"
          variant="outlined"
          required
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus
          className={classes.field}
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="lname"
          className={classes.field}
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          name="phone"
          label="Phone Number"
          type="phone"
          id="phone"
          className={classes.field}
        />
        <TextField
          variant="outlined"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          className={classes.field}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
