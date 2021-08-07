import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";

const useStyles = makeStyles({
  root: {
    width: "95%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "5px",
    marginTop: "15px"
  },
  content: {
    fontSize: "16px",
    fontWeight: "500"
  },
  upload_hide: {
    display: "none"
  },
  upload_btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#10ABBF",
    color: "white"
  }
});

const UploadCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        Upload Prescription and Get Call Back!
      </CardContent>
      <CardActions>
        <input
          accept="image/*"
          className={classes.upload_hide}
          id="upload_input"
          multiple
          type="file"
        />
        <label htmlFor="upload_input">
          <Button
            variant="contained"
            component="span"
            size="small"
            className={classes.upload_btn}
          >
            Upload
            <PublishRoundedIcon />
          </Button>
        </label>
      </CardActions>
    </Card>
  );
};
export default UploadCard;
