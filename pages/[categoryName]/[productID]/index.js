import Layout from "../../../components/layout/Layout";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { Products } from "../../../data/products/Products";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
const offer = (price, mrp) => {
  const offerPrice = (((parseInt(mrp) - parseInt(price)) / parseInt(mrp)) * 100)
    .toString()
    .slice(0, 4);
  return offerPrice + "%";
};
const useStyles = makeStyles((theme) => ({
  productDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "Left",
    justifyContent: "flex-start",
    fontSize: "clamp(16px,2vw,18px)",
    height: "100%",
    width: "95%",
    padding: "15px",
    margin: "8px 0px",
  },
  deliveryDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "Left",
    justifyContent: "flex-start",
    fontSize: "clamp(16px,2vw,18px)",
    height: "100%",
    width: "95%",
    padding: "15px",
    margin: "8px 0px",
  },
  sellerDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "Left",
    justifyContent: "flex-start",
    fontSize: "clamp(16px,2vw,18px)",
    height: "100%",
    width: "95%",
    padding: "15px",
    margin: "8px 0px",
  },
  descDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "Left",
    justifyContent: "flex-start",
    fontSize: "clamp(16px,2vw,18px)",
    height: "100%",
    width: "95%",
    padding: "15px",
    margin: "8px 0px",
    marginBottom: "80px",
  },
  priceSpanWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  img: {
    maxWidth: "350px",
  },
  head: {
    padding: "5px",
    fontSize: "clamp(12px,4vw,18px)",
    textAlign: "center",
  },
  cartBtn: {
    display: "flex",
    width: "100%",
    padding: "5px",
    borderRadius: "5px",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsWrap: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  priceSpan: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  mrpWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    padding: "5px",
    width: "100%",
  },
  sellingPrice: {
    fontSize: "clamp(12px,3.5vw,18px)",
    marginRight: "10px",
  },
  mrp: {
    color: "#e0e0e0",
    fontSize: "clamp(12px,3.5vw,18px)",
  },
  offer: {
    display: "flex",
    width: "30%",
    fontSize: "clamp(12px,4vw,18px)",
    padding: "5px",
    border: "1px solid green",
    borderRadius: "5px",
  },
}));
const getProduct = (Products, productName) => {
  for (let i = 0; i < Products.length; i++) {
    if (Products[i].name == productName) return Products[i];
  }
  return null;
};
const ProductList = () => {
  const classes = useStyles();
  const router = useRouter();
  const { productID: productName } = router.query;
  const product = getProduct(Products, productName);
  return (
    <>
      {product && (
        <Layout>
          <div>
            <img src={product.img} alt={product.name} className={classes.img} />
          </div>

          <Paper elevation={3} className={classes.productDiv}>
            <span className={classes.head}>{product.name}</span>
            <span className={classes.detailsWrap}>
              <span className={classes.priceSpanWrap}>
                <span className={classes.priceSpan}>
                  <span className={classes.mrpWrap}>
                    <span className={classes.sellingPrice}>
                      {`Best Price : ${product.price} `}&#8377;
                    </span>
                    <strike className={classes.mrp}>
                      {product.mrp} &#8377;
                    </strike>
                  </span>
                  <span
                    style={{ padding: "5px", fontSize: "12px", width: "100%" }}
                  >
                    Inclusive of all taxes
                  </span>
                </span>
                <span className={classes.offer}>
                  {offer(product.price, product.mrp)} OFF
                </span>
              </span>
              <Button
                size="small"
                variant="contained"
                color="primary"
                className={classes.cartBtn}
              >
                ADD TO CART
              </Button>
            </span>
          </Paper>

          <Paper className={classes.deliveryDiv}>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "5px",
                marginLeft: "10px",
                padding: "5px",
              }}
            >
              <span style={{ marginBottom: "15px" }}>
                Delivery Option : Cash on delivery
              </span>
              <span style={{ fontWeight: "bold" }}>
                Delivery By August 31, 2021
              </span>
            </span>
          </Paper>

          <Paper className={classes.sellerDiv} style={{ marginTop: "15px" }}>
            <span style={{ display: "flex" }}>
              <span
                style={{
                  marginBottom: "5px",
                  paddingLeft: "15px",
                }}
              >
                {" "}
                Seller Information{" "}
              </span>
            </span>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
                marginTop: "5px",
              }}
            >
              <span>
                <span style={{ padding: "15px" }}>
                  <span style={{ color: "#5e5e5e" }}>Manufactured By:</span>
                </span>
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "5px",
                }}
              >
                <span style={{ paddingLeft: "15px" }}>ABC Firm</span>
                <span style={{ paddingLeft: "15px" }}>
                  hootagalli,mysuru 570018
                </span>
              </span>
            </span>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
                marginTop: "10px",
              }}
            >
              <span>
                <span style={{ padding: "15px" }}>
                  <span style={{ color: "#5e5e5e" }}>Packed By:</span>
                </span>
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "5px",
                }}
              >
                <span style={{ paddingLeft: "15px" }}>DEF Firm</span>
                <span style={{ paddingLeft: "15px" }}>
                  hootagalli,mysuru 570018
                </span>
              </span>
            </span>
          </Paper>

          <Paper className={classes.descDiv} style={{ marginTop: "15px" }}>
            <span
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "space-around",
                color: "green",
                borderBottom: "2px solid green",
              }}
            >
              <span style={{ marginBottom: "5px" }}> Description </span>
            </span>
            <span
              style={{
                padding: "10px",
                textAlign: "justify",
                color: "#000",
                marginTop: "10px",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing
            </span>

            <span
              style={{
                padding: "10px",
                textAlign: "justify",
                color: "#000",
                marginTop: "5px",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing
            </span>
          </Paper>
        </Layout>
      )}
    </>
  );
};
export default ProductList;
