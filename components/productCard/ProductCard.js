import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%"
  },
  media: {
    height: "40px"
  }
});
const truncate = (input) => {
  return input.length > 25 ? `${input.substring(0, 25)}...` : input;
};

const ProductCard = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          style={{ height: "0", paddingTop: "80%" }}
          image={product.image}
          title="Best Seller Product"
        />
        <CardContent>
          <h3 style={{ margin: "0" }}>{truncate(product.title)}</h3>
          <h3 style={{ margin: "0" }}>
            ${product.price}
            <h4
              style={{
                textDecoration: "line-through",
                color: "#696969",
                margin: "0"
              }}
            >
              {"$" + (product.price + 0.2 * product.price).toFixed(2)}
            </h4>
          </h3>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ProductCard;
