import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%"
  },
  media: {
    height: "40px",
    margin: "10px"
  },
  content: {
    margin: "10px",
    fontSize: "16px",
    fontWeight: "600",
    fontStyle: "italic"
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
        <CardContent className={classes.content}>
          <p style={{ margin: "0" }}>{truncate(product.title)}</p>
          <p style={{ margin: "0" }}>
            ${product.price}
            <p
              style={{
                textDecoration: "line-through",
                color: "#696969",
                margin: "0"
              }}
            >
              {"$" + (product.price + 0.2 * product.price).toFixed(2)}
            </p>
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ProductCard;
